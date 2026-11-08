import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Alolan Persian",
		'fr-fr': "Persian d’Alola",
		'es-es': "Persian de Alola",
		'it-it': "Persian di Alola",
		'pt-br': "Persian de Alola",
		'de-de': "Alola-Snobilikat"
	},

	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		53,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Alolan Meowth",
		'fr-fr': "Miaouss d’Alola",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				'en-us': "Taunt",
				'fr-fr': "Provoc",
				'es-es': "Mofa",
				'it-it': "Provocazione",
				'pt-br': "Insulto",
				'de-de': "Verhöhner"
			},
			effect: {
				'en-us': "Switch 1 of your opponent’s Benched Pokémon with their Active Pokémon.",
				'fr-fr': "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
				'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
				'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
				'pt-br': "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a).",
				'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus."
			},

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Claw Rend",
				'fr-fr': "Déchirure",
				'es-es': "Quebrantar",
				'it-it': "Artiglilaceranti",
				'pt-br': "Lacerar",
				'de-de': "Reißer"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon already has any damage counters on it, this attack does 30 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 30 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario ha dei segnalini danno, questo attacco infligge 30 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente já possuir contadores de dano nele, este ataque causará 30 pontos de dano a mais.",
				'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its round face and smooth coat—softer than the most high-class velvet—have made this a very popular Pokémon in Alola.",
	},

	thirdParty: {
		cardmarket: 295390,
		tcgplayer: 126951
	}
}

export default card
