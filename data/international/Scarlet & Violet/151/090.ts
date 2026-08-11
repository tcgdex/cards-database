import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [90],
	set: Set,

	name: {
		'fr-fr': "Kokiyas",
		'en-us': "Shellder",
		'es-es': "Shellder",
		'it-it': "Shellder",
		'pt-br': "Shellder",
		'de-de': "Muschas"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			'fr-fr': "Pression Coquille",
			'en-us': "Shell Press",
			'es-es': "Presión Caparazón",
			'it-it': "Gusciopressa",
			'pt-br': "Compressão de Concha",
			'de-de': "Schalendruck"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'en-us': "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "It is encased in a shell that is harder than diamond. Inside, however, it is surprisingly tender.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733685,
				tcgplayer: 516659,
				cardtrader: 261148
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733685,
				tcgplayer: 516659,
				cardtrader: 261148
			}
		},
	],

	illustrator: "Nelnal",

	
}

export default card
