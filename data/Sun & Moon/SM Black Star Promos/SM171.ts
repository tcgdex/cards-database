import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Flareon-GX",
		fr: "Pyroli-GX",
	},
	illustrator: "PLANETA Otani",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		136,
	],
	hp: 210,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Heat Stage",
				fr: "Étape Chaleur",
			},
			effect: {
				en: "You may attach up to 3 Fire Energy cards from your hand to your Pokémon in any way you like.",
				fr: "Vous pouvez attacher jusqu’à 3 cartes Énergie Fire de votre main à vos Pokémon, de la manière que vous voulez.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Bright Flame",
				fr: "Flamme Éclatante",
			},
			effect: {
				en: "Discard 2 Fire Energy from this Pokémon.",
				fr: "Défaussez 2 Énergies Fire de ce Pokémon.",
			},
			damage: 190,

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Power Burner GX",
				fr: "Puissance Brûlante-GX",
			},
			effect: {
				en: "This attack does 20 damage for each Fire Energy card in your discard pile. (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 20 dégâts pour chaque carte Énergie Fire dans votre pile de défausse. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 20,

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
