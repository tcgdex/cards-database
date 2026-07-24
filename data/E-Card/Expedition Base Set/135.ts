import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Time Shard",
		fr: "Kaiminus",
		de: "Karnimani"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Tool",
	set: Set,

	dexId: [
		158,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Paralyzing Gaze",
				fr: "Regard paralysant",
				de: "Lähmender Blick"
			},
			effect: {
				en: "Attach Time Shard to 1 of your Pokémon that doesn't already have a Pokémon Tool card attached to it. If that Pokémon is Knocked Out, discard this card. If the Pokémon this card is attached to is Knocked Out by damage from the Defending Pokémon's attack during your opponent's turn, you may return up to 2 basic Energy cards attached to that Pokémon to your hand.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				de: "Biss"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89995,
				cardmarket: 275009
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
