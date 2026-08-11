import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Beldum",
		'fr-fr': "Terhal",
		'de-de': "Tanhel"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		374,
	],

	hp: 50,

	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Metal Chain",
				'fr-fr': "Chaine métallique",
				'de-de': "Metallverbindung"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), when you attach a Metal Energy card from your hand to Beldum (excluding effects of attacks or Poké-Powers), you may search your deck for Beldum and put it onto your Bench. Shuffle your deck afterward. This power can't be used if Beldum is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), lorsque vous attachez une carte Énergie Metal de votre main à Terhal (effets d'attaques ou Poké-Powers exclus), vous pouvez chercher Terhal dans votre deck et le placer sur votre Banc. Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Terhal est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn du 1 -Energiekarte von deiner Hand an Tanhel anlegst (ausgenommen durch Effekte von Angriffen oder Poké-Power), dein Deck nach 1 Tanhel-Karte durchsuchen und auf deine Bank legen. Mische dein Deck danach. Diese Poké-Power kann nicht benutzt werden, wenn Tanhel von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Take Down",
				'fr-fr': "Bélier",
				'de-de': "Bodycheck"
			},
			effect: {
				'en-us': "Beldum does 10 damage to itself.",
				'fr-fr': "Terhal s'inflige 10 dégâts.",
				'de-de': "Tanhel fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It converses with others by using magnetic pulses. In a swarm, they move in perfect unison.",
		'fr-fr': "Il dialogue avec les siens par impulsions magnétiques. En bande, ils se déplacent à l'unisson."
	},

	thirdParty: {
		cardmarket: 278232,
		tcgplayer: 83788
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
