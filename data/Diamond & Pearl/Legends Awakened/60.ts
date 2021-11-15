import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Ledian",
		fr: "Coxyclaque",
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		166,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Ledyba",
		fr: "Ledyba",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Comet Punch",
				fr: "Poing comète",
			},
			effect: {
				en: "Flip 4 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
			},
			damage: "20×",

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Baton Pass",
				fr: "Relais",
			},
			effect: {
				en: "You may switch Ledian with 1 of your Benched Pokémon. If you do, move as many Energy cards attached to Ledian as you like to the new Active Pokémon.",
				fr: "Vous pouvez échanger Coxyclaque avec 1 des Pokémon de votre Banc. Déplacez alors sur le nouveau Pokémon Actif autant de cartes Énergie attachées à Coxyclaque que vous le voulez.",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		fr: "Il tire sa force de la lumière des étoiles. Plus il y en a et plus ses motifs dorsaux sont grands."
	}
}

export default card
