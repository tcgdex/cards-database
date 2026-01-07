import { Card } from '../../../interfaces'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		en: "Gabite",
		fr: "Gabite"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		444,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Gible",
		fr: "Griknot"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Burrow",
				fr: "Terrier"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to Gabite by attacks during your opponent’s next turn.",
				fr: "Lancez une pièce. Si c'est face, prévenez tous les dégâts infligés à Carmache par des attaques lors du prochain tour de votre adversaire."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Distorted Wave",
				fr: "Vague tordue"
			},
			effect: {
				en: "Before doing damage, remove 2 damage counters from the Defending Pokémon.",
				fr: "Avant d'infliger des dégâts, retirez au Pokémon Défenseur 2 marqueurs de dégât."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		en: "It habitually digs up and hoards gems in its nest. Its loot is constantly targeted by thieves."
	},

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 278559,
		tcgplayer: 85598
	}
}

export default card
