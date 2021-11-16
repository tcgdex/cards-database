import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Aggron",
		fr: "Galeking"
	},
	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		306,
	],
	hp: 110,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Lairon",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heavy Blow",
				fr: "Souffle lourd"
			},
			effect: {
				en: "Does 70 damage minus 10 damage for each damage counter on Aggron. If Aggron has any React Energy cards attached to it, this attack does 70 damage instead.",
				fr: "Inflige 70 dégâts moins 10 dégâts pour chaque marqueur de dégât sur Galeking. Si Galeking possède des cartes Énergie réaction, cette attaque inflige 70 dégâts."
			},
			damage: "70-",

		},
		{
			cost: [
				"Fighting",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bound Crush",
				fr: "Saut destructeur"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 60 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) During your next turn, Aggron can't use Bound Crush.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 60 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Lors de votre prochain tour, Galeking ne pourra pas utiliser Saut destructeur."
			},

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
