import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Onix",
		'fr-fr': "Onix",
		'es-es': "Onix",
		'it-it': "Onix",
		'pt-br': "Onix",
		'de-de': "Onix"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		95,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Bedrock Press",
				'fr-fr': "Charge Substrat",
				'es-es': "Presión Roca Firme",
				'it-it': "Rocciopressa",
				'pt-br': "Levantamento de Rocha",
				'de-de': "Grundgesteinsdruck"
			},
			effect: {
				'en-us': "During your opponent’s next turn, this Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, los ataques hacen 20 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 20 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, este Pokémon receberá 20 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Burrows at high speed in search of food. The tunnels it leaves are used as homes by Diglett.",
	},

	thirdParty: {
		cardmarket: 388322,
		tcgplayer: 195043
	}
}

export default card
