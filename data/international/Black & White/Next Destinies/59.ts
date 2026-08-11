import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Musharna",
		'fr-fr': "Mushana",
		'es-es': "Musharna",
		'it-it': "Musharna",
		'pt-br': "Musharna",
		'de-de': "Somnivora"
	},

	illustrator: "Maiko Fujiwara",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		518,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Munna",
		'fr-fr': "Munna",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Forewarn",
				'fr-fr': "Prédiction",
				'es-es': "Alerta",
				'it-it': "Premonizione",
				'pt-br': "Premunir",
				'de-de': "Vorwarnung"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may look at the top 2 cards of your deck, choose 1 of them, and put it into your hand. Put the other card back on top of your deck.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez regarder les 2 cartes du dessus de votre deck, en choisir 1 et l’ajouter à votre main. Replacez l’autre carte sur le dessus de votre deck.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes mirar las 2 primeras cartas de tu baraja, elegir 1 de ellas y ponerla en tu mano. Vuelve a poner la otra carta en la parte superior de tu baraja.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi guardare le prime due carte del tuo mazzo, sceglierne una e aggiungerla alle carte che hai in mano. Rimetti l’altra carta in cima al tuo mazzo.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você poderá olhar os 2 cards de cima do seu baralho, escolher 1 deles e colocá-lo em sua mão. Coloque o outro card de volta em cima do baralho.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du die obersten 2 Karten deines Decks anschauen, 1 davon auswählen und auf die Hand nehmen. Lege die andere Karte auf dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Fluffy Dream",
				'fr-fr': "Rêve Douillet",
			},
			effect: {
				'en-us': "This Pokémon is now Asleep.",
				'fr-fr': "Ce Pokémon est maintenant Endormi.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "With the mist from its forehead, it can create shapes of things from dreams it has eaten.",
	},

	thirdParty: {
		cardmarket: 280284,
		tcgplayer: 87660
	}
}

export default card
