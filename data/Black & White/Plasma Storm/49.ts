import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Rotom",
		fr: "Motisma",
		es: "Rotom",
		it: "Rotom",
		pt: "Rotom",
		de: "Rotom"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		479,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Electribonus",
				fr: "Électribonus",
				de: "Elektrobonus"
			},
			effect: {
				en: "Discard a Lightning Energy card from your hand. If you do, draw 3 cards.",
				fr: "Défaussez une carte Énergie Lightning de votre main. Dans ce cas, piochez 3 cartes.",
				de: "Lege 1 {L}-Energie aus deiner Hand auf deinen Ablagestapel. Wenn du das machst, ziehe 3 Karten."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Poltergeist",
				fr: "Poltergeist",
				de: "Poltergeist"
			},
			effect: {
				en: "Your opponent reveals his or her hand. This attack does 20 damage times the number of Trainer cards in your opponent's hand.",
				fr: "Votre adversaire montre sa main. Cette attaque inflige 20 dégâts multipliés par le nombre de cartes Dresseur dans la main de votre adversaire.",
				de: "Dein Gegner deckt seine Handkarten auf. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der Trainerkarten auf der Hand deines Gegners zu."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Its electric-like body can enter some kinds of machines and take control in order to make mischief.",
		de: "Es kann mit seinem Körper in elektrische Geräte eindringen und dann für Chaos sorgen."
	},

	thirdParty: {
		cardmarket: 280789,
		tcgplayer: 88840
	}
}

export default card
