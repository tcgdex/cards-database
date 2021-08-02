import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Great Ball",
		fr: "Super Ball",
		es: "Super Ball",
		it: "Mega Ball",
		pt: "Grande Bola",
		de: "Superball"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Look at the top 7 cards of your deck. You may reveal a Pokémon you find there and put it into your hand. Shuffle the other cards back into your deck.",
		fr: "Regardez les 7 cartes du dessus de votre deck. Vous pouvez montrer un Pokémon que vous y trouvez, puis l’ajouter à votre main. Mélangez les autres cartes avec votre deck.",
		es: "Mira las 7 primeras cartas de tu baraja. Puedes enseñar 1 Pokémon que encuentres entre ellas y ponerlo en tu mano. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
		it: "Guarda le prime sette carte del tuo mazzo. Puoi mostrare un Pokémon presente tra esse e aggiungerlo alle carte che hai in mano. Poi rimischia le altre carte nel tuo mazzo.",
		pt: "Olhe as 7 cartas de cima do seu baralho. Você poderá revelar 1 Pokémon que encontrar lá e colocá-lo em sua mão. Embaralhe as demais cartas de volta no seu baralho.",
		de: "Schau dir die obersten 7 Karten deines Decks an. Du kannst 1 Pokémon, das du dort findest, deinem Gegner zeigen und auf deine Hand nehmen. Mische die anderen Karten zurück in dein Deck."
	},

	trainerType: "Item",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
