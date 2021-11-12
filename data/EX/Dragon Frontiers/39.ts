import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Smeargle δ",
		fr: "Queulorior δ ESPÈCES DELTA"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		235,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Collect",
				fr: "Collectionner"
			},
			effect: {
				en: "Draw a card.",
				fr: "Piochez une carte."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flickering Tail",
				fr: "Queue tremblante"
			},
			effect: {
				en: "If the Defending Pokémon is Pokémon-ex, this attack does 10 damage plus 10 more damage and the Defending Pokémon is now Asleep.",
				fr: "Si le Pokémon Défenseur est un Pokémon-ex, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires et le Pokémon Défenseur est maintenant Endormi."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
