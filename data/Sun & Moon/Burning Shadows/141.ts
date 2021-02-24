import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Noivern-GX",
		fr: "Bruyverne-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		715,
	],
	hp: 200,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Noibat",
		fr: "Sonistrelle",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Distort",
				fr: "Torsion",
			},
			effect: {
				en: "Your opponent can't play any Item cards from their hand during their next turn.",
				fr: "Votre adversaire ne peut pas jouer de carte Objet de sa main pendant son prochain tour.",
			},
			damage: 50,

		},
		{
			cost: [
				"Psychic",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Sonic Volume",
				fr: "Volume Sonique",
			},
			effect: {
				en: "Your opponent can't play any Special Energy cards from their hand during their next turn.",
				fr: "Votre adversaire ne peut pas jouer de carte Énergie spéciale de sa main pendant son prochain tour.",
			},
			damage: 120,

		},
		{
			cost: [
				"Psychic",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Boomburst-GX",
				fr: "Bang Sonique-GX",
			},
			effect: {
				en: "This attack does 50 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 50 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],





}

export default card
