import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Arven",
		'fr-fr': "Pepper",
		'es-es': "Damián",
		'it-it': "Pepe",
		'de-de': "Pepper",
		'pt-br': "Arven"
	},

	rarity: "Special illustration rare",
	category: "Trainer",

	effect: {
		'en-us': "Search your deck for an Item card and a Pokémon Tool card, reveal them, and put them into your hand. Then, shuffle your deck.",
		'fr-fr': "Cherchez dans votre deck une carte Objet et une carte Outil Pokémon, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		'es-es': "Busca en tu baraja 1 carta de Objeto y 1 carta de Herramienta Pokémon, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
		'it-it': "Cerca nel tuo mazzo una carta Strumento e una carta Oggetto Pokémon, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'de-de': "Durchsuche dein Deck nach 1 Itemkarte und 1 Pokémon-Ausrüstung, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
		'pt-br': "Procure por uma carta de Item e uma carta de Ferramenta Pokémon no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751782,
				tcgplayer: 535095,
				cardtrader: 274419
			}
		},
	],

	illustrator: "aspara",

	
}

export default card
