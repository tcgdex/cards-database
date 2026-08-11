import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Great Ball",
		'fr-fr': "Super Ball",
		'es-es': "Superball",
		'it-it': "Mega Ball",
		'pt-br': "Grande Bola",
		'de-de': "Superball"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Regardez les 7 cartes du dessus de votre deck. Vous pouvez montrer un Pokémon que vous y trouvez et l’ajouter à votre main. Mélangez les autres cartes avec votre deck.",
		'en-us': "Look at the top 7 cards of your deck. You may reveal a Pokémon you find there and put it into your hand. Shuffle the other cards back into your deck.",
		'es-es': "Mira las 7 primeras cartas de tu baraja. Puedes enseñar un Pokémon que encuentres entre ellas y ponerlo en tu mano. Pon el resto de cartas de nuevo en tu baraja y barájalas todas.",
		'it-it': "Guarda le prime sette carte del tuo mazzo. Puoi mostrare un Pokémon che hai trovato e aggiungerlo alle carte che hai in mano. Rimischia le altre carte nel tuo mazzo.",
		'pt-br': "Olhe os 7 cards de cima do seu baralho. Você poderá revelar um Pokémon que encontrar lá e colocá-lo em sua mão. Embaralhe os demais cards de volta.",
		'de-de': "Schau dir die obersten 7 Karten deines Decks an. Du kannst 1 Pokémon, das du dort gefunden hast, deinem Gegner zeigen und es auf deine Hand nehmen. Mische die anderen Karten zurück in dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 280716,
		tcgplayer: 85900
	}
}

export default card
