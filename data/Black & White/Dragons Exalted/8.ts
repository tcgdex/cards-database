import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Beautifly",
		fr: "Charmillon",
		es: "Beautifly",
		it: "Beautifly",
		pt: "Beautifly",
		de: "Papinella"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		267,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Silcoon",
		fr: "Armulys",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Triple Energy",
				fr: "Triple Énergie",
			},
			effect: {
				en: "Search your deck for 3 different types of basic Energy cards and attach them to your Pokémon in any way you like. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck 3 différents types de cartes Énergie de base et attachez-les à vos Pokémon de la manière que vous voulez. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Drainpour",
				fr: "Sangsue-Déluge",
			},
			effect: {
				en: "Heal 40 damage from each of your Benched Pokémon.",
				fr: "Soignez 40 dégâts à chacun de vos Pokémon de Banc.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280447
	}
}

export default card
