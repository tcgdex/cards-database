import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Zygarde",
		fr: "Zygarde",
	},
	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		718,
	],
	hp: 90,
	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Earthen Aura",
				fr: "Aura Terrestre",
			},
			effect: {
				en: "Damage from this Pokémon's attacks isn't affected by Weakness or Resistance.",
				fr: "Les dégâts des attaques de ce Pokémon ne sont pas affectés par la Faiblesse ou la Résistance.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Peace Maker",
				fr: "Pacificateur",
			},
			effect: {
				en: "If your opponent has an Ultra Beast in play, this attack does 30 more damage.",
				fr: "Si votre adversaire a une Ultra-Chimère en jeu, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 30,

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
