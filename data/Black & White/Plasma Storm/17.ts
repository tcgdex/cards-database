import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Infernape",
		fr: "Simiabraz",
		es: "Infernape",
		it: "Infernape",
		pt: "Infernape",
		de: "Panferno"
	},

	illustrator: "5ban Graphics",
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
				"Colorless",
			],
			name: {
				en: "Torment",
				fr: "Tourmente",
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
				fr: "Choisissez 1 des attaques du Pokémon Défenseur. Le Pokémon ciblé ne peut pas utiliser l'attaque choisie pendant le prochain tour de votre adversaire.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Malevolent Fire",
				fr: "Feu Malveillant",
			},
			effect: {
				en: "Discard all Energy attached to this Pokémon.",
				fr: "Défaussez toutes les Énergies attachées à ce Pokémon.",
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 280757
	}
}

export default card
