import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Shuckle",
		'fr-fr': "Caratroc",
		'es-es': "Shuckle",
		'it-it': "Shuckle",
		'pt-br': "Shuckle",
		'de-de': "Pottrott"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		213,
	],

	hp: 80,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Hide a Berry",
				'fr-fr': "Cache Baie",
				'es-es': "Esconder una Baya",
				'it-it': "Nascondibacca",
				'pt-br': "Esconda uma Fruta",
				'de-de': "Beerenversteck"
			},
			effect: {
				'en-us': "Draw 2 cards. Then, put a card from your hand on the bottom of your deck.",
				'fr-fr': "Piochez 2 cartes. Ensuite, mettez une carte de votre main en dessous de votre deck.",
				'es-es': "Roba 2 cartas. Después, pon 1 carta de tu mano en la parte inferior de tu baraja.",
				'it-it': "Pesca due carte. Poi, prendi una carta dalla tua mano e mettila in fondo al tuo mazzo.",
				'pt-br': "Compre 2 cards. Coloque um card da sua mão debaixo do seu baralho.",
				'de-de': "Ziehe 2 Karten. Lege anschließend 1 Karte von deiner Hand unter deinen Ablagestapel."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wrap",
				'fr-fr': "Ligotage",
				'es-es': "Constricción",
				'it-it': "Avvolgibotta",
				'pt-br': "Embrulho",
				'de-de': "Wickel"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It stores Berries inside its shell. To avoid attacks, it hides beneath rocks and remains completely still.",
	},

	thirdParty: {
		cardmarket: 289827,
		tcgplayer: 117764
	}
}

export default card
