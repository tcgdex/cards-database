import { Card } from '../../../interfaces'
import Set from '../HGSS Black Star Promos'

const card: Card = {
	name: {
		en: "Latias",
		fr: "Latias"
	},
	illustrator: "Wataru Kawahara",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		380,
	],
	hp: 80,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Assist",
				fr: "Assist-Énergie"
			},
			effect: {
				en: "Search your discard pile for a basic Energy card and attach it to 1 of your Benched Pokémon.",
				fr: "Choisissez dans votre pile de défausse une carte Énergie de base et attachez-la à 1 des Pokémon de votre Banc."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Infinite Wind",
				fr: "Vent éternel"
			},
			effect: {
				en: "If Latios is on your Bench, remove 2 damage counters from each of your Benched Pokémon.",
				fr: "Si Latios est sur votre Banc, retirez 2 marqueurs de dégât à chacun de vos Pokémon de Banc."
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	variants: [
		{
			type: "holo",
			foil: "cracked-ice"
		},
		{
			type: "holo",
			foil: "cosmos"
		}
	]




}

export default card
