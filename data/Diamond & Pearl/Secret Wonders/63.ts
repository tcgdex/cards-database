import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Sableye",
		fr: "Ténéfix",
		de: "Zobiris"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		302,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rummage",
				fr: "Farfouiller",
				de: "Durchstöbern"
			},
			effect: {
				en: "Look at the top 5 cards of your deck. Choose as many Trainer cards as you like, show them to your opponent, and put them into your hand. Put the other cards back on top of your deck. Shuffle your deck afterward.",
				fr: "Regardez les 5 cartes du dessus de votre deck. Choisissez autant de cartes Dresseur que vous voulez, montrez-les à votre adversaire et placez-les dans votre main. Replacez les autres cartes au dessus de votre deck. Ensuite, mélangez votre deck.",
				de: "Schau dir die obersten 5 Karten deines Decks an. Wähle beliebig viele Trainerkarten, die du dort gefunden hast, zeige sie deinem Gegner und nimm sie auf die Hand. Lege die anderen Karten auf dein Deck. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Shadow Sneak",
				fr: "Ombre Portée",
				de: "Schattenstoß"
			},
			effect: {
				en: "If you and your opponent have a different number of Prize cards left, this attack does 20 damage plus 20 more damage.",
				fr: "S'il reste à vous et votre adversaire un nombre différent de cartes Récompense, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				de: "Wenn du und dein Gegner eine unterschiedliche Anzahl Preise übrig haben, fügt dieser Angriff 20 Schadenspunkte plus weitere 20 Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277816
	}
}

export default card
