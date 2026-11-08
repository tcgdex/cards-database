import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Colress's Tenacity",
		'fr-fr': "Ténacité de Nikolaï",
		'es-es': "Tenacidad de Acromo",
		'it-it': "Perseveranza di Acromio",
		'pt-br': "Tenacidade do Colress",
		'de-de': "Achromas' Beharrlichkeit"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Search your deck for a Stadium card and an Energy card, reveal them, and put them into your hand. Then, shuffle your deck.",
		'fr-fr': "Cherchez dans votre deck une carte Stade et une carte Énergie, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		'es-es': "Busca en tu baraja 1 carta de Estadio y 1 carta de Energía, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
		'it-it': "Cerca nel tuo mazzo una carta Stadio e una carta Energia, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure por uma carta de Estádio e uma carta de Energia no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
		'de-de': "Durchsuche dein Deck nach 1 Stadionkarte und 1 Energiekarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",
	regulationMark: "H",


	illustrator: "hncl",

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 780953,
				tcgplayer: 560368
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780953,
				tcgplayer: 560368
			}
		},
	],
}

export default card
