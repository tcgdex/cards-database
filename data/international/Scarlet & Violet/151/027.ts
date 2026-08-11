import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [27],
	set: Set,

	name: {
		'fr-fr': "Sabelette",
		'en-us': "Sandshrew",
		'es-es': "Sandshrew",
		'it-it': "Sandshrew",
		'pt-br': "Sandshrew",
		'de-de': "Sandan"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Écran de Sable",
			'en-us': "Sand Screen",
			'es-es': "Pantalla de Arena",
			'it-it': "Sabbiaschermo",
			'pt-br': "Cortina de Areia",
			'de-de': "Sandschirm"
		},

		effect: {
			'fr-fr': "Les cartes Dresseur dans la pile de défausse de votre adversaire ne peuvent pas être placées dans son deck par les effets des cartes Objet ou Supporter de votre adversaire.",
			'en-us': "Trainer cards in your opponent's discard pile can't be put into their deck by an effect of your opponent's Item or Supporter cards.",
			'es-es': "Las cartas de Entrenador en la pila de descartes de tu rival no pueden ponerse en su baraja por ningún efecto de las cartas de Objeto o de Partidario de tu rival.",
			'it-it': "Le carte Allenatore nella pila degli scarti del tuo avversario non possono essere messe nel suo mazzo per effetto delle carte Strumento o carte Aiuto del tuo avversario.",
			'pt-br': "Cartas de Treinador na pilha de descarte do seu oponente não podem ser colocadas no baralho dele pelos efeitos de cartas de Item ou Apoiador do seu oponente.",
			'de-de': "Trainerkarten im Ablagestapel deines Gegners können nicht durch einen Effekt von Item- oder Unterstützerkarten deines Gegners in sein Deck gelegt werden."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Griffe",
			'en-us': "Scratch",
			'es-es': "Arañazo",
			'it-it': "Graffio",
			'pt-br': "Arranhão",
			'de-de': "Kratzer"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It burrows into the ground to create its nest. If hard stones impede its tunneling, it uses its sharp claws to shatter them and then carries on digging.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733622,
				tcgplayer: 515978,
				cardtrader: 261627
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733622,
				tcgplayer: 515978,
				cardtrader: 261627
			}
		},
	],

	illustrator: "kodama",

	
}

export default card
