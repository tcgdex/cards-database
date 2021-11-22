import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Feraligatr ex",
		fr: "Aligatueur ex"
	},
	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		160,
	],
	hp: 150,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Croconaw",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Overpowering Fang",
				fr: "Croc dominateur"
			},
			effect: {
				en: "As long as Feraligatr ex is your Active Pokémon, each player's Pokémon (excluding Pokémon-ex) can't use any Poké-Powers or Poké-Bodies.",
				fr: "Tant qu'Aligatueur ex est votre Pokémon Actif, les Pokémon de chaque joueur (Pokémon-ex exclus) ne peuvent pas utiliser de Poké-Powers ou de Poké-Bodies."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Tsunami",
				fr: "Tsunami"
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sore Spot",
				fr: "Point douloureux"
			},
			effect: {
				en: "Does 70 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
				fr: "Inflige 70 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur le Pokémon Défenseur."
			},
			damage: "70+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
