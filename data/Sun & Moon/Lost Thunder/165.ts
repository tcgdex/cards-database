import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Trumbeak",
		fr: "Piclairon",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		732,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Pikipek",
		fr: "Picassaut",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Mountain Pass",
				fr: "Col de Montagne",
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is in your hand, you may reveal it. If you do, look at the top card of your opponent's deck and put this Pokémon in the Lost Zone. If that card is a Supporter card, you may put it in the Lost Zone. If your opponent has no cards in their deck, you can't use this Ability.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon se trouve dans votre main, vous pouvez le montrer. Dans ce cas, regardez la carte du dessus du deck de votre adversaire et placez ce Pokémon dans la Zone Perdue. Si cette carte est une carte Supporter, vous pouvez la placer dans la Zone Perdue. Si le deck de votre adversaire ne contient aucune carte, vous ne pouvez pas utiliser ce talent.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Peck",
				fr: "Picpic",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
