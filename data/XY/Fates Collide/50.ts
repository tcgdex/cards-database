import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Carbink",
		fr: "Strassie",
	},
	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		703,
	],
	hp: 90,
	types: [
		"Fightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Safeguard",
				fr: "Rune Protect",
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to this Pokémon by your opponent's Pokémon-EX.",
				fr: "Évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon par les Pokémon-EX de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Power Gem",
				fr: "Rayon Gemme",
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
