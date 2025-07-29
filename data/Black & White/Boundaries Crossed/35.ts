import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Golduck",
		fr: "Akwakwak",
		es: "Golduck",
		it: "Golduck",
		pt: "Golduck",
		de: "Entoron"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		55,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Psyduck",
		fr: "Psykokwak",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Amnesia",
				fr: "Amnésie",
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
				fr: "Choisissez 1 des attaques du Pokémon Défenseur. Le Pokémon ciblé ne peut pas utiliser l'attaque choisie pendant le prochain tour de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Aquafall",
				fr: "Aquasplash",
			},
			effect: {
				en: "Discard all Energy attached to this Pokémon.",
				fr: "Défaussez toutes les Énergies attachées à ce Pokémon.",
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 280621
	}
}

export default card
