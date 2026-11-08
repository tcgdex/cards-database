import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Cacturne",
		'fr-fr': "Cacturne",
		'es-es': "Cacturne",
		'it-it': "Cacturne",
		'pt-br': "Cacturne",
		'de-de': "Noktuska"
	},

	illustrator: "Mina Nakai",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		332,
	],

	hp: 110,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Cacnea",
		'fr-fr': "Cacnea",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Spike Rend",
				'fr-fr': "Pointe Déchirante",
				'es-es': "Púas Desgarradoras",
				'it-it': "Fendilancia",
				'pt-br': "Espinho Despedaçador",
				'de-de': "Zerreißende Dornen"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon already has any damage counters on it, this attack does 60 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 60 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 60 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 60 pontos de dano a mais.",
				'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Hunt",
				'fr-fr': "Chasse",
				'es-es': "Caza",
				'it-it': "Agguato",
				'pt-br': "Caçada",
				'de-de': "Jagd"
			},
			effect: {
				'en-us': "Switch 1 of your opponent’s Benched Pokémon with their Active Pokémon. This attack does 40 damage to the new Active Pokémon.",
				'fr-fr': "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Cette attaque inflige 40 dégâts au nouveau Pokémon Actif.",
				'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. Este ataque hace 40 puntos de daño al nuevo Pokémon Activo.",
				'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Questo attacco infligge 40 danni al nuovo Pokémon attivo.",
				'pt-br': "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a). Este ataque causa 40 pontos de dano ao novo Pokémon Ativo.",
				'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Diese Attacke fügt dem neuen Aktiven Pokémon 40 Schadenspunkte zu."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It becomes active at night, seeking prey that is exhausted from the day's desert heat.",
	},

	thirdParty: {
		cardmarket: 311856,
		tcgplayer: 149027
	}
}

export default card
