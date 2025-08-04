import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [227],

	name: {
		en: "Skarmory",
		fr: "Airmure",
		es: "Skarmory",
		it: "Skarmory",
		pt: "Skarmory",
		de: "Panzaeron"
	},

	illustrator: "NC Empire",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Metal",
	],

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Metal Arms",
				fr: "Bras Métalliques",
				es: "Extremidades Metálicas",
				it: "Arti Metallici",
				pt: "Braços Metálicos",
				de: "Metallarme"
			},
			effect: {
				en: "If this Pokémon has a Pokémon Tool attached, this attack does 40 more damage.",
				fr: "Si une carte Outil Pokémon est attachée à ce Pokémon, cette attaque inflige 40 dégâts supplémentaires.",
				es: "Si este Pokémon tiene 1 Herramienta Pokémon unida a él, este ataque hace 40 puntos de daño más.",
				it: "Se questo Pokémon ha un Oggetto Pokémon assegnato, questo attacco infligge 40 danni in più.",
				pt: "Se este Pokémon tiver uma Ferramenta Pokémon ligada a ele, este ataque causará 40 pontos de dano a mais.",
				de: "Wenn an dieses Pokémon eine Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 40 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cutting Wind",
				fr: "Vent Glacial",
				es: "Viento Helado",
				it: "Vento Tagliente",
				pt: "Vento Dilacerante",
				de: "Schneidender Wind"
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
			value: "-30"
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
		en: "Its body is draped in steel armor. It looks heavy, but it can fly at speeds of up to 185 miles an hour!"
	},

	thirdParty: {
		cardmarket: 483479,
		tcgplayer: 219376
	}
}

export default card
