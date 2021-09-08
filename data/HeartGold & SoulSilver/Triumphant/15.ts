import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Bronzong",
		fr: "Archéodong",
	},
	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		437,
	],
	hp: 90,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Bronzor",
		fr: "Archeomire",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Legend Ceremony",
				fr: "Cérémonie légendaire",
			},
			effect: {
				en: "Search your deck for both halves of a Pokémon LEGEND, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				fr: "Cherchez les deux moitiés d’un Pokémon LÉGENDE dans votre deck, montrez-les à votre adversaire, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Reflect Energy",
				fr: "Renvoi d’énergie",
			},
			effect: {
				en: "Move an Energy card attached to Bronzong to 1 of your Benched Pokémon.",
				fr: "Prenez une carte Énergie attachée à Archéodong et attachez-la à l’un de vos Pokémon de Banc.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
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
