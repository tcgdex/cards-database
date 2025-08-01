import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Shuckle",
		fr: "Caratroc",
		es: "Shuckle",
		it: "Shuckle",
		pt: "Shuckle",
		de: "Pottrott"
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
				en: "Hide a Berry",
				fr: "Cache Baie",
				es: "Esconder una Baya",
				it: "Nascondibacca",
				pt: "Esconda uma Fruta",
				de: "Beerenversteck"
			},
			effect: {
				en: "Draw 2 cards. Then, put a card from your hand on the bottom of your deck.",
				fr: "Piochez 2 cartes. Ensuite, mettez une carte de votre main en dessous de votre deck.",
				es: "Roba 2 cartas. Después, pon 1 carta de tu mano en la parte inferior de tu baraja.",
				it: "Pesca due carte. Poi, prendi una carta dalla tua mano e mettila in fondo al tuo mazzo.",
				pt: "Compre 2 cards. Coloque um card da sua mão debaixo do seu baralho.",
				de: "Ziehe 2 Karten. Lege anschließend 1 Karte von deiner Hand unter deinen Ablagestapel."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wrap",
				fr: "Ligotage",
				es: "Constricción",
				it: "Avvolgibotta",
				pt: "Embrulho",
				de: "Wickel"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt paralysiert."
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

	thirdParty: {
		cardmarket: 289827
	}
}

export default card
