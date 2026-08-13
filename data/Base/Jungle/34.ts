import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Dodrio",
		fr: "Dodrio",
		it: "Dodrio",
		de: "Dodri"
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
		en: "Doduo",
		fr: "Doduo",
		it: "Doduo",
		de: "Dodu"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Retreat Aid",
				fr: "Soutien de retraite",
				it: "Assistente alla ritirata",
				de: "Rückzugshilfe"
			},
			effect: {
				en: "As long as Dodrio is Benched, pay 1 Colorless less to retreat your Active Pokémon.",
				fr: "Tant que Dodrio est sur le Banc, payez  en moins pour faire battre en retraite votre Pokémon Actif.",
				it: "Finché Dodrio rimane in Panchina, paghi 1 Energia Incolore in meno per ritirare il tuo Pokémon Attivo.",
				de: "Solange Dodri auf der Bank sitzt, zahle {C} weniger, um dein aktives Pokémon zurückzuziehen."
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
				en: "Rage",
				fr: "Frénésie",
				it: "Ira",
				de: "Raserei"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each damage counter on Dodrio.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur Dodrio.",
				it: "Infligge 10 danni, più altri 10 danni per ogni segnalino danno presente su Dodrio.",
				de: "Fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf Dodri zu."
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
		en: "Uses its three brains to execute complex plans. While two heads sleep, one head stays awake.",
		fr: "Il élabore des plans complexes avec ses trois cerveaux. Une de ses têtes reste toujours éveillée.",
		it: "Usa i suoi tre cervelli per realizzare piani complessi. Mentre due teste dormono, una rimane sveglia.",
		de: "Verwendet seine drei Gehirne zum Aushecken von komplizierten Plänen. Während zwei Köpfe schlafen, bleibt einer immer wach."
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
