import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [448],

	name: {
		'en-us': "Lucario",
		'fr-fr': "Lucario",
		'es-es': "Lucario",
		'it-it': "Lucario",
		'pt-br': "Lucario",
		'de-de': "Lucario"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Riolu",
		'fr-fr': "Riolu",
		'es-es': "Riolu",
		'it-it': "Riolu",
		'pt-br': "Riolu",
		'de-de': "Riolu"
	},

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Spike Draw",
				'fr-fr': "Pique-Pioche",
				'es-es': "Robo Pico",
				'it-it': "Battipesca",
				'pt-br': "Comprada Espinhosa",
				'de-de': "Stachelzug"
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez une carte.",
				'es-es': "Roba 1 carta.",
				'it-it': "Pesca una carta.",
				'pt-br': "Compre 1 carta.",
				'de-de': "Ziehe 1 Karte."
			},
			damage: 40,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Knuckle Impact",
				'fr-fr': "Coup d'Articulations",
				'es-es': "Impacto Nudillo",
				'it-it': "Impatto Nocche",
				'pt-br': "Impacto Ossudo",
				'de-de': "Knöchelprall"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon can't attack.",
				'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
				'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
				'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
				'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
			},
			damage: 160,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "It controls waves known as auras, which are powerful enough to pulverize huge rocks. It uses these waves to take down its prey."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 512310,
				tcgplayer: 226574
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 512310,
				tcgplayer: 226574
			}
		},
	],
}

export default card
