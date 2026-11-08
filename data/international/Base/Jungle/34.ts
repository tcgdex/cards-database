import { Card } from 'models/database/card'
import Set from '../Jungle'

const card: Card = {
	name: {
		'en-us': "Dodrio",
		'fr-fr': "Dodrio",
		'de-de': "Dodri"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		85,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Doduo",
		'fr-fr': "Doduo"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Retreat Aid",
				'fr-fr': "Soutien de retraite",
				'de-de': "Rückzugshilfe"
			},
			effect: {
				'en-us': "As long as Dodrio is Benched, pay 1 Colorless less to retreat your Active Pokémon.",
				'fr-fr': "Tant que Dodrio est sur le Banc, payez  en moins pour faire battre en retraite votre Pokémon Actif.",
				'de-de': "Solange Dodri auf der Bank sitzt, zahle  weniger, im dein aktives Pokémon zurückzuziehen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rage",
				'fr-fr': "Frénésie",
				'de-de': "Raserei"
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each damage counter on Dodrio.",
				'fr-fr': "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur Dodrio.",
				'de-de': "Fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf Dodri zu."
			},
			damage: "10+",

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
			value: "-30"
		},
	],

	description: {
		'en-us': "Uses its three brains to execute complex plans. While two heads sleep, one head stays awake.",
		'fr-fr': "Il élabore des plans complexes avec ses trois cerveaux. Une de ses têtes reste toujours éveillée."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273831,
				tcgplayer: 45137
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273831,
				tcgplayer: 45137
			}
		}
	],
}

export default card
