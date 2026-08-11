import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Banette",
		'fr-fr': "Branette",
		'es-es': "Banette",
		'es-mx': "Banette",
		'de-de': "Banette",
		'it-it': "Banette",
		'pt-br': "Banette"
	},

	evolveFrom: {
		'en-us': "Shuppet",
		'fr-fr': "Polichombr",
		'es-es': "Shuppet",
		'es-mx': "Shuppet",
		'de-de': "Shuppet",
		'it-it': "Shuppet",
		'pt-br': "Shuppet",
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [354],
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Cursed Words",
			'fr-fr': "Paroles Maudites",
			'es-es': "Palabras Malditas",
			'es-mx': "Palabras Malditas",
			'de-de': "Verfluchte Worte",
			'it-it': "Parole Maledette",
			'pt-br': "Rogar Praga"
		},

		effect: {
			'en-us': "Your opponent chooses 3 cards from their hand and shuffles those cards into their deck.",
			'fr-fr': "Votre adversaire choisit 3 cartes de sa main et les mélange avec son deck.",
			'es-es': "Tu rival elige 3 cartas de su mano, las pone en su baraja y las baraja todas.",
			'es-mx': "Tu rival elige 3 cartas de su mano, las pone en su mazo y las baraja todas.",
			'de-de': "Dein Gegner wählt 3 Karten aus seiner Hand und mischt jene Karten in sein Deck.",
			'it-it': "Il tuo avversario sceglie tre carte che ha in mano e le rimischia nel suo mazzo.",
			'pt-br': "Seu oponente escolhe 3 cartas da mão dele e embaralha aquelas cartas no baralho dele."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Spooky Shot",
			'fr-fr': "Tir Effrayant",
			'es-es': "Disparo Embrujado",
			'es-mx': "Disparo Espeluznante",
			'de-de': "Spukschuss",
			'it-it': "Colpomistero",
			'pt-br': "Tiro Assustador"
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

	description: {
		'en-us': "This Pokémon developed from an abandoned doll that amassed a grudge. It is seen in dark alleys.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869702,
			tcgplayer: 675903
		}
	},
	{
		type: "reverse",
		foil: "duskball",
		thirdParty: {
			cardmarket: 870278,
			tcgplayer: 676923
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870277,
			tcgplayer: 677063
		}
	},
],
}

export default card
