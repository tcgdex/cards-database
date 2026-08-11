import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Drifblim",
		'fr-fr': "Grodrive",
		'es-es': "Drifblim",
		'it-it': "Drifblim",
		'pt-br': "Drifblim",
		'de-de': "Drifzepeli"
	},

	illustrator: "Yumi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		426,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Drifloon",
		'fr-fr': "Baudrive",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Damage Transport",
				'fr-fr': "Transport de Dégâts",
				'es-es': "Transporte de Daño",
				'it-it': "Trasporto Danni",
				'pt-br': "Transporte de Dano",
				'de-de': "Schadensflug"
			},
			effect: {
				'en-us': "Move 4 damage counters from each of your Pokémon to your opponent’s Active Pokémon.",
				'fr-fr': "Déplacez 4 marqueurs de dégâts de chacun de vos Pokémon vers le Pokémon Actif de votre adversaire.",
				'es-es': "Mueve 4 contadores de daño de cada uno de tus Pokémon al Pokémon Activo de tu rival.",
				'it-it': "Sposta quattro segnalini danno da ciascuno dei tuoi Pokémon al Pokémon attivo del tuo avversario.",
				'pt-br': "Mova 4 contadores de dano de cada um dos seus Pokémon para o Pokémon Ativo do seu oponente.",
				'de-de': "Verschiebe 4 Schadensmarken von jedem deiner Pokémon auf das Aktive Pokémon deines Gegners."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wind Wheel",
				'fr-fr': "Roue Éolienne",
				'es-es': "Rueda de Viento",
				'it-it': "Girandola",
				'pt-br': "Roda de Vento",
				'de-de': "Windrad"
			},
			effect: {
				'en-us': "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
				'fr-fr': "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
				'es-es': "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
				'it-it': "Il tuo avversario scambia il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				'pt-br': "Seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
				'de-de': "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Even while under careful observation, large flocks of Drifblim flying at dusk will inexplicably disappear from view.",
	},

	thirdParty: {
		cardmarket: 315982,
		tcgplayer: 157669
	}
}

export default card
