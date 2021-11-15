import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Walrein ex",
		fr: "Kaimorse ex"
	},
	illustrator: "Kimiya Masago",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		365,
	],
	hp: 150,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Sealeo",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Icy Aura",
				fr: "Aura glaciale"
			},
			effect: {
				en: "As long as Walrein ex is your Active Pokémon, put 1 damage count on each Active Pokémon (both yours and your opponent's) between turns, excluding Water Pokémon.",
				fr: "Tant que Kaimorse ex est votre Pokémon Actif, placez 1 marqueur de dégât sur chaque Pokémon Actif (les vôtres et ceux de votre adversaire) entre deux tours, Pokémon  exclus."
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
				en: "Water Arrow",
				fr: "Flèche d'eau"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 40 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},

		},
		{
			cost: [ 'Water', 'Water', 'Colorless', 'Colorless' ],
			name: { fr: 'Lancer glacial' },
			effect: {
				fr: 'Si le Pokémon Défenseur est un Pokémon , les dégâts de base de cette attaque sont de 120 au lieu de 80.'
			},
			damage: 80
		}
	],






}

export default card
