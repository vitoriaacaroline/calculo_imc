export type Level = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number[];
    yourImc?: number;
}

export const levels: Level[] = [
  {title: 'Magreza',   color:'#37adab',   icon:'down',  imc:[0, 18.5]},
  {title: 'Normal',    color:'#27ba47',   icon:'up',    imc:[18.6, 24.9]},
  {title: 'Sobrepeso', color:'#d99f2b',   icon:'down',  imc:[25, 30]},
  {title: 'Obesidade', color:'#e3c427',   icon:'down',  imc:[30.1, 99]}
];

export const calculateImc = (altura:number, peso:number) => {
  const imc = peso / (altura * altura);

  for ( let i in levels) {
    if ( imc >= levels[i].imc[0] && imc <= levels[i].imc[1]){ 
       let levelCopy: Level = { ... levels[i] };

       levelCopy.yourImc = imc;
       return levelCopy
    }
  }
  return null;
}
