import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Wimpod",
		'fr-fr': "Sovkipou",
		'es-es': "Wimpod",
		'it-it': "Wimpod",
		'pt-br': "Wimpod",
		'de-de': "Reißlaus"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		767,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Wimp Out",
				'fr-fr': "Escampette",
				'es-es': "Huida",
				'it-it': "Fuggifuggi",
				'pt-br': "Amarelar",
				'de-de': "Reißaus"
			},
			effect: {
				'en-us': "During your first turn, this Pokémon has no Retreat Cost.",
				'fr-fr': "Pendant votre premier tour, ce Pokémon n’a pas de Coût de Retraite.",
				'es-es': "Durante tu primer turno, este Pokémon no tiene ningún Coste de Retirada.",
				'it-it': "Durante il tuo primo turno, questo Pokémon non ha costo di ritirata.",
				'pt-br': "Durante a sua primeira vez de jogar, este Pokémon não terá custo de Recuo.",
				'de-de': "Während deines ersten Zuges hat dieses Pokémon keine Rückzugskosten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gnaw",
				'fr-fr': "Ronge",
				'es-es': "Roer",
				'it-it': "Rosicchiamento",
				'pt-br': "Roída",
				'de-de': "Nagen"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "This Pokémon is a coward. As it desperately dashes off, the flailing of its many legs leaves a sparkling clean path in its wake.",
	},

	thirdParty: {
		cardmarket: 299423,
		tcgplayer: 138286
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
