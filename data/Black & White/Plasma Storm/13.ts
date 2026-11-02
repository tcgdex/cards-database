import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Amoonguss",
		fr: "Gaulet",
		es: "Amoonguss",
		it: "Amoonguss",
		pt: "Amoonguss",
		de: "Hutsassa"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		591,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Foongus",
		fr: "Trompignon",
		de: "Tarnpignon"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Astonish",
				fr: "Étonnement",
				de: "Erstauner"
			},
			effect: {
				en: "Flip a coin. If heads, choose 3 random cards from your opponent's hand. Your opponent reveals those cards and shuffles them into his or her deck.",
				fr: "Lancez une pièce. Si c'est face, choisissez 3 cartes au hasard de la main de votre adversaire. Votre adversaire montre les cartes choisies et les mélange avec son deck.",
				de: "Wirf 1 Münze. Wähle bei „Kopf“ 3 zufällige Karten aus der verdeckten Hand deines Gegners. Dein Gegner zeigt diese Karten und mischt sie zurück in sein Deck."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Miracle Powder",
				fr: "Poudre Miracle",
				de: "Wunderstaub"
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 Special Condition. The Defending Pokémon is now affected by that Special Condition.",
				fr: "Lancez une pièce. Si c'est face, choisissez 1 État Spécial. Le Pokémon Défenseur est maintenant affecté par l'État Spécial choisi.",
				de: "Wirf 1 Münze. Wähle bei „Kopf“ 1 Speziellen Zustand. Das Verteidigende Pokémon ist jetzt vom diesem Speziellen Zustand betroffen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		en: "It moves the caps on both arms and does a dance to lure prey. It prefers damp places.",
		de: "Es rüttelt die Hüte an seinen Armen und lockt Beute mit einem Tanz an. Es hält sich bevorzugt an feuchten Orten auf."
	},

	thirdParty: {
		cardmarket: 280753,
		tcgplayer: 83533
	}
}

export default card
