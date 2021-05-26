import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Plusle",
		fr: "Posipi",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		311,
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
				en: "Plus Charge",
				fr: "Recharge positive",
			},
			effect: {
				en: "Once during your turn (before your attack), if any of your Pokémon were Knocked Out during your opponent's last turn, you may search your discard pile for up to 2 basic Energy cards, show them to your opponent, and put them into your hand. You can't use more than 1 Plus Charge Poké-Power each turn. This power can't be used if Plusle is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si vos Pokémon ont été mis K.O lors du dernier tour de votre adversaire, vous pouvez chercher dans votre pile de défausse jusqu'à 2 cartes Énergie de base. Montrez-les à votre adversaire et placez-les dans votre main. Vous ne pouvez pas utiliser plus d'1 Poké-Power Recharge positive par tour. Ce pouvoir ne peut pas être utilisé si Posipi est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Tag Play (+)",
				fr: "Jeu du chat (+)",
			},
			effect: {
				en: "If you have Minun on your Bench, you may do 20 damage to any 1 Benched Pokémon instead. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si Negapi se trouve sur votre Banc, vous pouvez infliger 20 dégâts à n'importe quel Pokémon de Banc.  (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
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
