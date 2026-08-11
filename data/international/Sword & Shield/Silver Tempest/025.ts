import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [653],
	set: Set,

	name: {
		'en-us': "Fennekin",
		'fr-fr': "Feunnec",
		'es-es': "Fennekin",
		'it-it': "Fennekin",
		'pt-br': "Fennekin",
		'de-de': "Fynx"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Lead",
			'fr-fr': "Mentor",
			'es-es': "Liderazgo",
			'it-it': "Guidare",
			'pt-br': "Liderar",
			'de-de': "Führen"
		},

		effect: {
			'en-us': "Search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Supporter, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 carta de Partidario, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta Aiuto, mostrala e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por 1 carta de Apoiador no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Unterstützerkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Fire"],

		name: {
			'en-us': "Live Coal",
			'fr-fr': "Charbon Mutant",
			'es-es': "Carbón Activado",
			'it-it': "Carboni Ardenti",
			'pt-br': "Carvão Vivo",
			'de-de': "Glühende Kohlen"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "As it walks, it munches on a twig in place of a snack. It intimidates opponents by puffing hot air out of its ears.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682066,
				tcgplayer: 451656
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682066,
				tcgplayer: 451656
			}
		},
	],
}

export default card
