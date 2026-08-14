import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Thundurus-EX",
		fr: "Fulguris-EX",
		es: "Thundurus-EX",
		it: "Thundurus-EX",
		pt: "Thundurus-EX",
		de: "Voltolos-EX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		642,
	],
	hp: 170,
	types: [
		"Lightning",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Raiden Knuckle",
				fr: "Appel Foudroyant",
				de: "Herr des Donners"
			},
			effect: {
				en: "Attach an Energy card from your discard pile to 1 of your Benched Team Plasma Pokémon.",
				fr: "Attachez une carte Énergie de votre pile de défausse à 1 de vos Pokémon de la Team Plasma sur votre Banc.",
				de: "Nimm 1 Energiekarte von deinem Ablagestapel und lege sie an 1 Team Plasma-Pokémon auf deiner Bank an."
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thunderous Noise",
				fr: "Grondement Tonitruant",
				de: "Donnerschall"
			},
			effect: {
				en: "If this Pokémon has any Plasma Energy attached to it, discard an Energy attached to the Defending Pokémon.",
				fr: "Si de l'Énergie Plasma est attachée à ce Pokémon, défaussez une Énergie attachée au Pokémon Défenseur.",
				de: "Wenn an dieses Pokémon bereits Plasma-Energie angelegt ist, lege 1 an das Verteidigende Pokémon angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
