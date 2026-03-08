import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Dodrio",
		fr: "Dodrio",
		de: "Dodri"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
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
		fr: "Doduo"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Retreat Aid",
				fr: "Soutien de retraite",
				de: "Rückzugshilfe"
			},
			effect: {
				en: "As long as Dodrio is on your Bench, you pay Colorless Colorless less to retreat your Active Pokémon (excluding Pokémon-ex and Baby Pokémon).\"",
				fr: "Tant que Dodrio est sur votre Banc, vous n'avez pas à payer  pour faire battre en retraite votre Pokémon Actif (sauf pour les Pokémon-ex et les Bébés Pokémon).",
				de: "Solange sich Dodri auf deiner Bank befindet, kostet dich der Rückzug deiner Aktiven Pokémon (außer Pokémon-ex und Baby-Pokémon).   weniger."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tri Attack",
				fr: "Triplattaque",
				de: "Triplette"
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20x",

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

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276197,
		tcgplayer: 84850
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
