import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Slakoth",
		fr: "Parecool",
		es: "Slakoth",
		it: "Slakoth",
		pt: "Slakoth",
		de: "Bummelz"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		287,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Big Yawn",
				fr: "Gros Bâillement",
				es: "Gran Bostezo",
				it: "Gransbadiglio",
				pt: "Grande Bocejo",
				de: "Großer Gähner"
			},
			effect: {
				en: "Both Active Pokémon are now Asleep.",
				fr: "Les deux Pokémon Actifs sont maintenant Endormis.",
				es: "Ambos Pokémon Activos pasan a estar Dormidos.",
				it: "Entrambi i Pokémon attivi vengono addormentati.",
				pt: "Ambos os Pokémon Ativos agora estão Adormecidos.",
				de: "Beide Aktiven Pokémon schlafen jetzt."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 281745
	}
}

export default card
