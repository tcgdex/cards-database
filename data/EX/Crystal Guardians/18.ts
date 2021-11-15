import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Fearow δ",
		fr: "Rapasdepic δ"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		22,
	],
	hp: 60,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Spearow",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Delta Sign",
				fr: "Signe Delta"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a Pokémon that has δ on its card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. You can't use more than 1 Delta Sign Poké-Power each turn. This power can't be used if Fearow is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir dans votre deck un Pokémon possédant le symbole δ. Montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck. Vous ne pouvez pas utiliser plus d'1 Poké-Power Signe Delta par tour. Ce pouvoir ne peut pas être utilisé si Rapasdepic est affecté par un État Spécial."
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
				en: "Pierce",
				fr: "Transpercer"
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
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
