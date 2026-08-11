import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [354],
	set: Set,

	name: {
		'en-us': "Banette",
		'fr-fr': "Branette",
		'es-es': "Banette",
		'de-de': "Banette",
		'it-it': "Banette",
		'pt-br': "Banette",
		'es-mx': "Banette"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Shuppet",
		'fr-fr': "Polichombr",
		'es-es': "Shuppet",
		'de-de': "Shuppet",
		'it-it': "Shuppet",
		'pt-br': "Shuppet",
		'es-mx': "Shuppet"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Cursed Words",
			'fr-fr': "Paroles Maudites",
			'es-es': "Palabras Malditas",
			'de-de': "Verfluchte Worte",
			'it-it': "Parole Maledette",
			'pt-br': "Rogar Praga",
			'es-mx': "Palabras Malditas"
		},

		effect: {
			'en-us': "Your opponent chooses 3 cards from their hand and shuffles those cards into their deck.",
			'fr-fr': "Votre adversaire choisit 3 cartes de sa main et les mélange avec son deck.",
			'es-es': "Tu rival elige 3 cartas de su mano, las pone en su baraja y las baraja todas.",
			'de-de': "Dein Gegner wählt 3 Karten aus seiner Hand und mischt jene Karten in sein Deck.",
			'it-it': "Il tuo avversario sceglie tre carte che ha in mano e le rimischia nel suo mazzo.",
			'pt-br': "Seu oponente escolhe 3 cartas da mão dele e embaralha aquelas cartas no baralho dele.",
			'es-mx': "Tu rival elige 3 cartas de su mano, las pone en su mazo y las baraja todas."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Spooky Shot",
			'fr-fr': "Tir Effrayant",
			'es-es': "Disparo Embrujado",
			'de-de': "Spukschuss",
			'it-it': "Colpomistero",
			'pt-br': "Tiro Assustador",
			'es-mx': "Disparo Espeluznante"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "I",
	illustrator: "Anesaki Dynamic",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817212,
				tcgplayer: 623487
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817212,
				tcgplayer: 623487
			}
		},
	],
}

export default card
