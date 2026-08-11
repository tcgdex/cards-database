import { Card } from '../../../interfaces'
import Set from '../SM trainer Kit (Lycanroc)'

const card: Card = {
	dexId: [732],
	set: Set,

	name: {
		en: "Trumbeak",
		fr: "Piclairon",
		es: "Trumbeak",
		it: "Trumbeak",
		pt: "Trumbeak",
		de: "Trompeck"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: [
		"Colorless"
	],

	evolveFrom: {
		en: "Pikipek",
		fr: "Picassaut",
		es: "Pikipek",
		it: "Pikipek",
		pt: "Pikipek",
		de: "Peppeck"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bullet Seed"
			},
			effect: {
				en: "Flip 4 coins. This attack does 20 damage for each heads."
			},
			damage: "20×"
		},
	],
	stage: "Stage1",
	retreat: 1,

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-20"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 297241,
				tcgplayer: 152830
			}
		},
	],

}

export default card