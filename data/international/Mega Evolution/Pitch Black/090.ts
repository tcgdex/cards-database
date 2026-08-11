import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Slowbro",
		'fr-fr': "Flagadoss",
		'es-es': "Slowbro",
		'es-mx': "Slowbro",
		'de-de': "Lahmus",
		'it-it': "Slowbro",
		'pt-br': "Slowbro"
	},

	illustrator: "Mékayu",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [80],
	hp: 130,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Slowpoke"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "All Out",
			'fr-fr': "À Fond",
			'es-es': "A por Todas",
			'es-mx': "Sin Más",
			'de-de': "Aufs Ganze gehen",
			'it-it': "A Tutta Forza",
			'pt-br': "Esgotado"
		},

		cost: ["Psychic"],

		damage: "50+",

		effect: {
			'en-us': "If you have no cards in your hand, this attack does 160 more damage.",
			'fr-fr': "Si vous n'avez aucune carte dans votre main, cette attaque inflige 160 dégâts supplémentaires.",
			'es-es': "Si no tienes ninguna carta en tu mano, este ataque hace 160 puntos de daño más.",
			'es-mx': "Si no tienes ninguna carta en tu mano, este ataque hace 160 puntos de daño más.",
			'de-de': "Wenn du keine Karten auf deiner Hand hast, fügt diese Attacke 160 Schadenspunkte mehr zu.",
			'it-it': "Se non hai carte in mano, questo attacco infligge 160 danni in più.",
			'pt-br': "Se você não tiver cartas na sua mão, este ataque causará 160 pontos de dano a mais."
		}
	}, {
		name: {
			'en-us': "Zen Headbutt",
			'fr-fr': "Psykoud'Boul",
			'es-es': "Cabezazo Zen",
			'es-mx': "Cabezazo Zen",
			'de-de': "Zen-Kopfstoß",
			'it-it': "Cozzata Zen",
			'pt-br': "Cabeçada Zen"
		},

		cost: ["Colorless", "Colorless", "Colorless"],

		damage: 110
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895874,
				tcgplayer: 704847
			}
		},
	],
}

export default card
