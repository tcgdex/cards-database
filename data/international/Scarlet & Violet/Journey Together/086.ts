import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [843],
	set: Set,

	name: {
		'en-us': "Hop's Silicobra",
		'fr-fr': "Dunaja de Nabil",
		'es-es': "Silicobra de Paul",
		'de-de': "Hops Salanga",
		'it-it': "Silicobra di Hop",
		'pt-br': "Silicobra do Lupo",
		'es-mx': "Silicobra de Paul"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Turf Maker",
			'fr-fr': "Faiseur de Terrains",
			'es-es': "Espíritu Territorial",
			'de-de': "Reviermacher",
			'it-it': "Terrenoformazione",
			'pt-br': "Demarcar Território",
			'es-mx': "Demarcador Territorial"
		},

		effect: {
			'en-us': "Search your deck for a Stadium card, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Stade, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 carta de Estadio, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			'de-de': "Durchsuche dein Deck nach 1 Stadionkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo una carta Stadio, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por uma carta de Estádio no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo 1 carta de Estadio, muéstrala y ponla en tu mano. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'es-es': "Roer",
			'de-de': "Nagen",
			'it-it': "Rosicchiamento",
			'pt-br': "Roída",
			'es-mx': "Mordisquear"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",
	illustrator: "aspara",


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817238,
				tcgplayer: 623513
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817238,
				tcgplayer: 623513
			}
		},
	],
}

export default card
