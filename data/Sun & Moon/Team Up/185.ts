import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Ampharos-GX",
		fr: "Pharamp-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		181,
	],
	hp: 240,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Flaaffy",
		fr: "Lainergie",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Power Recharge",
				fr: "Recharge Puissance",
			},
			effect: {
				en: "Put all Electropower cards from your discard pile into your hand.",
				fr: "Placez toutes les cartes Électropuissance de votre pile de défausse dans votre main.",
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Impact Bolt",
				fr: "Frappe Éclair",
			},
			effect: {
				en: "Discard all Lightning Energy from this Pokémon.",
				fr: "Défaussez toute l’Énergie Lightning de ce Pokémon.",
			},
			damage: 150,

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Electrical-GX",
				fr: "Électricité-GX",
			},
			effect: {
				en: "Search your deck for up to 7 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck. (You can't use more than 1 GX attack in a game.)",
				fr: "Cherchez jusqu’à 7 Pokémon dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
