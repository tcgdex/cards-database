import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	dexId: [319],

	name: {
		'en-us': "Sharpedo",
		'fr-fr': "Sharpedo",
		'es-es': "Sharpedo",
		'it-it': "Sharpedo",
		'pt-br': "Sharpedo",
		'de-de': "Tohaido"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Carvanha",
		'fr-fr': "Carvanha"
	},

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Aqua Jet",
				'fr-fr': "Aqua-Jet",
				'es-es': "Acua Jet",
				'it-it': "Acquagetto",
				'pt-br': "Aqua Jato",
				'de-de': "Wasserdüse"
			},
			effect: {
				'en-us': "This attack also does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige aussi 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque también hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge anche 20 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
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

	stage: "Stage1",

	description: {
		'en-us': "It drinks in seawater and jets it from its rear to propel itself. It's very sensitive to the scent of blood."
	},

	thirdParty: {
		cardmarket: 499915,
		tcgplayer: 223007
	}
}

export default card
