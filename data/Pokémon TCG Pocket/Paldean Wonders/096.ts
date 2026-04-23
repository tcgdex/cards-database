import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
    set: Set,

    name: {
		en: "Gimmighoul",
		fr: "Mordudor",
		de: "Gierspenst",
		it: "Gimmighoul",
		es: "Gimmighoul",
		pt: "Gimmighoul",
		'es-mx': "Gimmighoul"
    },

    illustrator: "Akira Komayama",
    rarity: "One Star",
    category: "Pokemon",

    hp: 60,
    types: ["Psychic"],
    dexId: [999],

    description: {
        en: "It lives inside an old treasure chest. Sometimes it gets left in shop corners since no one realizes it’s actually a Pokémon.",
    },

    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless"],

            name: {
                en: "Continuous Coin Toss",
                fr: "Lancer de Pièce Continu",
                es: "Lanzamiento Incesante de Monedas",
                it: "Lanciomoneta Continuo",
                pt: "Jogadas de Moeda Contínuas",
                de: "Dauermünzwurf"
            },

            effect: {
                en: "Flip a coin until you get tails. This attack does 20 damage for each heads.",
                fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 20 dégâts pour chaque côté face.",
                es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 20 puntos de daño por cada cara.",
                it: "Lancia una moneta finché non esce croce. Questo attacco infligge 20 danni ogni volta che esce testa.",
                pt: "Jogue uma moeda até sair coroa. Este ataque causa 20 pontos de dano para cada cara.",
                de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu."
            },

            damage: "20×"
        },
    ],

    weaknesses: [
        {
        type: "Darkness",
        value: "+20",
        },
    ],

    retreat: 1,
}

export default card