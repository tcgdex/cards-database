import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "It brought rains by opening portals to another world. It was revered as a bringer of plentiful harvests."
	},

	name: {
		en: "Bronzong",
		fr: "Archéodong",
		es: "Bronzong",
		'es-mx': "Bronzong",
		de: "Bronzong"
	},

	illustrator: "Uta",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [437],
	hp: 130,
	types: ["Metal"],

	evolveFrom: {
		en: "Bronzor"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Gentle Slap"
		},

		cost: ["Metal"],

		damage: 40
	}, {
		name: {
			en: "Metal Block"
		},

		cost: ["Metal", "Metal", "Colorless"],

		damage: 120,

		effect: {
			en: "During your opponent's next turn, this Pokémon receives 100 less damage from your opponent's Active Pokémon's attacks"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],
	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895849,
				tcgplayer: 704821
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895849,
				tcgplayer: 704821
			}
		},
	],
}

export default card
