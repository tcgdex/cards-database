import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Earthen Vessel",
		'fr-fr': "Urne Terrestre",
		'es-es': "Vasija Terrestre",
		'it-it': "Anfora Terrestre",
		'pt-br': "Recipiente Terrestre",
		'de-de': "Irdengefäß"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "You can use this card only if you discard another card from your hand.\n\nSearch your deck for up to 2 Basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
		'fr-fr': "Vous ne pouvez utiliser cette carte que si vous défaussez une autre carte de votre main.\nCherchez dans votre deck jusqu'à 2 cartes Énergie de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		'es-es': "Puedes usar esta carta solo si descartas otra carta de tu mano.\nBusca en tu baraja hasta 2 cartas de Energía Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
		'it-it': "Puoi usare questa carta solo se scarti un'altra carta che hai in mano.\n\nCerca nel tuo mazzo fino a due carte Energia base, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Você só pode usar esta carta se descartar outra carta da sua mão.\nProcure por até 2 cartas de Energia Básica no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
		'de-de': "Du kannst diese Karte nur einsetzen, wenn du noch 1 andere Karte aus deiner Hand auf deinen Ablagestapel legst.\n\nDurchsuche dein Deck nach bis zu 2 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740704,
				tcgplayer: 523844,
				cardtrader: 265380
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740704,
				tcgplayer: 523844,
				cardtrader: 265380
			}
		},
	],

	illustrator: "AYUMI ODASHIMA",

	
}

export default card
