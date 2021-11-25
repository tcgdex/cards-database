import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Celebi",
		fr: "Celebi",
	},
	illustrator: "Shin Nagasawa",
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [
		251,
	],
	hp: 70,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Leap Through Time",
				fr: "{title}:"
			},
			effect: {
				en: "When this Pokémon is Knocked Out, flip a coin. If heads, your opponent can't take a Prize card. Shuffle this Pokémon and all cards attached to it into your deck.",
				fr: "{title}: Évitez tous les effets des talents des Pokémon de votre adversaire infligés à ce Pokémon."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sparkle Mine",
				fr: "Élan Brillant",
			},
			effect: {
				en: "Put 1 damage counter on each of your opponent's Pokémon.",
				fr: "Placez 1 marqueur de dégâts sur chacun des Pokémon de votre adversaire."
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
