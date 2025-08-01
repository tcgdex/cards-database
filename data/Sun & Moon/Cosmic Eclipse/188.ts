import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Clay",
		fr: "Bardane",
		es: "Yacón",
		it: "Rafan",
		pt: "Clay",
		de: "Turner"
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Défaussez les 7 cartes du dessus de votre deck. Si l’une de ces cartes est une carte Objet, placez-la dans votre main.",
		en: "Discard the top 7 cards of your deck. If any of those cards are Item cards, put them into your hand.",
		es: "Descarta las 7 primeras cartas de tu baraja. Si entre esas cartas hay cartas de Objeto, ponlas en tu mano.",
		it: "Scarta le prime sette carte del tuo mazzo. Se fra queste ci sono delle carte Strumento, aggiungile alle carte che hai in mano.",
		pt: "Descarte as 7 primeiras cartas do seu baralho. Se houver cartas de Item entre elas, coloque-as na sua mão.",
		de: "Lege die obersten 7 Karten deines Decks auf deinen Ablagestapel. Wenn unter jenen Karten Itemkarten sind, nimm sie auf deine Hand."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 408559
	}
}

export default card
