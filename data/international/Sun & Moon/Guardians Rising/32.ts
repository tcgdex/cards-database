import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Glalie",
		'fr-fr': "Oniglali",
		'es-es': "Glalie",
		'it-it': "Glalie",
		'pt-br': "Glalie",
		'de-de': "Firnontor"
	},

	illustrator: "so-taro",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		362,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Snorunt",
		'fr-fr': "Stalgamin",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Crunch",
				'fr-fr': "Mâchouille",
				'es-es': "Triturar",
				'it-it': "Sgranocchio",
				'pt-br': "Mastigada",
				'de-de': "Knirscher"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy from your opponent’s Active Pokémon.",
				'fr-fr': "Lancez une pièce. Si c’est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sala cara, descarta 1 Energía del Pokémon Activo de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, scarta un’Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Jogue 1 moeda. Se sair cara, descarte 1 Energia do Pokémon Ativo do seu oponente.",
				'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Raging Floe",
				'fr-fr': "Banquise Furieuse",
				'es-es': "Témpano Furioso",
				'it-it': "Furiobanchina",
				'pt-br': "Banquisa Feroz",
				'de-de': "Wütende Scholle"
			},
			effect: {
				'en-us': "If this Pokémon has any damage counters on it, this attack does 80 more damage.",
				'fr-fr': "Si des marqueurs de dégâts sont placés sur ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 80 puntos de daño más.",
				'it-it': "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 80 danni in più.",
				'pt-br': "Se este Pokémon possuir algum contador de dano nele, este ataque causará 80 pontos de dano a mais.",
				'de-de': "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "70+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Legend says a boulder on an icy mountain absorbed the distress and regrets of a stranded mountaineer, giving rise to Glalie.",
	},

	thirdParty: {
		cardmarket: 297494,
		tcgplayer: 130932
	}
}

export default card
