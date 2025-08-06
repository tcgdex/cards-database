import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "M Charizard EX",
		fr: "M-Dracaufeu EX",
		es: "M-Charizard EX",
		it: "M Charizard EX",
		pt: "M-Charizard EX",
		de: "M-Glurak EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 230,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Charizard-EX",
		fr: "Dracaufeu-EX",
		es: "Charizard-EX",
		it: "Charizard-EX",
		pt: "Charizard-EX",
		de: "Glurak-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wild Blaze",
				fr: "Feu Furieux",
				es: "Fuego Salvaje",
				it: "Fiamma Selvaggia",
				pt: "Chama Selvagem",
				de: "Wilder Flächenbrand"
			},
			effect: {
				en: "Discard the top 5 cards of your deck.",
				fr: "Défaussez les 5 cartes du dessus de votre deck.",
				es: "Descarta las 5 primeras cartas de tu baraja.",
				it: "Scarta le prime cinque carte del tuo mazzo.",
				pt: "Descarte os 5 cards de cima do seu baralho.",
				de: "Lege die obersten 5 Karten deines Decks auf deinen Ablagestapel."
			},
			damage: 300,

		}
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,
	suffix: "EX",

	thirdParty: {
		tcgplayer: 91206
	}
}

export default card
