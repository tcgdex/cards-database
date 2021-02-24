import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Infernape",
		fr: "Simiabraz",
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		392,
	],
	hp: 130,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Monferno",
		fr: "Chimpenfeu",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Flare Blitz",
				fr: "Boutefeu",
			},
			effect: {
				en: "Discard all Fire Energy attached to this Pokémon.",
				fr: "Défaussez toutes les Énergies Fire attachées à ce Pokémon.",
			},
			damage: 120,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Flare Up",
				fr: "Prise de Bec",
			},
			effect: {
				en: "If you have fewer than 10 Fire Energy cards in your discard pile, this attack does nothing. Shuffle 10 Fire Energy cards from your discard pile into your deck.",
				fr: "Si vous avez moins de 10 cartes Énergie Fire dans votre pile de défausse, cette attaque ne fait rien. Mélangez 10 cartes Énergie Fire de votre pile de défausse avec votre deck.",
			},
			damage: 200,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
