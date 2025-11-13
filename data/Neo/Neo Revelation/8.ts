import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Houndoom",
		fr: "Démolosse",
		de: "Hundemon"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		229,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Houndour",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Dark Flame",
				fr: "Flamme obscure",
				de: "Dark Flame"
			},
			effect: {
				en: "Discard 1 Energy card attached to Houndoom or this attack does nothing. If there are any Energy cards in your discard pile, attach 1 of them to Houndoom.",
				fr: "Défaussez une carte Énergie  attachée à Démolosse pour utiliser cette attaque. S'il y a des cartes Énergie  dans votre pile de défausse, choisissez-en une et attachez-la à Démolosse.",
				de: "Discard 1  Energy card attached to Houndoom or this attack does nothing. If there are any  Energy cards in your discard pile, attach 1 of them to Houndoom."
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Black Fang",
				fr: "Croc noir",
				de: "Black Fang"
			},
			effect: {
				en: "Flip a number of coins equal to the number of Energy attached to Houndoom. This attack does 30 damage plus 10 more damage for each heads.",
				fr: "Lancez un nombre de pièces égal au nombre d'Énergies  attachées à Démolosse. Cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque face.",
				de: "Flip a number of coins equal to the number of  Energy attached to Houndoom. This attack does 30 damage plus 10 more damage for each heads."
			},
			damage: "30+",

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		fr: "Quand ils entendent ses hurlements sinistres, les autres Pokémon ont un frisson dans le dos et ils retournent au nid."
	},

	thirdParty: {
		cardmarket: 274594,
		tcgplayer: 86198
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st-edition"]
		}
	]
}

export default card
