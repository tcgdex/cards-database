import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Energy Loto",
		fr: "Loterie d’Énergie",
		es: "Loto Energía",
		it: "Lotteria Energia",
		pt: "Loto Energia",
		de: "Energielotterie"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Regardez les 7 cartes du dessus de votre deck. Vous pouvez montrer une carte Énergie que vous y trouvez et l’ajouter à votre main. Mélangez les autres cartes avec votre deck.",
		en: "Look at the top 7 cards of your deck. You may reveal an Energy card you find there and put it into your hand. Shuffle the other cards back into your deck.",
		es: "Mira las 7 primeras cartas de tu baraja. Puedes enseñar 1 carta de Energía que encuentres entre ellas y ponerla en tu mano. Pon el resto de cartas de nuevo en tu baraja y barájalas todas.",
		it: "Guarda le prime sette carte del tuo mazzo. Puoi mostrare una carta Energia che hai trovato e aggiungerla alle carte che hai in mano. Poi rimischia le altre carte nel tuo mazzo.",
		pt: "Olhe as 7 primeiras cartas do seu baralho. Você poderá revelar 1 carta de Energia que encontrar lá e colocá-la na sua mão. Embaralhe as demais cartas de volta no seu baralho.",
		de: "Schau dir die obersten 7 Karten deines Decks an. Du kannst 1 Energiekarte, die du dort findest, deinem Gegner zeigen und auf deine Hand nehmen. Mische die anderen Karten zurück in dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 297574
	}
}

export default card
