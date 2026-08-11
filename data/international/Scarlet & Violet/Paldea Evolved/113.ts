import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [297],
	set: Set,

	name: {
		'fr-fr': "Hariyama",
		'en-us': "Hariyama",
		'es-es': "Hariyama",
		'it-it': "Hariyama",
		'pt-br': "Hariyama",
		'de-de': "Hariyama"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	evolveFrom: {
		'fr-fr': "Makuhita",
		'en-us': "Makuhita",
		'es-es': "Makuhita",
		'it-it': "Makuhita",
		'pt-br': "Makuhita",
		'de-de': "Makuhita"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Entraînement à la Cogne",
			'en-us': "Arm Thrust Practice",
			'es-es': "Entrenamiento Empuje",
			'it-it': "Allenamento Sberletese",
			'pt-br': "Treinar Propulsão de Braço",
			'de-de': "Armwurf-Training"
		},

		effect: {
			'fr-fr': "Tous vos Pokémon subissent 10 dégâts de moins provenant des attaques des Pokémon de votre adversaire (après application de la Faiblesse et de la Résistance).",
			'en-us': "All of your Pokémon take 10 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance).",
			'es-es': "Los ataques de los Pokémon de tu rival hacen 10 puntos de daño menos a todos tus Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "I tuoi Pokémon subiscono 10 danni in meno dagli attacchi dei Pokémon del tuo avversario, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Todos os seus Pokémon recebem 10 pontos de dano a menos de ataques dos Pokémon do seu oponente (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Allen deinen Pokémon werden durch Attacken von Pokémon deines Gegners 10 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Baffe Accélérée",
			'en-us': "Rocket Slap",
			'es-es': "Bofetada Vertiginosa",
			'it-it': "Razzosberla",
			'pt-br': "Tapa Foguete",
			'de-de': "Raketenklatscher"
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715588,
				tcgplayer: 497528,
				cardtrader: 248759
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715588,
				tcgplayer: 497528,
				cardtrader: 248759
			}
		},
	],

	illustrator: "Hasuno",

	description: {
		'en-us': "It loves challenging others to tests of strength. It has the power to stop a train with a slap.",
	},
}

export default card
