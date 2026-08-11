import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [91],
	set: Set,

	name: {
		'fr-fr': "Crustabri",
		'en-us': "Cloyster",
		'es-es': "Cloyster",
		'it-it': "Cloyster",
		'pt-br': "Cloyster",
		'de-de': "Austos"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	evolveFrom: {
		'fr-fr': "Kokiyas",
		'en-us': "Shellder",
		'es-es': "Shellder",
		'it-it': "Shellder",
		'pt-br': "Shellder",
		'de-de': "Muschas"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			'fr-fr': "Recharge Protectrice",
			'en-us': "Protect Charge",
			'es-es': "Carga Protectora",
			'it-it': "Carica Protettiva",
			'pt-br': "Carga Protetora",
			'de-de': "Schützender Sturmangriff"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 80 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'en-us': "During your opponent's next turn, this Pokémon takes 80 less damage from attacks (after applying Weakness and Resistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 80 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 80 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 80 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 80 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "Cloyster that live in seas with harsh tidal currents grow large, sharp spikes on their shells.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733686,
				tcgplayer: 516660,
				cardtrader: 261163
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733686,
				tcgplayer: 516660,
				cardtrader: 261163
			}
		},
	],

	illustrator: "Nelnal",

	
}

export default card
