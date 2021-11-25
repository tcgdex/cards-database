import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Fearow",
		fr: "Rapasdepic",
	},

	illustrator: "match",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		22,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Spearow",
		fr: "Piafabec",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Repeating Drill",
				fr: "Multivrille"
			},
			effect: {
				en: "Flip 5 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 5 pièces. Cette attaque inflige 20 dégâts multiplié par le nombre de côtés face."
			},
			damage: "20×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Nosedive",
				fr: "Descente en Piqué"
			},
			effect: {
				en: "This Pokémon does 20 damage to itself.",
				fr: "Ce Pokémon s'inflige 20 dégâts."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	abilities: [{
		type: "Ability",

		name: {
			fr: "{title}:"
		},

		effect: {
			fr: "{title}: Vous pouvez jouer cette carte de votre main pour faire évoluer un Pokémon pendant votre premier tour ou pendant le tour où vous le jouez."
		}
	}]
}

export default card
