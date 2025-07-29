import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Palkia",
		fr: "Palkia",
		de: "Palkia"
	},

	illustrator: "Daisuke Iwamoto",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		484,
	],

	hp: 100,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Wormhole",
				fr: "Trou de ver",
				de: "Wurmloch"
			},
			effect: {
				en: "Switch Palkia with 1 of your Benched Pokémon. Then, your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Échangez Palkia avec l’un des Pokémon de votre Banc. Ensuite, votre adversaire échange le Pokémon Défenseur avec l’un de ses Pokémon de Banc.",
				de: "Tausche Palkia gegen 1 Pokémon auf deiner Bank aus. Danach tauscht dein Gegner das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 279633
	}
}

export default card
