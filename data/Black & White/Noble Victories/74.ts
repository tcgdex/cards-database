import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Landorus",
		fr: "Démétéros",
		es: "Landorus",
		it: "Landorus",
		pt: "Landorus",
		de: "Demeteros"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		645,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Abundant Harvest",
				fr: "Récolte Abondante",
			},
			effect: {
				en: "Attach a basic Energy card from your discard pile to this Pokémon.",
				fr: "Attachez une carte Énergie de base de votre pile de défausse à ce Pokémon.",
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Gaia Hammer",
				fr: "Marteau de Gaïa",
			},
			effect: {
				en: "Does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chaque Pokémon de Banc (les vôtres et ceux de votre adversaire). (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280197,
		tcgplayer: 86591
	}
}

export default card
