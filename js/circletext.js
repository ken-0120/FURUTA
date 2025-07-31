 class CircularText {
            constructor(element, options = {}) {
                this.element = element;
                this.text = options.text || 'FURUTA*SPECIAL*SEWING*';
                this.spinDuration = options.spinDuration || 20;
                this.onHover = options.onHover || 'speedUp';
                this.init();
            }

            init() {
                this.render();
                this.setupEvents();
            }

            render() {
                const letters = Array.from(this.text);
                this.element.innerHTML = '';
                
                letters.forEach((letter, i) => {
                    const span = document.createElement('span');
                    span.textContent = letter;
                    
                    const rotationDeg = (360 / letters.length) * i;
                    const radius = this.element.offsetWidth / 3; // 要素サイズに応じて調整
                    const x = Math.cos((rotationDeg - 90) * Math.PI / 180) * radius;
                    const y = Math.sin((rotationDeg - 90) * Math.PI / 180) * radius;
                    
                    span.style.transform = `translate(${x}px, ${y}px) rotate(${rotationDeg}deg)`;
                    this.element.appendChild(span);
                });
            }

            setupEvents() {
                this.element.addEventListener('mouseenter', () => {
                    switch(this.onHover) {
                        case 'speedUp':
                            this.element.style.animationDuration = '5s';
                            break;
                        case 'slowDown':
                            this.element.style.animationDuration = '40s';
                            break;
                        case 'pause':
                            this.element.style.animationPlayState = 'paused';
                            break;
                        case 'goBonkers':
                            this.element.style.animationDuration = '1s';
                            this.element.style.transform = 'scale(0.8)';
                            break;
                    }
                });
                
                this.element.addEventListener('mouseleave', () => {
                    this.element.style.animationDuration = `${this.spinDuration}s`;
                    this.element.style.animationPlayState = 'running';
                    this.element.style.transform = 'scale(1)';
                });
            }

            setText(newText) {
                this.text = newText;
                this.render();
            }
        }