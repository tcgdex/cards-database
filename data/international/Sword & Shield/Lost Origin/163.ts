import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mirage Gate",
		'fr-fr': "Portail Mirage",
		'es-es': "Portal al Espejismo",
		'it-it': "Portalemiraggio",
		'pt-br': "Portão da Miragem",
		'de-de': "Illusionsportal"
	},

	illustrator: "sadaji",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "You can use this card only if you have 7 or more cards in the Lost Zone.\nSearch your deck for up to 2 basic Energy cards of different types and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
		'fr-fr': "Vous ne pouvez utiliser cette carte que si vous avez 7 cartes ou plus dans la Zone Perdue.\nCherchez dans votre deck jusqu'à 2 cartes Énergie de base de types différents, et attachez-les à vos Pokémon comme il vous plaît. Mélangez ensuite votre deck.",
		'es-es': "Puedes usar esta carta solo si tienes 7 cartas o más en la Zona Perdida.\nBusca en tu baraja hasta 2 cartas de Energía Básica de diferentes tipos y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
		'it-it': "Puoi usare questa carta solo se hai sette o più carte nell'area perduta.\nCerca nel tuo mazzo fino a due carte Energia base di tipo diverso e assegnale ai tuoi Pokémon nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Você só pode usar esta carta se tiver 7 ou mais cartas na Zona Perdida.\nProcure por até 2 cartas de Energia básica de tipos diferentes no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
		'de-de': "Du kannst diese Karte nur verwenden, wenn du 7 oder mehr Karten im Nirgendwo hast.\nDurchsuche dein Deck nach bis zu 2 Basis-Energiekarten verschiedenen Typs und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck."
	},

	trainerType: "Item",
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 670821,
				tcgplayer: 282257
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 670821,
				tcgplayer: 282257
			}
		},
	],
}

export default card
