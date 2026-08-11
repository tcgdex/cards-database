import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Porygon",
		'fr-fr': "Porygon",
		'es-es': "Porygon",
		'it-it': "Porygon",
		'pt-br': "Porygon",
		'de-de': "Porygon"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		137,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Digicharge",
				'fr-fr': "Charge Numérique",
				'es-es': "Carga Digital",
				'it-it': "Carica Digitale",
				'pt-br': "Carga Digital",
				'de-de': "Digi-Ladung"
			},
			effect: {
				'en-us': "Flip 3 coins. For each heads, search your deck for an Energy card, reveal it, and put it into your hand. Then, shuffle your deck.",
				'fr-fr': "Lancez 3 pièces. Pour chaque côté face, cherchez une carte Énergie dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				'es-es': "Lanza 3 monedas. Por cada cara, busca en tu baraja 1 carta de Energía, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Lancia tre volte una moneta. Ogni volta che esce testa, cerca nel tuo mazzo una carta Energia, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Jogue 3 moedas. Para cada cara, procure por 1 carta de Energia no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Wirf 3 Münzen. Durchsuche pro Kopf dein Deck nach 1 Energiekarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sharp Point",
				'fr-fr': "Point-Pointu",
				'es-es': "Punta Afilada",
				'it-it': "Punta Acuminata",
				'pt-br': "Ponta Afiada",
				'de-de': "Scharfe Spitze"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This Pokémon was created using the cutting-edge science of 20 years ago, so many parts of it have since become obsolete.",
	},

	thirdParty: {
		cardmarket: 372442,
		tcgplayer: 189256
	}
}

export default card
