import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Salazzle-GX",
		fr: "Malamandre-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		758,
	],
	hp: 200,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Salandit",
		fr: "Tritox",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Diabolical Claws",
				fr: "Griffes Diaboliques",
			},
			effect: {
				en: "This attack does 50 damage for each Prize card you have taken.",
				fr: "Cette attaque inflige 50 dégâts pour chaque carte Récompense que vous avez récupérée.",
			},
			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Heat Blast",
				fr: "Explosion de Chaleur",
			},

			damage: 110,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Queen's Haze-GX",
				fr: "Brume de Reine-GX",
			},
			effect: {
				en: "Discard all Energy from your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Défaussez toute l’Énergie du Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
