import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Yanmega",
		fr: "Yanmega",
		es: "Yanmega",
		it: "Yanmega",
		pt: "Yanmega",
		de: "Yanmega"
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
		en: "Yanma",
		fr: "Yanma",
		es: "Yanma",
		it: "Yanma",
		pt: "Yanma",
		de: "Yanma"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Windfall",
				fr: "Rafale de Vent",
				es: "Maná",
				it: "Manna",
				pt: "Maná",
				de: "Warmer Regen"
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw 6 cards.",
				fr: "Mélangez votre main avec votre deck. Ensuite, piochez 6 cartes.",
				es: "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 6 cartas.",
				it: "Metti le carte che hai in mano nel tuo mazzo e rimischialo. Poi pesca sei carte.",
				pt: "Embaralhe sua mão em seu baralho. Em seguida, compre 6 cards.",
				de: "Mische deine Handkarten in dein Deck. Ziehe anschließend 6 Karten."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Surprise Strike",
				fr: "Frappe Surprise",
				es: "Golpe Sorpresa",
				it: "Colpo a Sorpresa",
				pt: "Golpe Surpresa",
				de: "Überraschungsschlag"
			},
			effect: {
				en: "If this Pokémon was on the Bench and became an Active Pokémon this turn, this attack does 50 more damage.",
				fr: "Si ce Pokémon était sur le Banc et est devenu un Pokémon Actif pendant ce tour, cette attaque inflige 50 dégâts supplémentaires.",
				es: "Si este Pokémon estaba en la Banca y se ha convertido en Pokémon Activo en este turno, este ataque hace 50 puntos de daño más.",
				it: "Se questo Pokémon era in panchina ed è diventato attivo in questo turno, questo attacco infligge 50 danni in più.",
				pt: "Se este Pokémon estava no Banco e tornou-se um Pokémon Ativo nesta rodada, esse ataque causará 50 de danos adicionais.",
				de: "Wenn sich dieses Pokémon auf der Bank befand und während dieses Zuges zum Aktiven Pokémon wurde, fügt dieser Angriff 50 weitere Schadenspunkte zu."
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

	retreat: 0
}

export default card
