import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Aron",
		fr: "Galekid",
		de: "Stollunior"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		304,
	],

	hp: 60,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mountain Eater",
				fr: "Mange-montagne",
				de: "Bergfresser"
			},
			effect: {
				en: "Discard the top card of your deck. Then, remove 2 damage counters from Aron.",
				fr: "Défaussez la carte du dessus de votre deck. Ensuite, retirez 2 marqueurs de dégât à Galekid.",
				de: "Lege die oberste Karte deines Decks auf deinen Ablagestapel. Entferne anschließend 2 Schadensmarken von Stollunior."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Confront",
				fr: "Confrontation",
				de: "Konfrontieren"
			},

			damage: 30,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		en: "When it evolves, it sheds the steel carapace that covered its whole body and develops a new one."
	},

	variants: [
		{ type: 'normal', size: 'standard' },
		{ type: 'reverse', size: 'standard' }
	],

	thirdParty: {
		cardmarket: 279586,
		tcgplayer: 83639
	}
}

export default card
