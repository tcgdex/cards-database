import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Eelektrik",
		fr: "Lampéroie",
		es: "Eelektrik",
		it: "Eelektrik",
		pt: "Eelektrik",
		de: "Zapplalek"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		603,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Tynamo",
		fr: "Anchwatt",
		de: "Zapplardin"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d'Boule",
				de: "Kopfnuss"
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Shock Bolt",
				fr: "Choc'Éclair",
				de: "Schock-Blitz"
			},
			effect: {
				en: "Discard all Lightning Energy attached to this Pokémon.",
				fr: "Défaussez toutes les Énergies  attachées à ce Pokémon.",
				de: "Lege alle an dieses Pokémon angelegten {L}-Energien auf deinen Ablagestapel."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "These Pokémon have a big appetite. When they spot their prey, they attack it and paralyze it with electricity.",
		de: "Hat es seine Beute erspäht, lähmt es sie mit Elektrizität und verspeist sie anschließend."
	},

	thirdParty: {
		cardmarket: 280374,
		tcgplayer: 85068
	}
}

export default card
