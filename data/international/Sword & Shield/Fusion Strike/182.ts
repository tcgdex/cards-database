import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [227],
	set: Set,

	name: {
		'en-us': "Skarmory",
		'fr-fr': "Airmure",
		'es-es': "Skarmory",
		'it-it': "Skarmory",
		'pt-br': "Skarmory",
		'de-de': "Panzaeron"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Megumi Higuchi",

	description: {
		'en-us': "Its body is draped in steel armor. It looks heavy, but it can fly at speeds of up to 185 miles an hour!"
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Steel Wing",
			'fr-fr': "Aile d'Acier",
			'de-de': "Stahlflügel",
			'es-es': "Ala de Acero",
			'pt-br': "Asa de Aço",
			'it-it': "Alacciaio"
		},

		damage: 30,

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza."
		}
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Slicing Blade",
			'fr-fr': "Lame Tranchante",
			'de-de': "Schwertschneide",
			'es-es': "Cuchilla Cortante",
			'pt-br': "Lâmina Fatiante",
			'it-it': "Affettalama"
		},

		damage: 110
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582810,
				tcgplayer: 253329
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582810,
				tcgplayer: 253329
			}
		},
	],
}

export default card
