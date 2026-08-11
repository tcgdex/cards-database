import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Salandit",
		'fr-fr': "Tritox",
		'es-es': "Salandit",
		'it-it': "Salandit",
		'pt-br': "Salandit",
		'de-de': "Molunk"
	},

	illustrator: "TOKIYA",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		757,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'es-es': "Arañazo",
				'it-it': "Graffio",
				'pt-br': "Arranhão",
				'de-de': "Kratzer"
			},

			damage: 10,

		},
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
				'en-us': "If your opponent’s Active Pokémon is Poisoned, this attack does 40 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 40 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 40 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 40 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 40 pontos de dano a mais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt diese Attacke 40 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It burns its bodily fluids to create a poisonous gas. When its enemies become disoriented from inhaling the gas, it attacks them.",
	},

	thirdParty: {
		cardmarket: 297479,
		tcgplayer: 130761
	}
}

export default card
