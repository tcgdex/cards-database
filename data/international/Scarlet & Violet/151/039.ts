import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [39],
	set: Set,

	name: {
		'fr-fr': "Rondoudou",
		'en-us': "Jigglypuff",
		'es-es': "Jigglypuff",
		'it-it': "Jigglypuff",
		'pt-br': "Jigglypuff",
		'de-de': "Pummeluff"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Mentor",
			'en-us': "Lead",
			'es-es': "Liderazgo",
			'it-it': "Guidare",
			'pt-br': "Liderar",
			'de-de': "Führen"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck une carte Supporter, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			'en-us': "Search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck.",
			'es-es': "Busca en tu baraja 1 carta de Partidario, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta Aiuto, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por uma carta de Apoiador no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Unterstützerkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Pied-Piétine",
			'en-us': "Stompy Stomp",
			'es-es': "Pisotonazo",
			'it-it': "Pesto Ripesto",
			'pt-br': "Pisada",
			'de-de': "Hopphopphurra"
		},

		effect: {
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
			'en-us': "Flip 2 coins. This attack does 20 damage for each heads.",
			'es-es': "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 20 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu."
		},

		damage: "20×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "When its huge eyes waver, it sings a mysteriously soothing melody that lulls its enemies to sleep.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733634,
				tcgplayer: 516108,
				cardtrader: 261124
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733634,
				tcgplayer: 516108,
				cardtrader: 261124
			}
		},
	],

	illustrator: "saino misaki",

	
}

export default card
