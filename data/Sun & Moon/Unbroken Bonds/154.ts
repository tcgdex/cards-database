import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Porygon",
		fr: "Porygon",
		es: "Porygon",
		it: "Porygon",
		pt: "Porygon",
		de: "Porygon"
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
				en: "Digicharge",
				fr: "Charge Numérique",
				es: "Carga Digital",
				it: "Carica Digitale",
				pt: "Carga Digital",
				de: "Digi-Ladung"
			},
			effect: {
				en: "Flip 3 coins. For each heads, search your deck for an Energy card, reveal it, and put it into your hand. Then, shuffle your deck.",
				fr: "Lancez 3 pièces. Pour chaque côté face, cherchez une carte Énergie dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				es: "Lanza 3 monedas. Por cada cara, busca en tu baraja 1 carta de Energía, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Lancia tre volte una moneta. Ogni volta che esce testa, cerca nel tuo mazzo una carta Energia, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Jogue 3 moedas. Para cada cara, procure por 1 carta de Energia no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Wirf 3 Münzen. Durchsuche pro Kopf dein Deck nach 1 Energiekarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sharp Point",
				fr: "Point-Pointu",
				es: "Punta Afilada",
				it: "Punta Acuminata",
				pt: "Ponta Afiada",
				de: "Scharfe Spitze"
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



}

export default card
