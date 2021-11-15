import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Aggron ex",
		fr: "Galeking ex"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		306,
	],
	hp: 150,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Lairon",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Intimidating Armor",
				fr: "Armure intimidante"
			},
			effect: {
				en: "As long as Aggron ex is your Active Pokémon, your opponent's Basic Pokémon can't attack or use any Poké-Powers or Poké-Bodies.",
				fr: "Tant que Galeking ex est votre Pokémon Actif, les Pokémon de base de votre adversaire ne peuvent pas attaquer ni utiliser de Poké-Powers ou de Poké-Bodies."
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
				en: "Split Bomb",
				fr: "Bombe fendante"
			},
			effect: {
				en: "Choose 2 of your opponent's Pokémon. This attack does 30 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 2 des Pokémon de votre adversaire. Cette attaque inflige 30 dégâts à chacun. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mega Burn",
				fr: "Méga brûlure"
			},
			effect: {
				en: "During your next turn, Aggron ex can't use Mega Burn.",
				fr: "Lors de votre prochain tour, Galeking ex ne pourra pas utiliser Méga brûlure."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],




}

export default card
