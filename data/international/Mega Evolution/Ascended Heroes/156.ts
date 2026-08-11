import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Noibat",
		'fr-fr': "Sonistrelle",
		'es-es': "Noibat",
		'es-mx': "Noibat",
		'de-de': "eF-eM",
		'it-it': "Noibat",
		'pt-br': "Noibat"
	},

	illustrator: "Eri Kamei",
	rarity: "Common",
	category: "Pokemon",
	dexId: [714],
	hp: 70,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Knickknack Carrying",
			'fr-fr': "Trimballe Bricoles",
			'es-es': "Transporte de Chatarra",
			'es-mx': "Transporte de Chatarra",
			'de-de': "Klimbimtransport",
			'it-it': "Trasporto di Cianfrusaglie",
			'pt-br': "Carregando Tranqueira"
		},

		effect: {
			'en-us': "Search your deck for a Pokémon Tool card, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Outil Pokémon, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 carta de Herramienta Pokémon, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo 1 carta de Herramienta Pokémon, muéstrala y ponla en tu mano. Después, baraja tu mazo.",
			'de-de': "Durchsuche dein Deck nach 1 Pokémon-Ausrüstung, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo una carta Oggetto Pokémon, mostrala e aggiungila alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			'pt-br': "Procure por uma carta de Ferramenta Pokémon no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Psychic", "Darkness"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'es-mx': "Mordida",
			'de-de': "Biss",
			'it-it': "Morso",
			'pt-br': "Mordida"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "Even a robust wrestler will become dizzy and unable to stand when exposed to its 200,000-hertz ultrasonic waves.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869767,
			tcgplayer: 675968
		}
	},
	{
		type: "reverse",
		foil: "friendball",
		thirdParty: {
			cardmarket: 870380,
			tcgplayer: 676974
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870379,
			tcgplayer: 677114
		}
	},
],
}

export default card
