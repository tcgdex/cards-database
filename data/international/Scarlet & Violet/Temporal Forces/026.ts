import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [77],
	set: Set,

	name: {
		'en-us': "Ponyta",
		'fr-fr': "Ponyta",
		'es-es': "Ponyta",
		'it-it': "Ponyta",
		'pt-br': "Ponyta",
		'de-de': "Ponita"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Charge Energy",
			'fr-fr': "Recharge Énergétique",
			'es-es': "Cargar Energía",
			'it-it': "Caricaenergia",
			'pt-br': "Carga de Energia",
			'de-de': "Energielader"
		},

		effect: {
			'en-us': "Search your deck for a Basic Energy card, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Énergie de base, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 carta de Energía Básica, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta Energia base, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por uma carta de Energia Básica no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Basis-Energiekarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Flame Tail",
			'fr-fr': "Queue de Flammes",
			'es-es': "Cola de Fuego",
			'it-it': "Codafiamma",
			'pt-br': "Cauda de Chamas",
			'de-de': "Flammenschweif"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "It can't run properly when it's newly born. As it races around with others of its kind, its legs grow stronger.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760656,
				tcgplayer: 542770
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760656,
				tcgplayer: 542770
			}
		},
	],

	illustrator: "takashi shiraishi",

}

export default card