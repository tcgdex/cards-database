import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Charizard",
		fr: "Dracaufeu"
	},
	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 170,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel"
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Battle Sense",
				fr: "Sens du Combat"
			},
			effect: {
				en: "Once during your turn, you may look at the top 3 cards of your deck and put 1 of them into your hand. Discard the other cards.",
				fr: "Une fois pendant votre tour, vous pouvez regarder les 3 cartes du dessus de votre deck, puis ajouter l’une d’elles à votre main. Défaussez les autres cartes."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Royal Blaze",
				fr: "Flambée Royale"
			},
			effect: {
				en: "This attack does 50 more damage for each Leon card in your discard pile.",
				fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque carte Tarak dans votre pile de défausse."
			},
			damage: "100+",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
