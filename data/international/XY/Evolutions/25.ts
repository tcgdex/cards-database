import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Poliwrath",
		'fr-fr': "Tartard",
		'es-es': "Poliwrath",
		'it-it': "Poliwrath",
		'pt-br': "Poliwrath",
		'de-de': "Quappo"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		62,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Poliwhirl",
		'fr-fr': "Têtarte",
		'es-es': "Poliwhirl",
		'it-it': "Poliwhirl",
		'pt-br': "Poliwhirl",
		'de-de': "Quaputzi"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Dashing Punch",
				'fr-fr': "Poing Épique",
				'es-es': "Puño Veloz",
				'it-it': "Pugno Rincorsa",
				'pt-br': "Soco Veloz",
				'de-de': "Rasender Punch"
			},
			effect: {
				'en-us': "If this Pokémon was on the Bench and became your Active Pokémon this turn, this attack does 50 more damage.",
				'fr-fr': "Si ce Pokémon était sur le Banc et est devenu votre Pokémon Actif pendant ce tour, cette attaque inflige 50 dégâts supplémentaires.",
				'es-es': "Si este Pokémon estaba en la Banca y se ha convertido en tu Pokémon Activo en este turno, este ataque hace 50 puntos de daño más.",
				'it-it': "Se questo Pokémon era in panchina ed è diventato il tuo Pokémon attivo in questo turno, questo attacco infligge 50 danni in più.",
				'pt-br': "Se este Pokémon estava no Banco e tornou-se o seu Pokémon Ativo nesta vez de jogar, este ataque causará 50 de danos adicionais.",
				'de-de': "Wenn dieses Pokémon auf der Bank war und während dieses Zuges zu deinem Aktiven Pokémon wurde, fügt dieser Angriff 50 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Whirlpool",
				'fr-fr': "Siphon",
				'es-es': "Torbellino",
				'it-it': "Mulinello",
				'pt-br': "Redemoinho",
				'de-de': "Whirlpool"
			},
			effect: {
				'en-us': "Discard an Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
				'es-es': "Descarta 1 Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Scarta un'Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "An adept swimmer, it knows the front crawl, butterfly, and more. It is faster than the best human swimmers.",
	},

	thirdParty: {
		cardmarket: 293382,
		tcgplayer: 124038
	}
}

export default card
