import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Mew",
		'fr-fr': "Mew",
		'es-es': "Mew",
		'it-it': "Mew",
		'pt-br': "Mew",
		'de-de': "Mew"
	},

	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		151,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Bench Barrier",
				'fr-fr': "Barrière de Banc",
				'es-es': "Barrera Banca",
				'it-it': "Panchinafranca",
				'pt-br': "Barreira de Banco",
				'de-de': "Bankbarriere"
			},
			effect: {
				'en-us': "Prevent all damage done to your Benched Pokémon by your opponent’s attacks.",
				'fr-fr': "Évitez tous les dégâts infligés à vos Pokémon de Banc par les attaques de votre adversaire.",
				'es-es': "Evita todo el daño infligido a tus Pokémon en Banca por ataques de tu rival.",
				'it-it': "Previeni tutti i danni inflitti ai tuoi Pokémon in panchina dagli attacchi del tuo avversario.",
				'pt-br': "Previne todo o dano causado aos seus Pokémon no Banco pelos ataques do seu oponente.",
				'de-de': "Verhindere allen Schaden, der den Pokémon auf deiner Bank durch Attacken deines Gegners zugefügt wird."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Psypower",
				'fr-fr': "Puissance Psy",
				'es-es': "Psicopoder",
				'it-it': "Psicotere",
				'pt-br': "Poder Psíquico",
				'de-de': "Psy-Power"
			},
			effect: {
				'en-us': "Put 3 damage counters on your opponent’s Pokémon in any way you like.",
				'fr-fr': "Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
				'es-es': "Pon 3 contadores de daño en los Pokémon de tu rival de la manera que desees.",
				'it-it': "Distribuisci a piacimento tre segnalini danno sui Pokémon del tuo avversario.",
				'pt-br': "Coloque 3 contadores de dano nos Pokémon do seu oponente como desejar.",
				'de-de': "Lege 3 Schadensmarken beliebig auf die Pokémon deines Gegners."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Because it can use all kinds of moves, many scientists believe Mew to be the ancestor of Pokémon.",
	},

	thirdParty: {
		cardmarket: 372364,
		tcgplayer: 189176
	}
}

export default card
