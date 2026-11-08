import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [74],
	set: Set,

	name: {
		'fr-fr': "Racaillou",
		'en-us': "Geodude",
		'es-es': "Geodude",
		'it-it': "Geodude",
		'pt-br': "Geodude",
		'de-de': "Kleinstein"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'fr-fr': "Raidissement",
			'en-us': "Stiffen",
			'es-es': "Endurecimiento",
			'it-it': "Indurimento",
			'pt-br': "Fortificar",
			'de-de': "Verhärten"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'en-us': "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'fr-fr': "Coud'Phalange",
			'en-us': "Knuckle Punch",
			'es-es': "Puño con Nudillos",
			'it-it': "Noccapugno",
			'pt-br': "Soco com Punho",
			'de-de': "Knöchelhieb"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "It uses both hands to climb precipitous cliffs. People who see it in action have been known to take up bouldering.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733669,
				tcgplayer: 516569,
				cardtrader: 261119
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733669,
				tcgplayer: 516569,
				cardtrader: 261119
			}
		},
	],

	illustrator: "Uta",

	
}

export default card
