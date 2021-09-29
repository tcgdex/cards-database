import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Electivire",
		fr: "Elekable",
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		466,
	],

	hp: 100,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Electabuzz",
		fr: "Elektek",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Plasma",
				fr: "Plasma",
			},
			effect: {
				en: "Search your discard pile for a Lightning Energy card and attach it to Electivire.",
				fr: "Cherchez une carte Énergie Lightning dans votre pile de défausse et attachez-la à Elekable.",
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Thunder Shot",
				fr: "Tir foudroyant",
			},
			effect: {
				en: "This attack does 50 damage to each of your opponent’s Pokémon that has any Energy cards attached to it. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 50 dégâts à chacun des Pokémon de votre adversaire auxquels sont attachées des cartes Énergie. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		en: "As its electric charge amplifies, blue sparks begin to crackle between its horns."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
