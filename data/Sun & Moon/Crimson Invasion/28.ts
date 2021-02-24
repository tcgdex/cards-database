import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Regice",
		fr: "Regice",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		378,
	],
	hp: 130,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Iceberg Shield",
				fr: "Bouclier Iceberg",
			},
			effect: {
				en: "If you have Regirock in play, prevent all effects of attacks, including damage, done to this Pokémon by your opponent's Stage 2 Pokémon.",
				fr: "Si vous avez Regirock en jeu, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon par les Pokémon de Niveau 2 de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Frost Smash",
				fr: "Impact Glacial",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
