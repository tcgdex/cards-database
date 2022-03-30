import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Skiddo",
		fr: "Cabriolaine",
		es: "Skiddo",
		it: "Skiddo",
		pt: "Skiddo",
		de: "Mähikel"
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
				en: "Lead",
				fr: "Mentor",
				es: "Liderazgo",
				it: "Guidare",
				pt: "Liderar",
				de: "Führen"
			},
			effect: {
				en: "Flip a coin. If heads, search your deck for a Supporter card, reveal it, and put it into your hand. Shuffle your deck afterward.",
				fr: "Lancez une pièce. Si c'est face, cherchez une carte Supporter dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				es: "Lanza 1 moneda. Si sale cara, busca en tu baraja 1 carta de Partidario, enséñala y ponla en tu mano. Baraja las cartas de tu baraja después.",
				it: "Lancia una moneta. Se esce testa, cerca nel tuo mazzo una carta Aiuto, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Jogue uma moeda. Se sair cara, procure em seu baralho um card de Apoiador, revele-o e coloque em sua mão. Em seguida, embaralhe seus cards.",
				de: "Wirf 1 Münze. Durchsuche bei \"Kopf\" dein Deck nach 1 Unterstützerkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				es: "Placaje",
				it: "Azione",
				pt: "Investida",
				de: "Tackle"
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



}

export default card
