import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Houndoom",
		'fr-fr': "Démolosse",
		'de-de': "Hundemon"
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
		'en-us': "Houndour",
		'fr-fr': "Malosse"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Dark Flame",
				'fr-fr': "Flamme obscure",
				'de-de': "Dark Flame"
			},
			effect: {
				'en-us': "Discard 1 Energy card attached to Houndoom or this attack does nothing. If there are any Energy cards in your discard pile, attach 1 of them to Houndoom.",
				'fr-fr': "Défaussez une carte Énergie  attachée à Démolosse pour utiliser cette attaque. S'il y a des cartes Énergie  dans votre pile de défausse, choisissez-en une et attachez-la à Démolosse.",
				'de-de': "Discard 1  Energy card attached to Houndoom or this attack does nothing. If there are any  Energy cards in your discard pile, attach 1 of them to Houndoom."
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
				'en-us': "Black Fang",
				'fr-fr': "Croc noir",
				'de-de': "Black Fang"
			},
			effect: {
				'en-us': "Flip a number of coins equal to the number of Energy attached to Houndoom. This attack does 30 damage plus 10 more damage for each heads.",
				'fr-fr': "Lancez un nombre de pièces égal au nombre d'Énergies  attachées à Démolosse. Cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque face.",
				'de-de': "Flip a number of coins equal to the number of  Energy attached to Houndoom. This attack does 30 damage plus 10 more damage for each heads."
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
	retreat: 1,


	description: {
		'en-us': "Upon hearing its eerie howls, other Pokémon get the shivers and head straight back to their nests.",
		'fr-fr': "Quand ils entendent ses hurlements sinistres, les autres Pokémon ont un frisson dans le dos et ils retournent au nid."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274594,
				tcgplayer: 86198
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274594,
				tcgplayer: 86198
			}
		}
	]
}

export default card
