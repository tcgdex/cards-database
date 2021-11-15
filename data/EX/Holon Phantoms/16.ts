import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Rayquaza δ",
		fr: "Rayquaza δ ESPÈCES DELTA"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		384,
	],
	hp: 80,
	types: [
		"Water",
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Hydro Barrier",
				fr: "Barrière aquatique"
			},
			effect: {
				en: "As long as Rayquaza has any Holon Energy cards attached to it, each of your Water Pokémon has no Weakness.",
				fr: "Tant que Rayquaza possède des cartes Énergie Holon, vos Pokémon  ne possèdent pas de Faiblesse."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Delta Search",
				fr: "Recherche Delta"
			},
			effect: {
				en: "Search your deck for a Holon Energy card and attach it to Rayquaza. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck une carte Énergie Holon et attachez-la à Rayquaza. Ensuite, mélangez votre deck."
			},

		},
		{
			cost: [
				"Water",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ozone Flare",
				fr: "Éclat d'ozone"
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
