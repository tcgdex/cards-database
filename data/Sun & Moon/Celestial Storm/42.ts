import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Huntail",
		fr: "Serpang",
	},
	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		367,
	],
	hp: 110,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Clamperl",
		fr: "Coquiperl",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Big Bite",
				fr: "Grosse Morsure",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dangerous Bite",
				fr: "Morsure Dangereuse",
			},
			effect: {
				en: "If your opponent's Active Pokémon is a Basic Pokémon, this attack does 80 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon de base, cette attaque inflige 80 dégâts supplémentaires.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
