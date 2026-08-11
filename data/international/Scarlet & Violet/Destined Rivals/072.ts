import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [179],
	set: Set,

	name: {
		'en-us': "Team Rocket's Mareep",
		'fr-fr': "Wattouat de la Team Rocket",
		'de-de': "Team Rockets Voltilamm",
		'it-it': "Mareep del Team Rocket",
		'es-es': "Mareep del Team Rocket",
		'pt-br': "Mareep da Equipe Rocket",
		'es-mx': "Mareep del Equipo Rocket"
	},


	illustrator: "Teeziro",

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Procurement",
			'fr-fr': "Acquisition",
			'de-de': "Besorgung",
			'it-it': "Rifornimento",
			'es-es': "Adquisición",
			'pt-br': "Suprimentos",
			'es-mx': "Adquisición"
		},

		effect: {
			'en-us': "Search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Objet, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach 1 Itemkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo una carta Strumento, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'es-es': "Busca en tu baraja 1 carta de Objeto, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por uma carta de Item no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo 1 carta de Objeto, muéstrala y ponla en tu mano. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Lightning"],

		name: {
			'en-us': "Tiny Bolt",
			'fr-fr': "Foudre Minuscule",
			'de-de': "Mini-Blitz",
			'it-it': "Minifulmine",
			'es-es': "Relampaguito",
			'pt-br': "Corisquinho",
			'es-mx': "Minirrayo"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825946,
				tcgplayer: 630820
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825946,
				tcgplayer: 630820
			}
		},
	],
}

export default card
