import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		'en-us': "Drednaw V",
		'fr-fr': "Torgamord V",
		'es-es': "Drednaw V",
		'it-it': "Drednaw V",
		'pt-br': "Drednaw V",
		'de-de': "Kamalm V"
	},

	illustrator: "aky CG Works",
	rarity: "Holo Rare V",
	category: "Pokemon",
	dexId: [834],
	set: Set,
	hp: 210,

	types: [
		"Water",
	],

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Solid Shell",
				'fr-fr': "Coquille Dure",
				'es-es': "Caparazón Sólido",
				'it-it': "Guscio Solido",
				'pt-br': "Carapaça Sólida",
				'de-de': "Solider Panzer"
			},
			effect: {
				'en-us': "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				'it-it': "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
				'de-de': "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Powerful Bite",
				'fr-fr': "Morsure Puissante",
				'es-es': "Mordisco Potente",
				'it-it': "Morso Potente",
				'pt-br': "Mordida Poderosa",
				'de-de': "Starker Biss"
			},
			effect: {
				'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
				'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
				'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",

	thirdParty: {
		cardmarket: 499925,
		tcgplayer: 223009
	}
}

export default card
