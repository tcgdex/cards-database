import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Pangoro",
		fr: "Pandarbare",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		675,
	],
	hp: 120,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Pancham",
		fr: "Pandespiègle",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Clobber",
				fr: "Tabassage",
			},
			effect: {
				en: "You may discard an Item card from your hand. If you do, this attack does 40 more damage.",
				fr: "Vous pouvez défausser une carte Objet de votre main. Dans ce cas, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hammer Arm",
				fr: "Marto-Poing",
			},
			effect: {
				en: "Discard the top card of your opponent's deck.",
				fr: "Défaussez la carte du dessus du deck de votre adversaire.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
