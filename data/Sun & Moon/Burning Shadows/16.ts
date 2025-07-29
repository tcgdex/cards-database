import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Wimpod",
		fr: "Sovkipou",
		es: "Wimpod",
		it: "Wimpod",
		pt: "Wimpod",
		de: "Reißlaus"
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
				en: "Wimp Out",
				fr: "Escampette",
				es: "Huida",
				it: "Fuggifuggi",
				pt: "Amarelar",
				de: "Reißaus"
			},
			effect: {
				en: "During your first turn, this Pokémon has no Retreat Cost.",
				fr: "Pendant votre premier tour, ce Pokémon n’a pas de Coût de Retraite.",
				es: "Durante tu primer turno, este Pokémon no tiene ningún Coste de Retirada.",
				it: "Durante il tuo primo turno, questo Pokémon non ha costo di ritirata.",
				pt: "Durante a sua primeira vez de jogar, este Pokémon não terá custo de Recuo.",
				de: "Während deines ersten Zuges hat dieses Pokémon keine Rückzugskosten."
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
				en: "Gnaw",
				fr: "Ronge",
				es: "Roer",
				it: "Rosicchiamento",
				pt: "Roída",
				de: "Nagen"
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

	thirdParty: {
		cardmarket: 299423
	}
}

export default card
