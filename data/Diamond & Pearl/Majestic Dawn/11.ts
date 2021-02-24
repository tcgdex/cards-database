import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Palkia",
		fr: "Palkia",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		484,
	],
	hp: 100,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Zone Shift",
				fr: "Orbe Perlé",
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Si un Pokémon Actif possède une Faiblesse au type Water, les attaques de Palkia infligent 20 dégâts supplémentaires à ce Pokémon (avant application de la Faiblesse et de la Résistance).",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pearl Blast",
				fr: "Changement de zone",
			},
			effect: {
				en: "You may return an Energy card attached to Palkia to your hand. If you do, choose an Energy card attached to the Defending Pokémon and return it to your opponent's hand.",
				fr: "Votre adversaire échange le Défenseur Pokémon avec 1 de ses Pokémon de Banc.",
			},
			damage: 60,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Explosion perle",
			},
			effect: {
				fr: "Vous pouvez reprendre dans votre main une carte Énergie attachée à Palkia. Choisissez alors une carte Énergie attachée au Pokémon Défenseur et demandez à votre adversaire de la reprendre dans sa main.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 3,



}

export default card
