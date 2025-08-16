import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [320],

	name: {
		en: "Wailmer",
		fr: "Wailmer",
		es: "Wailmer",
		it: "Wailmer",
		pt: "Wailmer",
		de: "Wailmer"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 100,

	types: [
		"Water",
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Pump",
				fr: "Hydrocanon",
				es: "Hidrobomba",
				it: "Idropompa",
				pt: "Jato d'Água",
				de: "Hydropumpe"
			},
			effect: {
				en: "This attack does 20 more damage for each Water Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
				es: "Este ataque hace 20 puntos de daño más por cada Energía Water unida a este Pokémon.",
				it: "Questo attacco infligge 20 danni in più per ogni Energia Water assegnata a questo Pokémon.",
				pt: "Este ataque causa 20 pontos de dano a mais para cada Energia Water ligada a este Pokémon.",
				de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Water-Energie 20 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It shows off by spraying jets of seawater from the nostrils above its eyes. It eats a solid ton of Wishiwashi every day."
	},

	thirdParty: {
		cardmarket: 511575,
		tcgplayer: 226409
	}
}

export default card
