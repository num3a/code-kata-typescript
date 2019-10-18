// Créer un string calculator
// TODO: expose une methode Add(string numbers): int
//  1. prend en paramètres 0, 1, ou 2 nombres et retourne la somme
//  (pour une chaine de caractères vide retourne 0)
//  "" ou "1,2"
//  on commence par le plus simple
//  2. Prendre en paramètre un nombre inconnu de nombres en entrée
//  3. Permettre un caractère de nouvelle ligne à l'a place de la virgule
//  4. Support de différents délimiteurs => Regex
//  5. Les nombres négatifs lèvent une exception => check sur la valeur

const convertToNumber = (value: string): number => Number(value);
const sum = (a: number, b: number): number => a + b;

const add = (numbers: string): number => {
    const values = numbers.split(/\n|,/);
    const result = values
        .map(convertToNumber)
        .reduce(sum);
    return result;
};

export {
    add,
};
