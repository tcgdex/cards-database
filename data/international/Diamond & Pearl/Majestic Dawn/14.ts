import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Zapdos",
		'fr-fr': "Electhor",
		'de-de': "Zapdos"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		145,
	],

	hp: 100,

	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Sheet Lightning",
				'fr-fr': "Feuille éclair",
				'de-de': "Flächenblitz"
			},
			effect: {
				'en-us': "Once during your turn, when you put Zapdos from your hand onto your Bench, you may flip a coin. If heads, put 1 damage counter on each of your opponent's Pokémon.",
				'fr-fr': "Une seule fois lors de votre tour, lorsque vous placez Electhor de votre main sur votre Banc, vous pouvez lancer une pièce. Si c'est face, placez 1 marqueur de dégât sur chacun des Pokémon de votre adversaire.",
				'de-de': "Einmal während deines Zuges kannst du, wenn du Zapdos von deiner Hand auf deine Bank legst, 1 Münze werfen. Bei \"Kopf\" lege 1 Schadensmarke auf jedes Pokémon deines Gegners."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Raging Thunder",
				'fr-fr': "Tonnerre déchaîné",
				'de-de': "Tosender Donner"
			},
			effect: {
				'en-us': "Does 40 damage to 1 of your Pokémon, and don't apply Weakness and Resistance to this damage.",
				'fr-fr': "Inflige 40 dégâts à 1 de vos Pokémon. Vous ne pouvez pas appliquer la Faiblesse et la Résistance à ces dégâts.",
				'de-de': "Dieser Angriff fügt 1 deiner Pokémon 40 Schadenspunkte zu, wende dabei Schwäche und Resistenz nicht an."
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

	retreat: 2,

	description: {
		'en-us': "A legendary Pokémon that is said to live in thunderclouds. It freely controls lightning bolts.",
	},

	thirdParty: {
		cardmarket: 278063,
		tcgplayer: 90717
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
