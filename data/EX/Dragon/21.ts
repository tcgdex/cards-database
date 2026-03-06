import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Skarmory",
		fr: "Airmure",
		de: "Panzaeron"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		227,
	],

	hp: 70,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Pick On",
				fr: "Choix",
				de: "Tyrannisieren"
			},
			effect: {
				en: "If the number of cards in your opponent's hand is at least 6, look at his or her hand. Choose a number of cards there until your opponent has 5 cards left in his or her hand and have your opponent shuffle the cards you chose into his or her deck.",
				fr: "Si votre adversaire a au moins six cartes en main, regardez sa main. Choisissez suffisamment de cartes pour qu'il ne lui reste plus que cinq cartes. Votre adversaire défausse les cartes que vous avez choisi et les mélange avec son deck.",
				de: "Falls dein Gegner mindestens 6 Karten auf der Hand hat, wähle (ohne sie vorher anzusehen) so viele seiner Handkarten, dass dein Gegner nur noch 5 Karten auf der Hand hat. Dein Gegner mischt die gewählten Karten in sein Deck."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Power Count",
				fr: "Compteur de puissance",
				de: "Kraftzähler"
			},
			effect: {
				en: "Count the amount of Energy attached to all of your Pokémon and all of your opponent's Pokémon. If your Pokémon have less Energy than your opponent's, this attack does 20 damage plus 30 more damage.",
				fr: "Comptabilisez le nombre d'Énergies attachées à tous vos Pokémon ainsi qu'à tous les Pokémon de votre adversaire. Si vos Pokémon possèdent moins d'Énergies que ceux de votre adversaire, cette attaque inflige 50 dégâts.",
				de: "Vergleiche wieviel Energie an allen deinen Pokémon und allen gegnerischen Pokémon angelegt ist. Wenn an deinen Pokémon weniger Energie angelegt ist als an den gegnerischen Pokémon, fügt dieser Angriff 20 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "20+",

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
			type: "Grass",
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		tcgplayer: 89237,
		cardmarket: 275898
	}
}

export default card
