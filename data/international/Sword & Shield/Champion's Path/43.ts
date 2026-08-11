import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	dexId: [568],

	name: {
		'en-us': "Trubbish",
		'fr-fr': "Miamiasme",
		'es-es': "Trubbish",
		'it-it': "Trubbish",
		'pt-br': "Trubbish",
		'de-de': "Unratütox"
	},

	illustrator: "nagimiso",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Darkness",
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Venoshock",
				'fr-fr': "Choc Venin",
				'es-es': "Carga Tóxica",
				'it-it': "Velenoshock",
				'pt-br': "Venochoque",
				'de-de': "Giftschock"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon is Poisoned, this attack does 50 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 50 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 50 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 50 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 50 pontos de dano a mais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt diese Attacke 50 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		'en-us': "Its favorite places are unsanitary ones. If you leave trash lying around, you could even find one of these Pokémon living in your room."
	},

	thirdParty: {
		cardmarket: 500070,
		tcgplayer: 223043
	}
}

export default card
