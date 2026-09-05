import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Sawsbuck",
		fr: "Haydaim",
		es: "Sawsbuck",
		it: "Sawsbuck",
		pt: "Sawsbuck",
		de: "Kronjuwild"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		586,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Deerling",
		fr: "Vivaldaim",
		de: "Sesokitz"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Push Down",
				fr: "Renversement",
				de: "Runterdrücken"
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
				de: "Dein Gegner tauscht das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Take Down",
				fr: "Bélier",
				de: "Bodycheck"
			},
			effect: {
				en: "This Pokémon does 20 damage to itself.",
				fr: "Ce Pokémon s'inflige 20 dégâts.",
				de: "Dieses Pokémon fügt sich selbst 20 Schadenspunkte zu."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		en: "The plants growing on its horns change according to the season. The leaders of the herd possess magnificent horns.",
		de: "Je nach Jahreszeit wächst eine andere Pflanze auf seinem Geweih. Exemplare mit prächtiger Krone führen die Herde an."
	},

	thirdParty: {
		cardmarket: 279981,
		tcgplayer: 88942
	}
}

export default card
