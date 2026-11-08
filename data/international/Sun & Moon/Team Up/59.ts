import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Nidoking",
		'fr-fr': "Nidoking",
		'es-es': "Nidoking",
		'it-it': "Nidoking",
		'pt-br': "Nidoking",
		'de-de': "Nidoking"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		34,
	],

	hp: 160,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Nidorino",
		'fr-fr': "Nidorino",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Drag Off",
				'fr-fr': "Traîne",
				'es-es': "Jalón",
				'it-it': "Trascinato Via",
				'pt-br': "Arrastar para Fora",
				'de-de': "Wegzerren"
			},
			effect: {
				'en-us': "Switch 1 of your opponent’s Benched Pokémon with their Active Pokémon. This attack does 50 damage to the new Active Pokémon.",
				'fr-fr': "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Cette attaque inflige 50 dégâts au nouveau Pokémon Actif.",
				'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. Este ataque hace 50 puntos de daño al nuevo Pokémon Activo.",
				'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Questo attacco infligge 50 danni al nuovo Pokémon attivo.",
				'pt-br': "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a). Este ataque causa 50 pontos de dano ao novo Pokémon Ativo.",
				'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Diese Attacke fügt dem neuen Aktiven Pokémon 50 Schadenspunkte zu."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "King’s Drum",
				'fr-fr': "Tambour du Souverain",
				'es-es': "Redoble del Rey",
				'it-it': "Nidotamburo",
				'pt-br': "Pancada do Rei",
				'de-de': "Trommeln des Königs"
			},
			effect: {
				'en-us': "If Nidoqueen is on your Bench, this attack does 100 more damage.",
				'fr-fr': "Si Nidoqueen est sur votre Banc, cette attaque inflige 100 dégâts supplémentaires.",
				'es-es': "Si Nidoqueen está en tu Banca, este ataque hace 100 puntos de daño más.",
				'it-it': "Se Nidoqueen è nella tua panchina, questo attacco infligge 100 danni in più.",
				'pt-br': "Se Nidoqueen estiver no seu Banco, este ataque causará 100 pontos de dano a mais.",
				'de-de': "Wenn sich Nidoqueen auf deiner Bank befindet, fügt diese Attacke 100 Schadenspunkte mehr zu."
			},
			damage: "100+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It is recognized by its rock-hard hide and its extended horn. Be careful with the horn, as it contains venom.",
	},

	thirdParty: {
		cardmarket: 368989,
		tcgplayer: 183837
	}
}

export default card
