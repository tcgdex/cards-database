import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Alolan Raticate-GX",
		fr: "Rattatac d’Alola-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		20,
	],
	hp: 200,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Alolan Rattata",
		fr: "Rattata d’Alola",
	},

	suffix: "GX",

	attacks: [
		{

			name: {
				en: "Chuck Away",
				fr: "Bazarder",
			},
			effect: {
				en: "Discard up to 2 cards from your hand. This attack does 40 damage for each card you discarded in this way.",
				fr: "Défaussez jusqu’à 2 cartes de votre main. Cette attaque inflige 40 dégâts pour chaque carte défaussée de cette façon.",
			},
			damage: 40,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Fang",
				fr: "Croc de Mort",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
			},
			damage: 150,

		},
		{

			name: {
				en: "Item Maniac-GX",
				fr: "Fou d’Objets-GX",
			},
			effect: {
				en: "Search your deck for up to 6 Item cards, reveal them, and put them into your hand. Then, shuffle your deck. (You can't use more than 1 GX attack in a game.)",
				fr: "Cherchez jusqu’à 6 cartes Objet dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
