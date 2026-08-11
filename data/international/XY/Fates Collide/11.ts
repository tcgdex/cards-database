import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Fennekin",
		'fr-fr': "Feunnec",
		'es-es': "Fennekin",
		'it-it': "Fennekin",
		'pt-br': "Fennekin",
		'de-de': "Fynx"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		653,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Invite Out",
				'fr-fr': "Invitation à Sortir",
				'es-es': "Invitar a Salir",
				'it-it': "Vienifuori",
				'pt-br': "Vem Jogar",
				'de-de': "Ausführen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, échangez l'un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
				'es-es': "Lanza 1 moneda. Si sale cara, cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
				'it-it': "Lancia una moneta. Se esce testa, scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
				'pt-br': "Jogue uma moeda. Se sair cara, troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo desse oponente.",
				'de-de': "Wirf 1 Münze. Tausche bei \"Kopf\" 1 Pokémon auf der Bank deines Gegners gegen das Aktive Pokémon deines Gegners aus."
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "As it walks, it munches on a twig in place of a snack. It intimidates opponents by puffing hot air out of its ears.",
	},

	thirdParty: {
		cardmarket: 289836,
		tcgplayer: 117774
	}
}

export default card
