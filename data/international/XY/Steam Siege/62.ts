import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Spiritomb",
		'fr-fr': "Spiritomb",
		'es-es': "Spiritomb",
		'it-it': "Spiritomb",
		'pt-br': "Spiritomb",
		'de-de': "Kryppuk"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		442,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Nightmare",
				'fr-fr': "Cauchemar",
				'es-es': "Pesadilla",
				'it-it': "Incubo",
				'pt-br': "Pesadelo",
				'de-de': "Nachtmahr"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Damage Play",
				'fr-fr': "Jeu de Dégâts",
				'es-es': "Jugar con Daño",
				'it-it': "Giocodanni",
				'pt-br': "Jogar com Dano",
				'de-de': "Salz in die Wunde streuen"
			},
			effect: {
				'en-us': "Move as many damage counters on your opponent's Benched Pokémon as you like to any of your opponent's other Pokémon in any way you like.",
				'fr-fr': "Déplacez autant de marqueurs de dégâts que vous voulez des Pokémon de Banc de votre adversaire vers les autres Pokémon de votre adversaire, de la manière que vous voulez.",
				'es-es': "Mueve tantos contadores de daño como quieras de los Pokémon en Banca de tu rival a cualquiera de los otros Pokémon de tu rival de la manera que desees.",
				'it-it': "Distribuisci a piacimento i segnalini danno presenti sui Pokémon in panchina del tuo avversario su qualsiasi altro suo Pokémon.",
				'pt-br': "Mova tantos contadores de danos dos Pokémon no Banco do seu oponente quanto desejar para quaisquer outros Pokémon do seu oponente do jeito que desejar.",
				'de-de': "Verschiebe beliebig viele Schadensmarken von den Pokémon auf der Bank deines Gegners in beliebiger Weise auf seine anderen Pokémon."
			},

		},
	],

	retreat: 1,

	description: {
		'en-us': "It was bound to a fissure in an Odd Keystone as punishment for misdeeds 500 years ago.",
	},

	thirdParty: {
		cardmarket: 291632,
		tcgplayer: 121192
	}
}

export default card
