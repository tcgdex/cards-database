import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Great Ball",
		'fr-fr': "Super Ball",
		'es-es': "Super Ball",
		'it-it': "Mega Ball",
		'pt-br': "Grande Bola",
		'de-de': "Superball"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Regardez les 7 cartes du dessus de votre deck. Vous pouvez montrer un Pokémon que vous y trouvez et l’ajouter à votre main. Mélangez les autres cartes avec votre deck.",
		'en-us': "Look at the top 7 cards of your deck. You may reveal a Pokémon you find there and put it into your hand. Shuffle the other cards back into your deck.",
		'es-es': "Mira las 7 primeras cartas de tu baraja. Puedes enseñar 1 Pokémon que encuentres entre ellas y ponerlo en tu mano. Pon el resto de cartas de nuevo en tu baraja y barájalas todas.",
		'it-it': "Guarda le prime sette carte del tuo mazzo. Puoi mostrare un Pokémon che hai trovato e aggiungerlo alle carte che hai in mano. Poi rimischia le altre carte nel tuo mazzo.",
		'pt-br': "Olhe as 7 primeiras cartas do seu baralho. Você poderá revelar 1 Pokémon que encontrar lá e colocá-lo na sua mão. Embaralhe as demais cartas de volta no seu baralho.",
		'de-de': "Schau dir die obersten 7 Karten deines Decks an. Du kannst 1 Pokémon, das du dort findest, deinem Gegner zeigen und auf deine Hand nehmen. Mische die anderen Karten zurück in dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 302197,
		tcgplayer: 146723
	}
}

export default card
