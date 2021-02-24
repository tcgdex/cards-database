import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Silvally-GX",
		fr: "Silvallié-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		773,
	],
	hp: 210,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Type: Null",
		fr: "Type:0",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Gyro Unit",
				fr: "Gyro-Unité",
			},
			effect: {
				en: "Your Basic Pokémon in play have no Retreat Cost.",
				fr: "Vos Pokémon de base en jeu n’ont pas de Coût de Retraite.",
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
				en: "Turbo Drive",
				fr: "Propulsion Turbo",
			},
			effect: {
				en: "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
				fr: "Attachez une carte Énergie de base de votre pile de défausse à l’un de vos Pokémon de Banc.",
			},
			damage: 120,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rebel-GX",
				fr: "Rebelle-GX",
			},
			effect: {
				en: "This attack does 50 damage for each of your opponent's Benched Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 50 dégâts pour chaque Pokémon de Banc de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
