import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "An attached Shellder won't let go because of the tasty flavor that oozes out of Slowbro's tail.",
		de: "Das Muschas an seiner Rute lässt nicht locker, da ein leckerer Geschmack aus dieser strömt."
	},

	name: {
		en: "Slowbro",
		fr: "Flagadoss",
		es: "Slowbro",
		'es-mx': "Slowbro",
		de: "Lahmus"
	},

	illustrator: "Mekayu",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [80],
	hp: 130,
	types: ["Psychic"],

	evolveFrom: {
		en: "Slowpoke"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "All Out",
			es: "A por Todas",
			'es-mx': "Sin Más",
			de: "Aufs Ganze gehen"
		},

		cost: ["Psychic"],

		damage: "50+",

		effect: {
			en: "If you have no cards in your hand, this attack does 160 more damage.",
			es: "Si no tienes ninguna carta en tu mano, este ataque hace 160 puntos de daño más.",
			'es-mx': "Si no tienes ninguna carta en tu mano, este ataque hace 160 puntos de daño más.",
			de: "Wenn du keine Karten auf deiner Hand hast, fügt diese Attacke 160 Schadenspunkte mehr zu."
		}
	}, {
		name: {
			en: "Zen Headbutt",
			es: "Cabezazo Zen",
			'es-mx': "Cabezazo Zen",
			de: "Zen-Kopfstoß"
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
