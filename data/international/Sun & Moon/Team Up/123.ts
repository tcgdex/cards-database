import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Pidgeotto",
		'fr-fr': "Roucoups",
		'es-es': "Pidgeotto",
		'it-it': "Pidgeotto",
		'pt-br': "Pidgeotto",
		'de-de': "Tauboga"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		17,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Pidgey",
		'fr-fr': "Roucool",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Air Mail",
				'fr-fr': "Courrier Aérien",
				'es-es': "Correo Aéreo",
				'it-it': "Posta Aerea",
				'pt-br': "Correio Aéreo",
				'de-de': "Luftpost"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may look at the top 2 cards of your deck and put 1 of them into your hand. Put the other card on the bottom of your deck.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez regarder les 2 cartes du dessus de votre deck, puis ajouter l’une d’entre elles à votre main. Placez l’autre carte en dessous de votre deck.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes mirar las 2 primeras cartas de tu baraja y poner 1 de ellas en tu mano. Pon la otra carta en la parte inferior de tu baraja.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi guardare le prime due carte del tuo mazzo e aggiungerne una alle carte che hai in mano. Metti l’altra carta in fondo al tuo mazzo.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode olhar as 2 primeiras cartas do seu baralho e colocar 1 delas na sua mão. Coloque a outra carta como a última carta do seu baralho.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du dir die obersten 2 Karten deines Decks anschauen und 1 von ihnen auf deine Hand nehmen. Lege die andere Karte unter dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gust",
				'fr-fr': "Tornade",
				'es-es': "Tornado",
				'it-it': "Raffica",
				'pt-br': "Lufada de Vento",
				'de-de': "Windstoß"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The claws on its feet are well developed. It can carry prey such as an Exeggcute to its nest over 60 miles away.",
	},

	thirdParty: {
		cardmarket: 369050,
		tcgplayer: 183912
	}
}

export default card
