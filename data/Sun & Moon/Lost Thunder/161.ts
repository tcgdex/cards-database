import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Kecleon",
		fr: "Kecleon",
	},
	illustrator: "OOYAMA",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		352,
	],
	hp: 80,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Unit Color 1",
				fr: "Couleur Unitaire 1",
			},
			effect: {
				en: "As long as this Pokémon has Unit Energy GrassFireWater attached to it, it is a Grass, Fire, and Water Pokémon.",
				fr: "Tant que de l’Énergie Unitaire GrassFireWater est attachée à ce Pokémon, c’est un Pokémon Grass, Fire et Water.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tongue Smack",
				fr: "Frappe Langue",
			},
			effect: {
				en: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 50 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 50 dégâts supplémentaires.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
