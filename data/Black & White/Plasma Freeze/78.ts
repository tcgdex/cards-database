import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Hydreigon",
		fr: "Trioxhydre",
		es: "Hydreigon",
		it: "Hydreigon",
		pt: "Hydreigon",
		de: "Trikephalo"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		635,
	],

	hp: 150,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Zweilous",
		fr: "Diamat",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tractorbeam",
				fr: "Rayon Inversion",
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with the Defending Pokémon. This attack does 40 damage to the new Defending Pokémon.",
				fr: "Échangez 1 des Pokémon de Banc de votre adversaire avec le Pokémon Défenseur. Cette attaque inflige 40 dégâts au nouveau Pokémon Défenseur.",
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Obsidian Fang",
				fr: "Croc d'Obsidienne",
			},
			effect: {
				en: "Before doing damage, discard all Pokémon Tool cards attached to the Defending Pokémon.",
				fr: "Avant d'infliger des dégâts, défaussez toutes les cartes Outil Pokémon attachées au Pokémon Défenseur.",
			},
			damage: 80,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 280956
	}
}

export default card
