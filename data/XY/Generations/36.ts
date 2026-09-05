import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Jynx",
		fr: "Lippoutou",
		de: "Rossana"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		124,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Victory Kiss",
				fr: "Baiser de la Victoire",
				de: "Siegerkuss"
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may heal 10 damage from your Active Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez soigner 10 dégâts à votre Pokémon Actif.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn sich dieses Pokémon auf deiner Bank befindet, 10 Schadenspunkte bei deinem Aktiven Pokémon heilen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hug",
				fr: "Câlin",
				de: "Hug"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It wiggles its hips as it walks. It can cause people to dance in unison with it.",
		de: "Der beschwingte Gang dieses Pokémon bezaubert Zuschauer und lässt sie im Takt dazu tanzen."
	},

	thirdParty: {
		cardmarket: 288474,
		tcgplayer: 113694
	}
}

export default card
