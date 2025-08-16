import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Bronzong",
		fr: "Archéodong",
		de: "Bronzong"
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
				de: "Legendenzeremonie"
			},
			effect: {
				en: "Search your deck for both halves of a Pokémon LEGEND, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				fr: "Cherchez les deux moitiés d’un Pokémon LÉGENDE dans votre deck, montrez-les à votre adversaire, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				de: "Durchsuche dein Deck nach beiden Hälften einer Pokémon-LEGENDE, zeige sie deinem Gegner und nimm sie auf die Hand. Mische anschließend dein Deck."
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
				de: "Energiereflexion"
			},
			effect: {
				en: "Move an Energy card attached to Bronzong to 1 of your Benched Pokémon.",
				fr: "Prenez une carte Énergie attachée à Archéodong et attachez-la à l’un de vos Pokémon de Banc.",
				de: "Lege eine Energiekarte, die an Bronzong angelegt ist, an 1 Pokémon auf deiner Bank an."
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

	description: {
		en: "Ancient people believed that petitioning Bronzong for rain was the way to make crops grow."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279545,
		tcgplayer: 83997
	}
}

export default card
