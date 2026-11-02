import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Bouffalant",
		fr: "Frison",
		es: "Bouffalant",
		it: "Bouffalant",
		pt: "Bouffalant",
		de: "Bisofank"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		626,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tool Breaker",
				fr: "Bris’Outil",
				de: "Ausrüstungsbrecher"
			},
			effect: {
				en: "Discard a Pokémon Tool card attached to the Defending Pokémon.",
				fr: "Défaussez une carte Outil Pokémon attachée au Pokémon Défenseur.",
				de: "Lege 1 an das Verteidigende Pokémon angelegte Pokémon-Ausrüstung auf den Ablagestapel deines Gegners."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncer",
				de: "Einhämmern"
			},

			damage: 70,

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
		en: "They are known to charge so wildly that if a train were to enter their territory, they would send it flying.",
		de: "Es rammt Gegner ungebändigt mit dem Kopf und schleudert selbst Züge, die sein Revier durchkreuzen, hinfort."
	},

	thirdParty: {
		cardmarket: 280854,
		tcgplayer: 83946
	}
}

export default card
