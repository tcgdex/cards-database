import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Mesprit",
		fr: "Créfollet",
	},
	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		481,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Silent Waves",
				fr: "Vagues Silencieuses",
			},
			effect: {
				en: "If you have Azelf in play, your opponent's Pokémon in play have no Resistance.",
				fr: "Si vous avez Créfadet en jeu, les Pokémon en jeu de votre adversaire n’ont pas de Résistance.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mind Splash",
				fr: "Splash Cérébral",
			},
			effect: {
				en: "If Uxie is on your Bench, this attack does 50 more damage.",
				fr: "Si Créhelf est sur votre Banc, cette attaque inflige 50 dégâts supplémentaires.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
