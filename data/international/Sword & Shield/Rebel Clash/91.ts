import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Dragapult",
		'fr-fr': "Lanssorien",
		'es-es': "Dragapult",
		'it-it': "Dragapult",
		'pt-br': "Dragapult",
		'de-de': "Katapuldra"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [887],
	set: Set,

	evolveFrom: {
		'en-us': "Drakloak",
		'fr-fr': "Dispareptil",
		'es-es': "Drakloak",
		'it-it': "Drakloak",
		'pt-br': "Drakloak",
		'de-de': "Phandra"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Infiltrator",
				'fr-fr': "Infiltration",
				'es-es': "Allanamiento",
				'it-it': "Intrapasso",
				'pt-br': "Infiltrado",
				'de-de': "Schwebedurch"
			},
			effect: {
				'en-us': "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.",
				'fr-fr': "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce. Si c'est face, évitez ces dégâts.",
				'es-es': "Si se inflige cualquier daño a este Pokémon por ataques, lanza 1 moneda. Si sale cara, evita ese daño.",
				'it-it': "Se questo Pokémon subisce danni da qualsiasi attacco, lancia una moneta. Se esce testa, previeni quei danni.",
				'pt-br': "Se qualquer dano for causado a este Pokémon por ataques, jogue 1 moeda. Se sair cara, previna aquele dano.",
				'de-de': "Wenn diesem Pokémon durch Attacken Schaden zugefügt wird, wirf 1 Münze. Verhindere jenen Schaden bei Kopf."
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
				'en-us': "Phantom Force",
				'fr-fr': "Hantise",
				'es-es': "Golpe Fantasma",
				'it-it': "Spettrotuffo",
				'pt-br': "Golpe Fantasma",
				'de-de': "Phantomkraft"
			},
			effect: {
				'en-us': "Put 3 damage counters on your opponent's Benched Pokémon in any way you like.",
				'fr-fr': "Placez 3 marqueurs de dégâts sur les Pokémon de Banc de votre adversaire comme il vous plaît.",
				'es-es': "Pon 3 contadores de daño en los Pokémon en Banca de tu rival de la manera que desees.",
				'it-it': "Metti tre segnalini danno sui Pokémon nella panchina del tuo avversario nel modo che preferisci.",
				'pt-br': "Coloque 3 contadores de dano nos Pokémon no Banco do seu oponente como desejar.",
				'de-de': "Lege 3 Schadensmarken beliebig auf die Pokémon auf der Bank deines Gegners."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	hp: 150,
	types: ["Psychic"],
	regulationMark: "D",
	retreat: 0,


	stage: "Stage2",

	description: {
		'en-us': "When it isn't battling, it keeps Dreepy in the holes on its horns. Once a fight starts, it launches the Dreepy like supersonic missiles."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 457873,
				tcgplayer: 213177
			}
		},
		{
			type: 'holo',
			stamp: ['set-logo'],
			thirdParty: {
				cardmarket: 709526
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457873,
				tcgplayer: 213177
			}
		},
	],
}

export default card
