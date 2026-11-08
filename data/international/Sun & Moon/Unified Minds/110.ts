import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Medicham",
		'fr-fr': "Charmina",
		'es-es': "Medicham",
		'it-it': "Medicham",
		'pt-br': "Medicham",
		'de-de': "Meditalis"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		308,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Meditite",
		'fr-fr': "Méditikka",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Pure Power",
				'fr-fr': "Force Pure",
				'es-es': "Energía Pura",
				'it-it': "Forzapura",
				'pt-br': "Poder Puro",
				'de-de': "Mentalkraft"
			},
			effect: {
				'en-us': "Put 4 damage counters on your opponent’s Pokémon in any way you like.",
				'fr-fr': "Placez 4 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
				'es-es': "Pon 4 contadores de daño en los Pokémon de tu rival de la manera que desees.",
				'it-it': "Distribuisci a piacimento quattro segnalini danno sui Pokémon del tuo avversario.",
				'pt-br': "Coloque 4 contadores de dano nos Pokémon do seu oponente como desejar.",
				'de-de': "Lege 4 Schadensmarken beliebig auf die Pokémon deines Gegners."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Master Strike",
				'fr-fr': "Coup de Maître",
				'es-es': "Golpe Maestro",
				'it-it': "Colpo Magistrale",
				'pt-br': "Golpe de Mestre",
				'de-de': "Meisterschlag"
			},
			effect: {
				'en-us': "If this Pokémon has a Karate Belt card attached to it, this attack does 60 more damage.",
				'fr-fr': "Si une carte Ceinture de Karaté est attachée à ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si este Pokémon tiene 1 carta de Cinturón Negro unida a él, este ataque hace 60 puntos de daño más.",
				'it-it': "Se questo Pokémon ha una carta Cintura da Karate assegnata, questo attacco infligge 60 danni in più.",
				'pt-br': "Se este Pokémon tiver uma carta de Faixa de Caratê ligada a ele, este ataque causará 60 pontos de dano a mais.",
				'de-de': "Wenn an dieses Pokémon eine Karategürtel-Karte angelegt ist, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "60+",

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
		'en-us': "It elegantly avoids attacks with dance-like steps, then launches a devastating blow in the same motion.",
	},

	thirdParty: {
		cardmarket: 388352,
		tcgplayer: 195063
	}
}

export default card
