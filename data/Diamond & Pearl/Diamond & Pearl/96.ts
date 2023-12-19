import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Roselia",
		fr: "Roselia",
		de: "Roselia"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		315,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Toxic Spikes",
				fr: "Pics Toxik",
				de: "Giftspitzen"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. If Roselia is evolved from Budew, this attack does 10 damage to the Defending Pokémon.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Si Roselia évolue de Rozbouton, cette attaque inflige 10 dégâts au Pokémon Défenseur.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet. Wenn Roselia sich aus Knospi entwickelt hat, fügt dieser Angriff dem Verteidigenden Pokémon 10 Schadenspunkte zu."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Sweet Spike",
				fr: "Douce pointe",
				de: "Süßer Stachel"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep. Remove 2 damage counters from 1 of your Pokémon.",
				fr: "Le Pokémon Défenseur est maintenant Endormi. Retirez à 1 de vos Pokémon 2 marqueurs de dégât.",
				de: "Das Verteidigende Pokémon schläft jetzt. Entferne 2 Schadensmarken von 1 deiner Pokémon."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		fr: "Les Roselia élevés avec une eau claire et potable font de ravissantes fleurs bariolées."
	}
}

export default card
