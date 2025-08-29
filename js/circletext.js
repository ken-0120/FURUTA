class CircularText {
            constructor(element, options = {}) {
                this.element = element;
                this.text = options.text || 'FURUTA*SPECIAL*SEWING*MACHINE*';
                this.spinDuration = options.spinDuration || 20;
                this.init();
            }

            init() {
                this.render();
            }

            render() {
                const letters = Array.from(this.text);
                this.element.innerHTML = '';
                
                letters.forEach((letter, i) => {
                    const span = document.createElement('span');
                    span.textContent = letter;
                    
                    const rotationDeg = (360 / letters.length) * i;
                    const radius = this.element.offsetWidth / 3;
                    const x = Math.cos((rotationDeg - 90) * Math.PI / 180) * radius;
                    const y = Math.sin((rotationDeg - 90) * Math.PI / 180) * radius;
                    
                    span.style.transform = `translate(${x}px, ${y}px) rotate(${rotationDeg}deg)`;
                    this.element.appendChild(span);
                });
            }
        }
        document.addEventListener('DOMContentLoaded', () => {
            const circularTextElement = document.getElementById('circularText');
            if (circularTextElement) {
                new CircularText(circularTextElement, {
                    text: 'FURUTA*SPECIAL*SEWING*MACHINE*',
                    spinDuration: 20
                });
            }
        });