import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Zygarde",
		fr: "Zygarde",
		es: "Zygarde",
		it: "Zygarde",
		pt: "Zygarde",
		de: "Zygarde"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 150,

	types: [
		"Fighting",
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Beam",
				fr: "Rayon",
				es: "Transmisión",
				it: "Raggio",
				pt: "Feixe",
				de: "Strahl"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Core Avenger",
				fr: "Cœur Justicier",
				es: "Núcleo Vengador",
				it: "Nucleovendetta",
				pt: "Vingador do Núcleo",
				de: "Kernrächer"
			},
			effect: {
				en: "If you have more Prize cards remaining than your opponent, this attack does 80 more damage.",
				fr: "S'il vous reste plus de cartes Récompense qu'à votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Si te quedan más cartas de Premio que a tu rival, este ataque hace 80 puntos de daño más.",
				it: "Se hai più carte Premio rimanenti del tuo avversario, questo attacco infligge 80 danni in più.",
				pt: "Se você tiver mais cartas de Prêmio restantes do que seu oponente, este ataque causará 80 pontos de dano a mais.",
				de: "Wenn du mehr verbleibende Preiskarten hast als dein Gegner, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "Born when all of Zygarde's cells have been gathered together, it uses force to neutralize those who harm the ecosystem."
	}
}

export default card
