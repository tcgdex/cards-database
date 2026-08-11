import { Card } from "models/database/card"
import Set from "../Silver Tempest Trainer Gallery"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gordie",
		'fr-fr': "Chaz",
		'es-es': "Morris",
		'it-it': "Milo",
		'pt-br': "Godinho",
		'de-de': "Mac"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Full Art Trainer",
	category: "Trainer",

	effect: {
		'en-us': "Look at the top 7 cards of your deck. You may reveal any number of Energy cards you find there and put them into your hand. Shuffle the other cards back into your deck.",
		'fr-fr': "Regardez les 7 cartes du dessus de votre deck. Vous pouvez montrer le nombre voulu de cartes Énergie que vous y trouvez, puis les ajouter à votre main. Mélangez les autres cartes avec votre deck.",
		'es-es': "Mira las 7 primeras cartas de tu baraja. Puedes enseñar cualquier cantidad de cartas de Energía que encuentres entre ellas y ponerlas en tu mano. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
		'it-it': "Guarda le prime sette carte del tuo mazzo. Puoi mostrare un numero qualsiasi di carte Energia presenti tra esse e aggiungerle alle carte che hai in mano. Poi rimischia le altre carte nel tuo mazzo.",
		'pt-br': "Olhe as 7 cartas de cima do seu baralho. Você poderá revelar qualquer número de cartas de Energia que encontrar lá e colocá-las na sua mão. Embaralhe as demais cartas de volta no seu baralho.",
		'de-de': "Schau dir die obersten 7 Karten deines Decks an. Du kannst beliebig viele Energiekarten, die du dort findest, deinem Gegner zeigen und auf deine Hand nehmen. Mische die anderen Karten zurück in dein Deck."
	},

	trainerType: "Supporter",
	regulationMark: "E",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682288,
				tcgplayer: 452040
			}
		},
	],
}

export default card
