import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [350],

	name: {
		'en-us': "Milotic",
		'fr-fr': "Milobellus",
		'es-es': "Milotic",
		'it-it': "Milotic",
		'pt-br': "Milotic",
		'de-de': "Milotic"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Feebas",
		'fr-fr': "Barpau",
		'es-es': "Feebas",
		'it-it': "Feebas",
		'pt-br': "Feebas",
		'de-de': "Barschwa"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Bright Heal",
				'fr-fr': "Soin Lumineux",
				'es-es': "Cura Brillante",
				'it-it': "Lumicura",
				'pt-br': "Cura Brilhante",
				'de-de': "Helle Heilung"
			},
			effect: {
				'en-us': "Once during your turn, you may heal 20 damage from each of your Pokémon.",
				'fr-fr': "Une fois pendant votre tour, vous pouvez soigner 20 dégâts de chacun de vos Pokémon.",
				'es-es': "Una vez durante tu turno, puedes curar 20 puntos de daño a cada uno de tus Pokémon.",
				'it-it': "Una sola volta durante il tuo turno, puoi curare ciascuno dei tuoi Pokémon da 20 danni.",
				'pt-br': "Uma vez durante o seu turno, você poderá curar 20 pontos de dano de cada um dos seus Pokémon.",
				'de-de': "Einmal während deines Zuges kannst du 20 Schadenspunkte bei jedem deiner Pokémon heilen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Surf",
				'fr-fr': "Surf",
				'es-es': "Surf",
				'it-it': "Surf",
				'pt-br': "Surfar",
				'de-de': "Surfer"
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

	retreat: 2,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "Milotic has provided inspiration to many artists. It has even been referred to as the most beautiful Pokémon of all."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 483069,
				tcgplayer: 219303
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483069,
				tcgplayer: 219303
			}
		},
	],
}

export default card
