import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Dunsparce",
		fr: "Insolourdo",
		es: "Dunsparce",
		it: "Dunsparce",
		pt: "Dunsparce",
		de: "Dummisel"
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
				en: "Strike and Run",
				fr: "Frappe et Cours",
				es: "Golpea y Corre",
				it: "Mordi e Fuggi",
				pt: "Bater e Correr",
				de: "Guerillataktik"
			},
			effect: {
				en: "Search your deck for up to 3 Basic Pokémon and put them onto your Bench. Then, shuffle your deck. If you put any Pokémon onto your Bench in this way, you may switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Cherchez jusqu’à 3 Pokémon de base dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck. Si vous avez placé un Pokémon sur votre Banc de cette façon, vous pouvez échanger ce Pokémon avec l’un de vos Pokémon de Banc.",
				es: "Busca en tu baraja hasta 3 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja. Si pones algún Pokémon en tu Banca de esta manera, puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Cerca nel tuo mazzo fino a tre Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo. Se metti dei Pokémon nella tua panchina in questo modo, puoi scambiare questo Pokémon con uno della tua panchina.",
				pt: "Procure por até 3 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho. Se você colocou algum Pokémon no Banco desta forma, poderá trocar este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Durchsuche dein Deck nach bis zu 3 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck. Wenn du mindestens 1 Pokémon auf diese Weise auf deine Bank gelegt hast, kannst du dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sudden Flash",
				fr: "Flash Surprise",
				es: "Destello Repentino",
				it: "Flash Improvviso",
				pt: "Clarão Repentino",
				de: "Plötzlicher Blitz"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
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



}

export default card
