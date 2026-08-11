import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Stoutland",
		'fr-fr': "Mastouffe",
		'es-es': "Stoutland",
		'it-it': "Stoutland",
		'pt-br': "Stoutland",
		'de-de': "Bissbark"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		508,
	],

	hp: 140,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Herdier",
		'fr-fr': "Ponchien",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Sentinel",
				'fr-fr': "Sentinelle",
				'es-es': "Centinela",
				'it-it': "Sentinella",
				'pt-br': "Sentinela",
				'de-de': "Wächter"
			},
			effect: {
				'en-us': "As long as this Pokémon is your Active Pokémon, your opponent can’t play any Supporter cards from his or her hand.",
				'fr-fr': "Tant que ce Pokémon est votre Pokémon Actif, votre adversaire ne peut pas jouer de cartes Supporter de sa main.",
				'es-es': "Mientras este Pokémon sea tu Pokémon Activo, tu rival no puede jugar ninguna carta de Partidario de su mano.",
				'it-it': "Fintanto che questo Pokémon è il tuo Pokémon attivo, il tuo avversario non può giocare le carte Aiuto che ha in mano.",
				'pt-br': "Desde que este Pokémon seja seu Pokémon Ativo, seu oponente não poderá jogar cards de Apoiador da mão dele ou dela.",
				'de-de': "Solang dieses Pokémon dein Aktives Pokémon ist, kann dein Gegner keine Unterstützerkarten von seiner Hand spielen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wild Tackle",
				'fr-fr': "Tacle Brutal",
			},
			effect: {
				'en-us': "Flip a coin. If tails, this Pokémon does 20 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige 20 dégâts.",
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Being wrapped in its long fur is so comfortable that a person would be fine even overnight on a wintry mountain.",
	},

	thirdParty: {
		cardmarket: 280709,
		tcgplayer: 89572
	}
}

export default card
