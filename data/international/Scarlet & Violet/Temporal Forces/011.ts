import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [388],
	set: Set,

	name: {
		'en-us': "Grotle",
		'fr-fr': "Boskara",
		'es-es': "Grotle",
		'it-it': "Grotle",
		'pt-br': "Grotle",
		'de-de': "Chelcarain"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Turtwig",
		'fr-fr': "Tortipouss",
		'es-es': "Turtwig",
		'it-it': "Turtwig",
		'pt-br': "Turtwig",
		'de-de': "Chelast"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Cut",
			'fr-fr': "Coupe",
			'es-es': "Corte",
			'it-it': "Taglio",
			'pt-br': "Cortar",
			'de-de': "Zerschneider"
		},

		damage: 20
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Ramming Shell",
			'fr-fr': "Impact Carapace",
			'es-es': "Embestida Caparazón",
			'it-it': "Guscio Paraurti",
			'pt-br': "Colisão de Carapaça",
			'de-de': "Rammende Schale"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 20 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 20 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 20 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "H",

	description: {
		'en-us': "It lives along water in forests. In the daytime, it leaves the forest to sunbathe its treed shell.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760641,
				tcgplayer: 542669
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760641,
				tcgplayer: 542669
			}
		},
	],

	illustrator: "Uninori",

}

export default card