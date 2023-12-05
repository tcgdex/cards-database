import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Murkrow",
		fr: "Cornèbre",
		de: "Kramurx"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		198,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Swarm",
				fr: "Nuée",
				de: "Ausschwärmen"
			},
			effect: {
				en: "Search your deck for Murkrow and put it onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez Cornèbre dans votre deck et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach einer Kramurx-Karte und lege sie auf deine Bank. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hide Crowd",
				fr: "Cache foule",
				de: "Schutz in der Menge"
			},
			effect: {
				en: "Switch Murkrow with 1 of your Benched Pokémon.",
				fr: "Échangez Cornèbre avec 1 de vos Pokémon de Banc.",
				de: "Tausche Kramurx gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	description: {
		fr: "On dit que rencontrer un Cornèbre la nuit est signe de mauvais augure."
	}
}

export default card
