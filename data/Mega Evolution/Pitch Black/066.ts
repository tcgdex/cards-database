import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "Pikipek has strong muscles in its neck, so it won't hurt itself even if it violently shakes its head."
	},

	name: {
		en: "Pikipek",
		fr: "Picassaut",
		es: "Pikipek",
		'es-mx': "Pikipek",
		de: "Peppeck"
	},

	illustrator: "Koji Nakata",
	rarity: "Common",
	category: "Pokemon",
	dexId: [731],
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Double Stab"
		},

		cost: ["Colorless"],

		damage: "10x",

		effect: {
			en: "Flip 2 coins. This attack does 10 damage for each heads"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895850,
				tcgplayer: 704823
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895850,
				tcgplayer: 704823
			}
		},
	],
}

export default card
