import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Exploud ex",
		fr: "Brouhabam ex"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		295,
	],
	hp: 150,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Loudred",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Extra Noise",
				fr: "Bruit supplémentaire"
			},
			effect: {
				en: "As long as Exploud ex is your Active Pokémon, put 1 damage counter on each of your opponent's Pokémon-ex between turns.",
				fr: "Tant que Brouhabam ex est votre Pokémon Actif, placez 1 marqueur de dégât sur chacun des Pokémon-ex de votre adversaire entre deux tours."
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
				en: "Derail",
				fr: "Dérailler"
			},
			effect: {
				en: "Discard a Special Energy card, if any, attached to the Defending Pokémon.",
				fr: "Défaussez 1 carte Énergie Spéciale attachée au Pokémon Défenseur, s'il en a."
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Tail",
				fr: "Hyper-queue"
			},
			effect: {
				en: "If the Defending Pokémon has any Poké-Powers or Poké-Bodies, this attack does 60 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur possède des Poké-Powers ou des Poké-Bodies, cette attaque inflige 60 dégâts plus 20 dégâts supplémentaires."
			},
			damage: "60+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
