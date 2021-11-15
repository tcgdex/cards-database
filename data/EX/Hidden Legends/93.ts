import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Groudon ex",
		fr: "Groudon ex"
	},
	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		383,
	],
	hp: 100,
	types: [
		"Fighting",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Mark of Antiquity",
				fr: "Marque d'antiquité"
			},
			effect: {
				en: "As long as Groudon ex is your Active Pokémon, each player's Kyogre ex and Rayquaza ex can't attack.",
				fr: "Tant que Groudon ex est votre Pokémon Actif, les Kyogre ex et Rayquaza ex de chaque Joueur ne peuvent pas attaquer."
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
				en: "Rock Tumble",
				fr: "Roule-pierre"
			},
			effect: {
				en: "This attack's damage is not affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Crushing Mantle",
				fr: "Cape écrasante"
			},
			effect: {
				en: "You may discard from your hand as many Energy cards as you like. If you do, this attack does 50 damage plus 10 more damage for each Energy card you discarded.",
				fr: "Vous pouvez défausser de votre main autant de cartes Énergie que vous le voulez. Cette attaque inflige alors 50 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie défaussée."
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
