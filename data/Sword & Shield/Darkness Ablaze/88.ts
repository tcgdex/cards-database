import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [248],

	name: {
		en: "Tyranitar",
		fr: "Tyranocif",
		es: "Tyranitar",
		it: "Tyranitar",
		pt: "Tyranitar",
		de: "Despotar"
	},

	illustrator: "nagimiso",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 180,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Pupitar",
		fr: "Ymphect",
		es: "Pupitar",
		it: "Pupitar",
		pt: "Pupitar",
		de: "Pupitar"
	},

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bedrock Breaker",
				fr: "Brise Fondation",
				es: "Rompecimientos",
				it: "Infrangiroccia",
				pt: "Quebrador de Alicerce",
				de: "Felsgrundbrecher"
			},
			effect: {
				en: "Discard a Stadium in play.",
				fr: "Défaussez un Stade en jeu.",
				es: "Descarta un Estadio en juego.",
				it: "Scarta una carta Stadio in gioco.",
				pt: "Descarte 1 Estádio em jogo.",
				de: "Lege 1 Stadionkarte im Spiel auf den Ablagestapel."
			},
			damage: 120,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mountain Swing",
				fr: "Frappe Montagneuse",
				es: "Embestida Montaña",
				it: "Oscillamonte",
				pt: "Tacada Montanhosa",
				de: "Bergschwinger"
			},
			effect: {
				en: "Discard the top 5 cards of your deck.",
				fr: "Défaussez les 5 cartes du dessus de votre deck.",
				es: "Descarta las 5 primeras cartas de tu baraja.",
				it: "Scarta le prime cinque carte del tuo mazzo.",
				pt: "Descarte as 5 cartas de cima do seu baralho.",
				de: "Lege die obersten 5 Karten deines Decks auf deinen Ablagestapel."
			},
			damage: 250,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "Its body can't be harmed by any sort of attack, so it is very eager to make challenges against enemies."
	},

	thirdParty: {
		cardmarket: 483319
	}
}

export default card
