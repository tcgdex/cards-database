import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Mewtwo GX",
		fr: "Mewtwo-GX",
	},

	illustrator: "aky CG Works",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		150,
	],

	hp: 180,

	types: [
		"Psychic",
	],

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Super Psy Bolt",
				fr: "Super Psy",
			},

			damage: 110,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psycrush GX",
				fr: "Écrasement Psy-GX",
			},
			effect: {
				en: "Discard all Energy from your opponent’s Active Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Défaussez toute l’Énergie du Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 381234,
		tcgplayer: 197675
	}
}

export default card
