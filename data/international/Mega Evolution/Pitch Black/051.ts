import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Inkay",
		'fr-fr': "Sepiatop",
		'es-es': "Inkay",
		'es-mx': "Inkay",
		'de-de': "Iscalar",
		'it-it': "Inkay",
		'pt-br': "Inkay"
	},

	illustrator: "Yuriko Akase",
	rarity: "Common",
	category: "Pokemon",
	dexId: [686],
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Procurement",
			'fr-fr': "Acquisition",
			'es-es': "Adquisición",
			'es-mx': "Adquisición",
			'de-de': "Besorgung",
			'it-it': "Rifornimento",
			'pt-br': "Suprimentos"
		},

		cost: ["Darkness"],

		effect: {
			'en-us': "Search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Objet, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 carta de Objeto, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo 1 carta de Objeto, muéstrala y ponla en tu mano. Después, baraja tu mazo.",
			'de-de': "Durchsuche dein Deck nach 1 Itemkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo una carta Strumento, mostrala e aggiungila alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			'pt-br': "Procure por uma carta de Item no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}, {
		name: {
			'en-us': "Spinning Attack",
			'fr-fr': "Attaque Tournante",
			'es-es': "Ataque Giratorio",
			'es-mx': "Ataque Giratorio",
			'de-de': "Rundumangriff",
			'it-it': "Attacco Rotante",
			'pt-br': "Ataque Giratório"
		},

		cost: ["Darkness", "Darkness"],

		damage: 30
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895836,
				tcgplayer: 704808
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895836,
				tcgplayer: 704808
			}
		},
	],
}

export default card
