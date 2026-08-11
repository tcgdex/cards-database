import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [718],

	name: {
		'en-us': "Zygarde",
		'fr-fr': "Zygarde",
		'es-es': "Zygarde",
		'it-it': "Zygarde",
		'pt-br': "Zygarde",
		'de-de': "Zygarde"
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
				'en-us': "Beam",
				'fr-fr': "Rayon",
				'es-es': "Transmisión",
				'it-it': "Raggio",
				'pt-br': "Feixe",
				'de-de': "Strahl"
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
				'en-us': "Core Avenger",
				'fr-fr': "Cœur Justicier",
				'es-es': "Núcleo Vengador",
				'it-it': "Nucleovendetta",
				'pt-br': "Vingador do Núcleo",
				'de-de': "Kernrächer"
			},
			effect: {
				'en-us': "If you have more Prize cards remaining than your opponent, this attack does 80 more damage.",
				'fr-fr': "S'il vous reste plus de cartes Récompense qu'à votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Si te quedan más cartas de Premio que a tu rival, este ataque hace 80 puntos de daño más.",
				'it-it': "Se hai più carte Premio rimanenti del tuo avversario, questo attacco infligge 80 danni in più.",
				'pt-br': "Se você tiver mais cartas de Prêmio restantes do que seu oponente, este ataque causará 80 pontos de dano a mais.",
				'de-de': "Wenn du mehr verbleibende Preiskarten hast als dein Gegner, fügt diese Attacke 80 Schadenspunkte mehr zu."
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


	stage: "Basic",

	description: {
		'en-us': "Born when all of Zygarde's cells have been gathered together, it uses force to neutralize those who harm the ecosystem."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 511885,
				tcgplayer: 226532
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511885,
				tcgplayer: 226532
			}
		},
	],
}

export default card
