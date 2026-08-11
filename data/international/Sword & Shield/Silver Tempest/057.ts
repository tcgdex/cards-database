import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [894],
	set: Set,

	name: {
		'en-us': "Regieleki V",
		'fr-fr': "Regieleki V",
		'es-es': "Regieleki V",
		'it-it': "Regieleki V",
		'pt-br': "Regieleki V",
		'de-de': "Regieleki V"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Switching Bolt",
			'fr-fr': "Éclair Échange",
			'es-es': "Rayo Cambiante",
			'it-it': "Fulmine di Scambio",
			'pt-br': "Raio de Substituição",
			'de-de': "Tauschblitz"
		},

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			'it-it': "Scambia questo Pokémon con uno della tua panchina.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: 30
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Lightning Wall",
			'fr-fr': "Mur Lumineux",
			'es-es': "Muro Relámpago",
			'it-it': "Elettromuro",
			'pt-br': "Muralha Relampejante",
			'de-de': "Elektrowand"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 100 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 100 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 100 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 100 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 100 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 100 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
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


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682104,
				tcgplayer: 451713
			}
		},
	],
}

export default card
