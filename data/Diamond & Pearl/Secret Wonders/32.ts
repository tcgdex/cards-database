import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Minun",
		fr: "Negapi",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		312,
	],
	hp: 60,
	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Minus Charge",
				fr: "Recharge négative",
			},
			effect: {
				en: "Once during your turn (before your attack), if any of your Pokémon were Knocked Out during your opponent's last turn, you may draw 2 cards. You can't use more than 1 Minus Charge Poké-Power each turn. This power can't be used if Minun is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si vos Pokémon ont été mis K.O lors du dernier tour de votre adversaire, vous pouvez piocher 2 cartes. Vous ne pouvez pas utiliser plus d'1 Poké-Power Recharge négative par tour. Ce pouvoir ne peut pas être utilisé si Negapi est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Tag Play (-)",
				fr: "Jeu du chat (-)",
			},
			effect: {
				en: "If you have Plusle on your Bench, you may move an Energy card attached to Minun to 1 of your Benched Pokémon.",
				fr: "Si Posipi se trouve sur votre Banc, vous pouvez déplacer une carte Énergie attachée à Negapi sur 1 des Pokémon de votre Banc.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
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
