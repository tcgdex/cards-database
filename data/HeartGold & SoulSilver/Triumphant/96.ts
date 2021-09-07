import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Magnezone",
		fr: "Magnézone",
	},
	illustrator: "Noriko Hotta",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		462,
	],
	hp: 140,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Magneton",
		fr: "Magneton",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Magnetic Draw",
				fr: "Pioche magnétique",
			},
			effect: {
				en: "Once during your turn (before your attack), you may draw cards until you have 6 cards in your hand. This power can’t be used if Magnezone is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher jusqu'à ce que vous ayez 6 cartes en main. Ce Poké-Power ne peut pas être utilisé si Magnézone est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Lost Burn",
				fr: "Brûlure perdue",
			},
			effect: {
				en: "Put as many Energy cards attached to your Pokémon as you like in the Lost Zone. This attack does 50 damage times the number of Energy cards put in the Lost Zone in this way.",
				fr: "Placez autant de cartes Énergie attachées à vos Pokémon que vous le souhaitez dans la Zone Perdue. Cette attaque inflige 50 dégâts multipliés par le nombre de cartes Énergie que vous avez ainsi placées dans la Zone Perdue.",
			},
			damage: "50×",

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
	retreat: 3,



}

export default card
