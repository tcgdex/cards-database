import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Mismagius",
		'fr-fr': "Magirêve",
		'de-de': "Traunmagil"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [429],

	hp: 80,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Misdreavus",
		'fr-fr': "Feuforêve"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Sleeping Spell",
				'fr-fr': "Endormissement",
				'de-de': "Schlafzauber"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" schläft das Verteidigende Pokémon jetzt."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Poltergeist",
				'fr-fr': "Poltergeist",
				'de-de': "Poltergeist"
			},
			effect: {
				'en-us': "Look at your opponent's hand. This attack does 30 damage times the number of Trainer, Supporter, and Stadium cards in your opponent's hand.",
				'fr-fr': "Regardez la main de votre adversaire. Cette attaque infligé 30 dégâts multipliés par le nombre de cartes Dresseur, Supporter et Stade qui se trouvent dans la main de votre adversaire.",
				'de-de': "Schau dir die Handkarten deines Gegners an. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl der Trainer-, Unterstützer- und Stadion-Karten, die du dort gefunden hast, zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Its cries sound like incantations to torment the foe. It appears where you least expect it.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87519,
				cardmarket: 279671
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87519,
				cardmarket: 279671
			},
		},
	],

}

export default card
