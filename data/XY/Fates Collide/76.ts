import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Aerodactyl",
		fr: "Ptéra",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		142,
	],
	hp: 120,
	types: [
		"Colorless",
	],

	stage: "RESTORED",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Jet Draft",
				fr: "Souffle Supersonique",
			},
			effect: {
				en: "Discard a Special Energy attached to your opponent's Active Pokémon.",
				fr: "Défaussez une Énergie spéciale attachée au Pokémon Actif de votre adversaire.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],




}

export default card
