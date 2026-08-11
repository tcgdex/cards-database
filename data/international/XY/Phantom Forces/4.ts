import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Yanmega",
		'fr-fr': "Yanmega",
		'es-es': "Yanmega",
		'it-it': "Yanmega",
		'pt-br': "Yanmega",
		'de-de': "Yanmega"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		469,
	],

	hp: 110,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Yanma",
		'fr-fr': "Yanma",
		'es-es': "Yanma",
		'it-it': "Yanma",
		'pt-br': "Yanma",
		'de-de': "Yanma"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Windfall",
				'fr-fr': "Rafale de Vent",
				'es-es': "Maná",
				'it-it': "Manna",
				'pt-br': "Maná",
				'de-de': "Warmer Regen"
			},
			effect: {
				'en-us': "Shuffle your hand into your deck. Then, draw 6 cards.",
				'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez 6 cartes.",
				'es-es': "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 6 cartas.",
				'it-it': "Metti le carte che hai in mano nel tuo mazzo e rimischialo. Poi pesca sei carte.",
				'pt-br': "Embaralhe sua mão em seu baralho. Em seguida, compre 6 cards.",
				'de-de': "Mische deine Handkarten in dein Deck. Ziehe anschließend 6 Karten."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Surprise Strike",
				'fr-fr': "Frappe Surprise",
				'es-es': "Golpe Sorpresa",
				'it-it': "Colpo a Sorpresa",
				'pt-br': "Golpe Surpresa",
				'de-de': "Überraschungsschlag"
			},
			effect: {
				'en-us': "If this Pokémon was on the Bench and became an Active Pokémon this turn, this attack does 50 more damage.",
				'fr-fr': "Si ce Pokémon était sur le Banc et est devenu un Pokémon Actif pendant ce tour, cette attaque inflige 50 dégâts supplémentaires.",
				'es-es': "Si este Pokémon estaba en la Banca y se ha convertido en Pokémon Activo en este turno, este ataque hace 50 puntos de daño más.",
				'it-it': "Se questo Pokémon era in panchina ed è diventato attivo in questo turno, questo attacco infligge 50 danni in più.",
				'pt-br': "Se este Pokémon estava no Banco e tornou-se um Pokémon Ativo nesta rodada, esse ataque causará 50 de danos adicionais.",
				'de-de': "Wenn sich dieses Pokémon auf der Bank befand und während dieses Zuges zum Aktiven Pokémon wurde, fügt dieser Angriff 50 weitere Schadenspunkte zu."
			},
			damage: "50+",

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

	retreat: 0,

	description: {
		'en-us': "It prefers to battle by biting apart foes' heads instantly while flying by at high speed.",
	},

	thirdParty: {
		cardmarket: 281805,
		tcgplayer: 94137
	}
}

export default card
