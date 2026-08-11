import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Skiddo",
		'fr-fr': "Cabriolaine",
		'es-es': "Skiddo",
		'it-it': "Skiddo",
		'pt-br': "Skiddo",
		'de-de': "Mähikel"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		672,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Lead",
				'fr-fr': "Mentor",
				'es-es': "Liderazgo",
				'it-it': "Guidare",
				'pt-br': "Liderar",
				'de-de': "Führen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, search your deck for a Supporter card, reveal it, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Lancez une pièce. Si c'est face, cherchez une carte Supporter dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				'es-es': "Lanza 1 moneda. Si sale cara, busca en tu baraja 1 carta de Partidario, enséñala y ponla en tu mano. Baraja las cartas de tu baraja después.",
				'it-it': "Lancia una moneta. Se esce testa, cerca nel tuo mazzo una carta Aiuto, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Jogue uma moeda. Se sair cara, procure em seu baralho um card de Apoiador, revele-o e coloque em sua mão. Em seguida, embaralhe seus cards.",
				'de-de': "Wirf 1 Münze. Durchsuche bei \"Kopf\" dein Deck nach 1 Unterstützerkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'es-es': "Placaje",
				'it-it': "Azione",
				'pt-br': "Investida",
				'de-de': "Tackle"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Thought to be one of the first Pokémon to live in harmony with humans, it has a placid disposition.",
	},

	thirdParty: {
		cardmarket: 281355,
		tcgplayer: 89251
	}
}

export default card
