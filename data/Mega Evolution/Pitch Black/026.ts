import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Vikavolt",
		fr: "Lucanon",
		es: "Vikavolt",
		'es-mx': "Vikavolt",
		de: "Donarion"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [738],
	hp: 160,
	types: ["Lightning"],

	evolveFrom: {
		en: "Charjabug"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Quick Dive"
		},

		cost: ["Lightning"],

		effect: {
			en: "This attack does 50 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon)"
		}
	}, {
		name: {
			en: "Giga Railgun"
		},

		cost: ["Lightning", "Lightning"],

		damage: 260,

		effect: {
			en: "If this Pokémon doesn't have Bolt Lightning Energy attached to it, this attack does nothing"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895814,
				tcgplayer: 704783
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895814,
				tcgplayer: 704783
			}
		},
	],
}

export default card
