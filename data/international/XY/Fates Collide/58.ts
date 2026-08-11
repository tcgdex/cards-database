import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Mandibuzz",
		'fr-fr': "Vaututrice",
		'es-es': "Mandibuzz",
		'it-it': "Mandibuzz",
		'pt-br': "Mandibuzz",
		'de-de': "Grypheldis"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		630,
	],

	hp: 110,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Vullaby",
		'fr-fr': "Vostourno",
		'es-es': "Vullaby",
		'it-it': "Vullaby",
		'pt-br': "Vullaby",
		'de-de': "Skallyk"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bone Drop",
				'fr-fr': "Chute Osseuse",
				'es-es': "Caída Ósea",
				'it-it': "Sganciaosso",
				'pt-br': "Queda Óssea",
				'de-de': "Knochenfall"
			},
			effect: {
				'en-us': "This attack does 60 damage to 1 of your opponent's Pokémon that has an Ability. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 60 dégâts à l'un des Pokémon de votre adversaire ayant un talent. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 60 puntos de daño a 1 de los Pokémon de tu rival que tenga una habilidad. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 60 danni a uno dei Pokémon del tuo avversario che abbia un'abilità. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 60 de danos a 1 dos Pokémon do seu oponente que possui uma Habilidade. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt 1 Pokémon deines Gegners, das eine Fähigkeit hat, 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cutting Wind",
				'fr-fr': "Vent Glacial",
				'es-es': "Viento Helado",
				'it-it': "Vento Tagliente",
				'pt-br': "Vento Dilacerante",
				'de-de': "Schneidender Wind"
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
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Watching from the sky, they swoop to strike weakened Pokémon on the ground. They decorate themselves with bones.",
	},

	thirdParty: {
		cardmarket: 289879,
		tcgplayer: 117815
	}
}

export default card
