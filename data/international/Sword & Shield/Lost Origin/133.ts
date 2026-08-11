import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [705],
	set: Set,

	name: {
		'en-us': "Hisuian Sliggoo",
		'fr-fr': "Colimucus de Hisui",
		'es-es': "Sliggoo de Hisui",
		'it-it': "Sliggoo di Hisui",
		'pt-br': "Sliggoo de Hisui",
		'de-de': "Hisui Viscargot"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	evolveFrom: {
		'en-us': "Goomy",
		'fr-fr': "Mucuscule",
		'es-es': "Goomy",
		'it-it': "Goomy",
		'pt-br': "Goomy",
		'de-de': "Viscora"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Rigidify",
			'fr-fr': "Solidification",
			'es-es': "Rigidez",
			'it-it': "Irrigidimento",
			'pt-br': "Enrijecer",
			'de-de': "Verfestiger"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 50 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 50 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 50 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 50 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 50 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 50 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}, {
		cost: ["Water", "Metal"],

		name: {
			'en-us': "Gentle Slap",
			'fr-fr': "Gifle Douce",
			'es-es': "Bofetada Gentil",
			'it-it': "Schiaffetto",
			'pt-br': "Tapinha",
			'de-de': "Sanfter Hieb"
		},

		damage: 40
	}],

	retreat: 3,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674145,
				tcgplayer: 284054
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674145,
				tcgplayer: 284054
			}
		},
	],
}

export default card
