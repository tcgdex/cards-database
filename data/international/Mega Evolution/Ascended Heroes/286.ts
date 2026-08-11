import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "N's Zoroark ex",
		'fr-fr': "Zoroark-ex de N",
		'es-es': "Zoroark ex de N",
		'es-mx': "Zoroark ex de N",
		'de-de': "Ns Zoroark-ex",
		'it-it': "Zoroark-ex di N",
		'pt-br': "Zoroark ex do N"
	},

	evolveFrom: {
		'en-us': "N's Zorua",
		'fr-fr': "Zorua de N",
		'es-es': "Zorua de N",
		'es-mx': "Zorua de N",
		'de-de': "Ns Zorua",
		'it-it': "Zorua di N",
		'pt-br': "Zorua do N",
	},

	suffix: "ex",
	illustrator: "Raita Kazama",
	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 280,
	types: ["Darkness"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Trade",
			'fr-fr': "Troc",
			'es-es': "Intercambiar",
			'es-mx': "Transacción",
			'de-de': "Ersetzen",
			'it-it': "Contraccambio",
			'pt-br': "Troca"
		},

		effect: {
			'en-us': "You must discard a card from your hand in order to use this Ability. Once during your turn, you may draw 2 cards.",
			'fr-fr': "Vous devez défausser une carte de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher 2 cartes.",
			'es-es': "Debes descartar 1 carta de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes robar 2 cartas.",
			'es-mx': "Debes descartar 1 carta de tu mano para poder usar esta Habilidad. Una vez durante tu turno, puedes robar 2 cartas.",
			'de-de': "Du musst 1 Karte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du 2 Karten ziehen.",
			'it-it': "Devi scartare una carta che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi pescare due carte.",
			'pt-br': "Você deve descartar uma carta da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá comprar 2 cartas."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			'en-us': "Night Joker",
			'fr-fr': "Joker Nocturne",
			'es-es': "Bromista Nocturno",
			'es-mx': "Comodín Nocturno",
			'de-de': "Nachtjoker",
			'it-it': "Burlone Notturno",
			'pt-br': "Curinga Noturno"
		},

		effect: {
			'en-us': "Choose 1 of your Benched N's Pokémon's attacks and use it as this attack.",
			'fr-fr': "Choisissez l'une des attaques de vos Pokémon de N de Banc et utilisez-la en tant que cette attaque.",
			'es-es': "Elige uno de los ataques de tus Pokémon de N en Banca y úsalo para este ataque.",
			'es-mx': "Elige 1 de los ataques de tus Pokémon de N en Banca y úsalo como este ataque.",
			'de-de': "Wähle 1 Attacke der Ns Pokémon auf deiner Bank und setze sie als diese Attacke ein.",
			'it-it': "Scegli un attacco di un Pokémon di N nella tua panchina e usalo al posto di questo attacco.",
			'pt-br': "Escolha 1 dos ataques dos seus Pokémon do N no Banco e use-o como este ataque."
		}
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869897,
				tcgplayer: 676098
			}
		}
	],
}

export default card
