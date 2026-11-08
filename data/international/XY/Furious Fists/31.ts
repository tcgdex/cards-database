import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Plusle",
		'fr-fr': "Posipi",
		'es-es': "Plusle",
		'it-it': "Plusle",
		'pt-br': "Plusle",
		'de-de': "Plusle"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		311,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Positive Hand",
				'fr-fr': "Main Positive",
				'es-es': "Mano Positiva",
				'it-it': "Mano Positiva",
				'pt-br': "Mão Positiva",
				'de-de': "Positive Hand"
			},
			effect: {
				'en-us': "Discard a basic Energy card from your hand. If you do, draw 2 cards.",
				'fr-fr': "Défaussez une carte Énergie de base de votre main. Dans ce cas, piochez 2 cartes.",
				'es-es': "Descarta 1 carta de Energía Básica de tu mano. Si lo haces, roba 2 cartas.",
				'it-it': "Scarta una carta Energia base presente tra le carte che hai in mano. Se lo fai, pesca due carte.",
				'pt-br': "Descarte um card de Energia básica de sua mão. Se fizer isso, compre 2 cards.",
				'de-de': "Lege 1 Basis-Energiekarte aus deiner Hand auf deinen Ablagestapel. Wenn du das machst, ziehe 2 Karten."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Electric Tail",
				'fr-fr': "Électro-Queue",
				'es-es': "Cola Eléctrica",
				'it-it': "Elettrocoda",
				'pt-br': "Cauda Elétrica",
				'de-de': "Stromschweif"
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
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It cheers on friends with pom-poms made of sparks. It drains power from telephone poles.",
	},

	thirdParty: {
		cardmarket: 281695,
		tcgplayer: 92206
	}
}

export default card
