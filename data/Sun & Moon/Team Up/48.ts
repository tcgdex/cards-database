import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Galvantula",
		fr: "Mygavolt",
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		596,
	],
	hp: 90,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Joltik",
		fr: "Statitik",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Unnerve",
				fr: "Tension",
			},
			effect: {
				en: "Whenever your opponent plays an Item or Supporter card from their hand, prevent all effects of that card done to this Pokémon.",
				fr: "Chaque fois que votre adversaire joue une carte Objet ou une carte Supporter de sa main, évitez tous les effets de cette carte sur ce Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Spider Thread",
				fr: "Fil Arachnéen",
			},
			effect: {
				en: "Put a card from your discard pile into your hand.",
				fr: "Placez une carte de votre pile de défausse dans votre main.",
			},
			damage: 40,

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
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
