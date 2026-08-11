import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Grumpig",
		'fr-fr': "Groret",
		'es-es': "Grumpig",
		'it-it': "Grumpig",
		'pt-br': "Grumpig",
		'de-de': "Groink"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		326,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Spoink",
		'fr-fr': "Spoink",
		'es-es': "Spoink",
		'it-it': "Spoink",
		'pt-br': "Spoink",
		'de-de': "Spoink"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Head Walking",
				'fr-fr': "Slammeur",
				'es-es': "Salto al Público",
				'it-it': "Pestalatesta",
				'pt-br': "Saltar na Plateia",
				'de-de': "Kopflauf"
			},
			effect: {
				'en-us': "Put a Basic Pokémon from your opponent's discard pile onto his or her Bench. Then, put 3 damage counters on that Pokémon.",
				'fr-fr': "Prenez un Pokémon de base dans la pile de défausse de votre adversaire et placez-le sur son Banc. Ensuite, placez 3 marqueurs de dégâts sur le Pokémon.",
				'es-es': "Pon 1 Pokémon Básico de la pila de descartes de tu rival en su Banca. Después, pon 3 contadores de daño en ese Pokémon.",
				'it-it': "Prendi un Pokémon Base dalla pila degli scarti del tuo avversario e mettilo nella sua panchina. Poi, metti tre segnalini danno su quel Pokémon.",
				'pt-br': "Coloque um Pokémon Básico da pilha de descarte do seu oponente no Banco dele(a). Em seguida, coloque 3 contadores de danos naquele Pokémon.",
				'de-de': "Nimm 1 Basis-Pokémon aus dem Ablagestapel deines Gegners und lege es auf seine Bank. Lege anschließend 3 Schadensmarken auf jenes Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Knock Back",
				'fr-fr': "Dégagement",
				'es-es': "Devolver Noqueo",
				'it-it': "Allontanato",
				'pt-br': "Jogar de Volta",
				'de-de': "Schlag versetzen"
			},
			effect: {
				'en-us': "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Votre adversaire échange son Pokémon Actif avec l'un de ses Pokémon de Banc.",
				'es-es': "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
				'it-it': "Il tuo avversario scambia il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				'pt-br': "Seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
				'de-de': "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It uses black pearls to amplify its psychic power. It does an odd dance to gain control over foes.",
	},

	thirdParty: {
		cardmarket: 289857,
		tcgplayer: 117791
	}
}

export default card
