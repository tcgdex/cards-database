import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Sneasel",
		fr: "Farfuret",
		de: "Sniebel"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		215,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Rob",
				fr: "Dérober",
				de: "Räuber"
			},
			effect: {
				en: "Look at your opponent's hand. Choose all Technical Machine and Pokémon Tool cards there and put them into his or her deck. Your opponent shuffles the deck afterward.",
				fr: "Regardez la main de votre adversaire. Choisissez-y toutes les cartes Outil Pokémon et Machine technique et placez-les dans son deck. Votre adversaire mélange ensuite son deck.",
				de: "Schau dir die Karten auf der Hand deines Gegners an. Wähle alle Technischen Maschinen und Pokémon-Ausrüstungskarten darunter und lege sie in das Deck deines Gegners. Dein Gegner mischt danach sein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Claw",
				fr: "Mâchoire",
				de: "Klaue"
			},

			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				de: "Wirf eine Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},

			damage: 30
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
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 275186
	}
}

export default card
