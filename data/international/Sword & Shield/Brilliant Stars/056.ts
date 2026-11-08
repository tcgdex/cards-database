import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [150],
	set: Set,

	name: {
		'en-us': "Mewtwo",
		'fr-fr': "Mewtwo",
		'es-es': "Mewtwo",
		'it-it': "Mewtwo",
		'pt-br': "Mewtwo",
		'de-de': "Mewtu"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Life Sucker",
			'fr-fr': "Aspire-Vie",
			'es-es': "Sorbevidas",
			'it-it': "Aspiravita",
			'pt-br': "Sugador de Vida",
			'de-de': "Lebenssauger"
		},

		effect: {
			'en-us': "Heal 20 damage from this Pokémon.",
			'fr-fr': "Soignez 20 dégâts de ce Pokémon.",
			'es-es': "Cura 20 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 20 danni.",
			'pt-br': "Cure 20 pontos de dano deste Pokémon.",
			'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon."
		},

		damage: 20
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Psyburn",
			'fr-fr': "Brûlure Psy",
			'es-es': "Psicoquemadura",
			'it-it': "Psicobrucia",
			'pt-br': "Queimadura Psíquica",
			'de-de': "Psychoverbrennung"
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "A Pokémon created by recombining Mew's genes. It's said to have the most savage heart among Pokémon.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608506,
				tcgplayer: 263772
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608506,
				tcgplayer: 263772
			}
		},
		{
			type: 'reverse',
			stamp: ['set-logo'],
			thirdParty: {
				cardmarket: 610906
			}
		},
	],
}

export default card
