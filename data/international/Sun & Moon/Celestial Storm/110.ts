import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Dunsparce",
		'fr-fr': "Insolourdo",
		'es-es': "Dunsparce",
		'it-it': "Dunsparce",
		'pt-br': "Dunsparce",
		'de-de': "Dummisel"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		206,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Strike and Run",
				'fr-fr': "Frappe et Cours",
				'es-es': "Golpea y Corre",
				'it-it': "Mordi e Fuggi",
				'pt-br': "Bater e Correr",
				'de-de': "Guerillataktik"
			},
			effect: {
				'en-us': "Search your deck for up to 3 Basic Pokémon and put them onto your Bench. Then, shuffle your deck. If you put any Pokémon onto your Bench in this way, you may switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Cherchez jusqu’à 3 Pokémon de base dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck. Si vous avez placé un Pokémon sur votre Banc de cette façon, vous pouvez échanger ce Pokémon avec l’un de vos Pokémon de Banc.",
				'es-es': "Busca en tu baraja hasta 3 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja. Si pones algún Pokémon en tu Banca de esta manera, puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Cerca nel tuo mazzo fino a tre Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo. Se metti dei Pokémon nella tua panchina in questo modo, puoi scambiare questo Pokémon con uno della tua panchina.",
				'pt-br': "Procure por até 3 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho. Se você colocou algum Pokémon no Banco desta forma, poderá trocar este Pokémon por 1 dos seus Pokémon no Banco.",
				'de-de': "Durchsuche dein Deck nach bis zu 3 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck. Wenn du mindestens 1 Pokémon auf diese Weise auf deine Bank gelegt hast, kannst du dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sudden Flash",
				'fr-fr': "Flash Surprise",
				'es-es': "Destello Repentino",
				'it-it': "Flash Improvviso",
				'pt-br': "Clarão Repentino",
				'de-de': "Plötzlicher Blitz"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It digs into the ground with its tail and makes a mazelike nest. It can fly just a little.",
	},

	thirdParty: {
		cardmarket: 361349,
		tcgplayer: 170939
	}
}

export default card
