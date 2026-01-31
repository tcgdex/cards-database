import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Numel",
		fr: "Chamallot",
		de: "Camaub"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		322,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
				de: "Walzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Kindle",
				fr: "Enflammer",
				de: "Anzünden"
			},
			effect: {
				en: "Discard a Fire Energy card attached to Numel and then discard an Energy card attached to the Defending Pokémon.",
				fr: "Défaussez une carte Énergie  attachée à Chamallot puis une carte Énergie attachée au Pokémon Défenseur.",
				de: "Lege 1 -Energiekarte von Camaub auf deinen Ablagestapel und lege danach eine Energiekarte vom Verteidigenden Pokémon auf den Ablagestapel deines Gegners."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 2,

	thirdParty: {
		tcgplayer: 87807,
		cardmarket: 275946
	}
}

export default card
