import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Golurk",
		'fr-fr': "Golemastoc",
		'es-es': "Golurk",
		'it-it': "Golurk",
		'pt-br': "Golurk",
		'de-de': "Golgantes"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		623,
	],

	hp: 140,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Golett",
		'fr-fr': "Gringolem",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Rock Tumble",
				'fr-fr': "Roule-Pierre",
				'es-es': "Avalancha de Rocas",
				'it-it': "Tiramassi",
				'pt-br': "Desabamento de Pedras",
				'de-de': "Rollende Felsen"
			},
			effect: {
				'en-us': "This attack’s damage isn’t affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
				'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
				'pt-br': "O dano deste ataque não é afetado por Resistência.",
				'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fist of Antiquity",
				'fr-fr': "Poing d’Antiquité",
				'es-es': "Puño de Antigüedad",
				'it-it': "Pugno dell’Antichità",
				'pt-br': "Punho da Antiguidade",
				'de-de': "Faust des Altertums"
			},
			effect: {
				'en-us': "If you have any Supporter cards in your discard pile, this attack does nothing.",
				'fr-fr': "Si vous avez une carte Supporter dans votre pile de défausse, cette attaque ne fait rien.",
				'es-es': "Si tienes alguna carta de Partidario en tu pila de descartes, este ataque no hace nada.",
				'it-it': "Se hai delle carte Aiuto nella tua pila degli scarti, questo attacco non ha effetto.",
				'pt-br': "Se você tiver alguma carta de Apoiador na sua pilha de descarte, este ataque não fará nada.",
				'de-de': "Wenn du mindestens 1 Unterstützerkarte in deinem Ablagestapel hast, hat diese Attacke keine Auswirkungen."
			},
			damage: 160,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Some say that ancient people invented Golurk to serve as a laborer. It follows its master's orders faithfully.",
	},

	thirdParty: {
		cardmarket: 408094,
		tcgplayer: 201264
	}
}

export default card
