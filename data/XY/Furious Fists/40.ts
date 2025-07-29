import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Gothorita",
		fr: "Mesmérella",
		es: "Gothorita",
		it: "Gothorita",
		pt: "Gothorita",
		de: "Hypnomorba"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		575,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Gothita",
		fr: "Scrutella",
		es: "Gothita",
		it: "Gothita",
		pt: "Gothita",
		de: "Mollimorba"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fortunate Eye",
				fr: "Regard Chanceux",
				es: "Ojo Fortuito",
				it: "Fortunocchio",
				pt: "Olho da Sorte",
				de: "Flüchtiger Glücksblick"
			},
			effect: {
				en: "Look at the top 5 cards of your opponent's deck and put them back on top of his or her deck in any order.",
				fr: "Regardez les 5 cartes du dessus du deck de votre adversaire et replacez-les sur le dessus de son deck dans l'ordre de votre choix.",
				es: "Mira las 5 primeras cartas de la baraja de tu rival y vuelve a ponerlas en la parte superior de su baraja en el orden que quieras.",
				it: "Guarda le prime cinque carte del mazzo del tuo avversario e rimettile in cima al suo mazzo nell'ordine che preferisci.",
				pt: "Olhe os 5 cards de cima do baralho do seu oponente e coloque-os de volta em cima do baralho do seu oponente em qualquer ordem.",
				de: "Schau dir die obersten 5 Karten des Decks deines Gegners an und lege sie in beliebiger Reihenfolge zurück auf sein Deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Smack",
				fr: "Claque",
				es: "Palmetazo",
				it: "Schiaffo",
				pt: "Estalo",
				de: "Klatscher"
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

	thirdParty: {
		cardmarket: 281704
	}
}

export default card
