import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Dubwool",
		fr: "Moumouflon",
		es: "Dubwool",
		it: "Dubwool",
		pt: "Dubwool",
		de: "Zwollock"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	evolveFrom: {
		en: "Wooloo",
		fr: "Moumouton",
		es: "Wooloo",
		it: "Wooloo",
		pt: "Wooloo",
		de: "Wolly"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Shibuzoh.",

	description: {
		en: "Its majestic horns are meant only to impress the opposite gender. They never see use in battle."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Bounce"
		},

		damage: 30,

		effect: {
			en: "You may switch this Pokémon with 1 of your Benched Pokémon."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Rolling Tackle"
		},

		damage: 70
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card