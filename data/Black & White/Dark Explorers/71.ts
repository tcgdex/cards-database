import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Zoroark",
		fr: "Zoroark",
		es: "Zoroark",
		it: "Zoroark",
		pt: "Zoroark",
		de: "Zoroark"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		571,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Zorua",
		fr: "Zorua"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Brutal Bash",
				fr: "Ruée Brutale"
			},
			effect: {
				en: "Does 20 damage times the number of Darkness Pokémon you have in play.",
				fr: "Inflige 20 dégâts multipliés par le nombre de Pokémon  que vous avez en jeu."
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Dark Rush",
				fr: "Assaut Obscur"
			},
			effect: {
				en: "Does 20 damage times the number of damage counters on this Pokémon.",
				fr: "Inflige 20 dégâts multipliés par le nombre de marqueurs de dégâts placés sur ce Pokémon."
			},
			damage: 20,

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

	retreat: 2,

	thirdParty: {
		cardmarket: 280399,
		tcgplayer: 90754
	}
}

export default card
