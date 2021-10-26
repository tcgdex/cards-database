import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Stonjourner VMAX",
		fr: "Dolman VMAX",
		es: "Stonjourner VMAX",
		it: "Stonjourner VMAX",
		pt: "Stonjourner VMAX",
		de: "Humanolith VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,
	hp: 330,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Stonjourner V",
		fr: "Dolman-V",
		es: "Stonjourner V",
		it: "Stonjourner V",
		pt: "Stonjourner V",
		de: "Humanolith V"
	},

	stage: "VMAX",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Stone Gift",
				fr: "Cadeau Roc",
				es: "Regalo Roca",
				it: "Donopietra",
				pt: "Presente Pedregoso",
				de: "Steingeschenk"
			},
			effect: {
				en: "Attach a Fighting Energy card from your hand to 1 of your Pokémon. If you do, heal 120 damage from that Pokémon.",
				fr: "Attachez une carte Énergie Fighting de votre main à l'un de vos Pokémon. Dans ce cas, soignez 120 dégâts de ce Pokémon-là.",
				es: "Une 1 carta de Energía Fighting de tu mano a 1 de tus Pokémon. Si lo haces, cura 120 puntos de daño a ese Pokémon.",
				it: "Assegna a uno dei tuoi Pokémon una carta Energia Fighting dalla tua mano. Se lo fai, cura quel Pokémon da 120 danni.",
				pt: "Ligue 1 carta de Energia Fighting da sua mão a 1 dos seus Pokémon. Se fizer isto, cure 120 pontos de dano daquele Pokémon.",
				de: "Lege 1 Fighting-Energiekarte aus deiner Hand an 1 deiner Pokémon an. Wenn du das machst, heile 120 Schadenspunkte bei jenem Pokémon."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Max Rockfall",
				fr: "Lithomax",
				es: "Maxilito",
				it: "Dynamacigno",
				pt: "Desabamento Max",
				de: "Dyna-Brocken"
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

	dexId: [874]
}

export default card
