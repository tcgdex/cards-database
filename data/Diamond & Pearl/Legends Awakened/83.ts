import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Beldum",
		fr: "Terhal",
		de: "Tanhel"
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
				en: "Metal Chain",
				fr: "Chaine métallique",
				de: "Metallverbindung"
			},
			effect: {
				en: "Once during your turn (before your attack), when you attach a Metal Energy card from your hand to Beldum (excluding effects of attacks or Poké-Powers), you may search your deck for Beldum and put it onto your Bench. Shuffle your deck afterward. This power can't be used if Beldum is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous attachez une carte Énergie Metal de votre main à Terhal (effets d'attaques ou Poké-Powers exclus), vous pouvez chercher Terhal dans votre deck et le placer sur votre Banc. Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Terhal est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn du 1 -Energiekarte von deiner Hand an Tanhel anlegst (ausgenommen durch Effekte von Angriffen oder Poké-Power), dein Deck nach 1 Tanhel-Karte durchsuchen und auf deine Bank legen. Mische dein Deck danach. Diese Poké-Power kann nicht benutzt werden, wenn Tanhel von einem Speziellen Zustand betroffen ist."
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
				en: "Take Down",
				fr: "Bélier",
				de: "Bodycheck"
			},
			effect: {
				en: "Beldum does 10 damage to itself.",
				fr: "Terhal s'inflige 10 dégâts.",
				de: "Tanhel fügt sich selbst 10 Schadenspunkte zu."
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
		fr: "Il dialogue avec les siens par impulsions magnétiques. En bande, ils se déplacent à l'unisson."
	},

	thirdParty: {
		cardmarket: 278232
	}
}

export default card
