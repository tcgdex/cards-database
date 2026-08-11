import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pokégear 3.0",
		'fr-fr': "Pokématos 3.0",
		'de-de': "Pokécom 3.0",
		'it-it': "Pokégear 3.0",
		'pt-br': "Pokégear 3.0",
		'es-es': "Pokégear 3.0",
		'es-mx': "Pokégear 3.0"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Look at the top 7 cards of your deck. You may reveal a Supporter card you find there and put it into your hand. Shuffle the other cards back into your deck.",
		'fr-fr': "Regardez les 7 cartes du dessus de votre deck. Vous pouvez montrer une carte Supporter que vous y trouvez, puis l'ajouter à votre main. Mélangez les autres cartes avec votre deck.",
		'de-de': "Schau dir die obersten 7 Karten deines Decks an. Du kannst 1 Unterstützerkarte, die du dort findest, deinem Gegner zeigen und auf deine Hand nehmen. Mische die anderen Karten zurück in dein Deck.",
		'it-it': "Guarda le prime sette carte del tuo mazzo. Puoi mostrare una carta Aiuto presente tra esse e aggiungerla alle carte che hai in mano. Poi rimischia le altre carte nel tuo mazzo.",
		'pt-br': "Olhe as 7 cartas de cima do seu baralho. Você poderá revelar uma carta de Apoiador que encontrar lá e colocá-la na sua mão. Embaralhe as outras cartas de volta no seu baralho.",
		'es-es': "Mira las 7 primeras cartas de tu baraja. Puedes enseñar 1 carta de Partidario que encuentres entre ellas y ponerla en tu mano. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
		'es-mx': "Mira las primeras 7 cartas de tu mazo. Puedes mostrar 1 carta de Partidario que encuentres entre ellas y ponerla en tu mano. Pon el resto de las cartas de nuevo en tu mazo y barájalas todas."
	},

	trainerType: "Item",
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836073,
				tcgplayer: 642530
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836073,
				tcgplayer: 642530
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836475,
				tcgplayer: 644830
			}
		},
	]
}

export default card
