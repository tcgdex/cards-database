import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [894],
	set: Set,

	name: {
		'fr-fr': "Regieleki V",
		'de-de': "Regieleki V",
		'es-es': "Regieleki V",
		'pt-br': "Regieleki V",
		'it-it': "Regieleki V",
		'en-us': "Regieleki V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'fr-fr': "Éclair Échange",
			'de-de': "Tauschblitz",
			'es-es': "Rayo Cambiante",
			'pt-br': "Raio de Substituição",
			'it-it': "Fulmine di Scambio",
			'en-us': "Switching Bolt"
		},

		effect: {
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'it-it': "Scambia questo Pokémon con uno della tua panchina.",
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon."
		},

		damage: 30
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Mur Lumineux",
			'de-de': "Elektrowand",
			'es-es': "Muro Relámpago",
			'pt-br': "Muralha Relampejante",
			'it-it': "Elettromuro",
			'en-us': "Lightning Wall"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 100 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 100 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 100 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 100 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 100 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'en-us': "During your opponent's next turn, this Pokémon takes 100 less damage from attacks (after applying Weakness and Resistance)."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 682984
	}
}

export default card
