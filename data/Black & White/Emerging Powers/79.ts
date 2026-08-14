import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Watchog",
		fr: "Miradar",
		es: "Watchog",
		it: "Watchog",
		pt: "Watchog",
		de: "Kukmarda"
	},

	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		505,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Patrat",
		fr: "Ratentif",
		de: "Nagelotz"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Watcheck",
				fr: "Contrôle Radar",
				de: "Kukmardeck"
			},
			effect: {
				en: "Look at the top 5 cards of your opponent's deck and put them back on top of his or her deck in any order.",
				fr: "Regardez les 5 cartes du dessus du deck de votre adversaire et replacez-les sur le dessus de son deck dans l'ordre de votre choix.",
				de: "Schau dir die obersten 5 Karten des Decks deines Gegners an und lege sie in beliebiger Reihenfolge zurück auf sein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Tail Smash",
				fr: "Rapid'Claqueue",
				de: "Schneller Schmetterschweif"
			},
			effect: {
				en: "Before doing damage, you may flip a coin. If heads, this attack does 60 more damage. If tails, this attack does nothing.",
				fr: "Avant d'infliger des dégâts, vous pouvez lancer une pièce. Si c'est face, cette attaque inflige 60 dégâts supplémentaires. Si c'est pile, cette attaque ne fait rien.",
				de: "Bevor du Schaden zufügst, kannst du 1 Münze werfen. Bei „Kopf“ fügt dieser Angriff 60 weitere Schadenspunkte zu. Bei „Zahl“ hat dieser Angriff keine Auswirkungen."
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
		en: "When they see an enemy, their tails stand high, and they spit the seeds of berries stored in their cheek pouches.",
		de: "Bespuckt Gegner mit Kernen von Beeren aus seinen Backentaschen. Erspäht es einen Feind, richtet es den Schweif auf."
	},

	thirdParty: {
		cardmarket: 280044,
		tcgplayer: 90496
	}
}

export default card
