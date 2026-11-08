import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [122],
	set: Set,

	name: {
		'fr-fr': "M. Mime de Galar",
		'en-us': "Galarian Mr. Mime",
		'es-es': "Mr. Mime de Galar",
		'it-it': "Mr. Mime di Galar",
		'pt-br': "Mr. Mime de Galar",
		'de-de': "Galar-Pantimos"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	attacks: [{
		name: {
			'fr-fr': "Protection",
			'en-us': "Reflect",
			'es-es': "Reflejo",
			'it-it': "Riflesso",
			'pt-br': "Refletir",
			'de-de': "Reflektor"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'en-us': "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		cost: ["Water"]
	}, {
		name: {
			'fr-fr': "Verglas",
			'en-us': "Icy Snow",
			'es-es': "Nieve Helada",
			'it-it': "Geloneve",
			'pt-br': "Neve Congelada",
			'de-de': "Eisiger Schnee"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		'en-us': "Its talent is tap-dancing. It can also manipulate temperatures to create a floor of ice, which this Pokémon can kick up to use as a barrier."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539488,
				tcgplayer: 232369
			}
		},
	],
}

export default card
