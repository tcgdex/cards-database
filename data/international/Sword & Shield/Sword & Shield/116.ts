import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Stonjourner VMAX",
		'fr-fr': "Dolman VMAX",
		'es-es': "Stonjourner VMAX",
		'it-it': "Stonjourner VMAX",
		'pt-br': "Stonjourner VMAX",
		'de-de': "Humanolith VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	set: Set,
	hp: 330,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Stonjourner V",
		'fr-fr': "Dolman-V",
		'es-es': "Stonjourner V",
		'it-it': "Stonjourner V",
		'pt-br': "Stonjourner V",
		'de-de': "Humanolith V"
	},

	stage: "VMAX",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Stone Gift",
				'fr-fr': "Cadeau Roc",
				'es-es': "Regalo Roca",
				'it-it': "Donopietra",
				'pt-br': "Presente Pedregoso",
				'de-de': "Steingeschenk"
			},
			effect: {
				'en-us': "Attach a Fighting Energy card from your hand to 1 of your Pokémon. If you do, heal 120 damage from that Pokémon.",
				'fr-fr': "Attachez une carte Énergie Fighting de votre main à l'un de vos Pokémon. Dans ce cas, soignez 120 dégâts de ce Pokémon-là.",
				'es-es': "Une 1 carta de Energía Fighting de tu mano a 1 de tus Pokémon. Si lo haces, cura 120 puntos de daño a ese Pokémon.",
				'it-it': "Assegna a uno dei tuoi Pokémon una carta Energia Fighting dalla tua mano. Se lo fai, cura quel Pokémon da 120 danni.",
				'pt-br': "Ligue 1 carta de Energia Fighting da sua mão a 1 dos seus Pokémon. Se fizer isto, cure 120 pontos de dano daquele Pokémon.",
				'de-de': "Lege 1 Fighting-Energiekarte aus deiner Hand an 1 deiner Pokémon an. Wenn du das machst, heile 120 Schadenspunkte bei jenem Pokémon."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Max Rockfall",
				'fr-fr': "Lithomax",
				'es-es': "Maxilito",
				'it-it': "Dynamacigno",
				'pt-br': "Desabamento Max",
				'de-de': "Dyna-Brocken"
			},

			damage: 200,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	dexId: [874],

	thirdParty: {
		cardmarket: 433944,
		tcgplayer: 208425
	}
}

export default card
