import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Liepard",
		fr: "Léopardus",
		es: "Liepard",
		it: "Liepard",
		pt: "Liepard",
		de: "Kleoparda"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		510,
	],

	hp: 80,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Purrloin",
		fr: "Chacripan",
		de: "Felilou"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Tail Trickery",
				fr: "Queue Étourdissante",
				de: "Schweiftrick"
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
				de: "Das Verteidigende Pokémon ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Assist",
				fr: "Assistance",
				de: "Zuschuss"
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 of your Benched Pokémon's attacks and use it as this attack.",
				fr: "Lancez une pièce. Si c'est face, choisissez une attaque de l'un de vos Pokémon de Banc et utilisez-la en tant que cette attaque.",
				de: "Wirf 1 Münze. Wähle bei „Kopf“ 1 Angriff eines Pokémon auf deiner Bank und verwende ihn als diesen Angriff."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Their beautiful form comes from the muscles they have developed. They run silently in the night.",
		de: "Sein anmutiges Auftreten verdankt es den Muskeln, die es entwickelt hat. Es prescht lautlos durch die Nacht."
	},

	thirdParty: {
		cardmarket: 280678,
		tcgplayer: 86727
	}
}

export default card
