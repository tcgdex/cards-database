import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Combee",
		fr: "Apitrini",
		de: "Wadribie"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		415,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Honey Scent",
				fr: "Parfum de miel",
				de: "Honigduft"
			},
			effect: {
				en: "Remove 2 damage counters from 1 of your Pokémon.",
				fr: "Retirez à 1 de vos Pokémon 2 marqueurs de dégât.",
				de: "Entferne 2 Schadensmarken von 1 deiner Pokémon."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Flitter",
				fr: "Voltige",
				de: "Huschen"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 20 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				de: "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 20 Schadenspunkte zu. Der Schaden dieses Angriffs wird durch die Schwäche und Resistenz des gewählten Pokémon nicht verändert."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278108,
		tcgplayer: 84393
	}
}

export default card
