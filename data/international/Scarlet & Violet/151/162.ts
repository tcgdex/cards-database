import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Pince Attrapeuse",
		'en-us': "Grabber",
		'es-es': "Agarrador Mecánico",
		'it-it': "Pinza Afferra-Pokémon",
		'pt-br': "Apanhador",
		'de-de': "Greifarm"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'fr-fr': "Votre adversaire montre sa main, puis vous placez un Pokémon que vous y trouvez en dessous de son deck.",
		'en-us': "Your opponent reveals their hand, and you put a Pokémon you find there on the bottom of their deck.",
		'es-es': "Tu rival enseña las cartas de su mano, y tú pones 1 Pokémon que encuentres entre ellas en la parte inferior de su baraja.",
		'it-it': "Il tuo avversario mostra le carte che ha in mano e tu metti un Pokémon presente tra esse in fondo al suo mazzo.",
		'pt-br': "Seu oponente revela a mão dele e você coloca um Pokémon que encontrar lá como a carta de baixo do baralho dele.",
		'de-de': "Dein Gegner zeigt dir seine Handkarten und du legst ein Pokémon, das du dort findest, unter sein Deck."
	},

	trainerType: "Item",
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733757,
				tcgplayer: 516724,
				cardtrader: 261175
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733757,
				tcgplayer: 516724,
				cardtrader: 261175
			}
		},
	],

	illustrator: "inose yukie",

	
}

export default card
