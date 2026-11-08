import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
    set: Set,

	name: {
		'en-us': "Pawmi",
		'fr-fr': "Pohm",
		'es-es': "Pawmi",
		'it-it': "Pawmi",
		'de-de': "Pamo",
		'pt-br': "Pawmi",
		'ko-kr': "빠모"
	},

    illustrator: "whomor Inc.",
    rarity: "One Shiny",
    category: "Pokemon",

    hp: 60,
    types: ["Lightning"],
    dexId: [921],
    
    description: {
        en: "The pads of its paws are electricity-discharging organs. Pawmi fires electricity from its forepaws while standing unsteadily on its hind legs.",
    },

    stage: "Basic",
    
    attacks: [
        {
			name: {
				'en-us': "Random Spark",
				'fr-fr': "Étincelle Surprise",
				'es-es': "Chispa al Azar",
				'it-it': "Scintilla Casuale",
				'pt-br': "Fagulha Aleatória",
				'de-de': "Zufälliger Funke"
			},

            cost: ["Lightning"],
            
            effect: {
                en: "This attack does 10 damage to 1 of your opponent's Pokémon.",
                fr: "Cette attaque inflige 10 dégâts à l'un des Pokémon de votre adversaire.",
                es: "Este ataque hace 10 puntos de daño a 1 de los Pokémon de tu rival.",
                it: "Questo attacco infligge 10 danni a uno dei Pokémon\ndel tuo avversario.",
                de: "Diese Attacke fügt 1 Pokémon deines Gegners 10 Schadenspunkte zu.",
                'pt-br': "Este ataque causa 10 pontos de dano a 1 dos Pokémon do seu oponente.",
                ko: "상대의 포켓몬 1마리에게 10데미지를 준다."
            }
        },
    ],

    weaknesses: [
        {
        type: "Fighting",
        value: "+20",
        },
    ],

    retreat: 1,
}

export default card