import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Giratina",
		fr: "Giratina",
		es: "Giratina",
		it: "Giratina",
		pt: "Giratina",
		de: "Giratina"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		487,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hex",
				fr: "Châtiment",
				de: "Bürde"
			},
			effect: {
				en: "If the Defending Pokémon is affected by a Special Condition, this attack does 50 more damage.",
				fr: "Si le Pokémon Défenseur est affecté par un État Spécial, cette attaque inflige 50 dégâts supplémentaires.",
				de: "Wenn das Verteidigende Pokémon von einem Speziellen Zustand betroffen ist, fügt dieser Angriff 50 weitere Schadenspunkte zu."
			},
			damage: 50,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shadow Claw",
				fr: "Griffe Ombre",
				de: "Dunkelklaue"
			},
			effect: {
				en: "Discard a random card from your opponent's hand.",
				fr: "Défaussez au hasard une carte de la main de votre adversaire.",
				de: "Nimm 1 zufällige Karte aus der verdeckten Hand deines Gegners und lege sie auf dessen Ablagestapel."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "It was banished for its violence. It silently gazed upon the old world from the Distortion World.",
		de: "Es wurde aufgrund seines Verhaltens verbannt. Aus der Zerrwelt schaut es auf die alte Welt."
	},

	thirdParty: {
		cardmarket: 280802,
		tcgplayer: 85738
	}
}

export default card
