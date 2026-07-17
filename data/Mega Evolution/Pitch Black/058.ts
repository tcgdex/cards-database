import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "Mabosstiff loves playing with children. Though usually gentle, it takes on an intimidating look when protecting its family."
	},

	name: {
		en: "Mabosstiff",
		fr: "Dogrino",
		es: "Mabosstiff",
		'es-mx': "Mabosstiff",
		de: "Mastifioso"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [943],
	hp: 140,
	types: ["Darkness"],

	evolveFrom: {
		en: "Maschiff"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Bite"
		},

		cost: ["Darkness", "Darkness"],

		damage: 60
	}, {
		name: {
			en: "Plunging Headbutt"
		},

		cost: ["Darkness", "Darkness", "Darkness"],

		damage: 210,

		effect: {
			en: "During your opponent's next turn, this Pokémon receives 100 more damage from your opponent's Pokémon's attacks"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895843,
				tcgplayer: 704815
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895843,
				tcgplayer: 704815
			}
		},
	],
}

export default card
