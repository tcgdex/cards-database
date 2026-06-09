import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2024'

const card: Card = {
	name: {
		en: "Charizard",
		fr: "Dracaufeu",
		es: "Charizard",
		it: "Charizard",
		pt: "Charizard",
		de: "Glurak"
	},

	illustrator: "Ryuta Fuse",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [6],

	hp: 170,

	types: ["Fire"],

	stage: "Stage2",

	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
		es: "Charmeleon",
		it: "Charmeleon",
		pt: "Charmeleon",
		de: "Glutexo"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Battle Sense"
			},
			effect: {
				en: "Once during your turn, you may look at the top 3 cards of your deck and put 1 of them into your hand. Discard the other cards."
			}
		}
	],

	attacks: [
		{
			cost: ["Fire", "Fire"],
			name: {
				en: "Royal Blaze",
			},
			damage: "100+",
			effect: {
				en: "This attack does 50 more damage for each Leon card in your discard pile.",
			},
		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 802823,
				tcgplayer: 614370
			}
		}
	]
}

export default card

