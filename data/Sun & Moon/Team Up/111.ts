import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Alolan Ninetales",
		fr: "Feunard d’Alola",
	},
	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		38,
	],
	hp: 110,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Alolan Vulpix",
		fr: "Goupix d’Alola",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Luminous Barrier",
				fr: "Barrière Lumineuse",
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to this Pokémon by your opponent's Pokémon-GX or Pokémon-{EX}.",
				fr: "Évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon par les Pokémon-GX ou les Pokémon-{EX} de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aurora Beam",
				fr: "Onde Boréale",
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
