import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [961],
	set: Set,

	name: {
		'en-us': "Wugtrio ex",
		'fr-fr': "Triopikeau-ex",
		'es-es': "Wugtrio ex",
		'it-it': "Wugtrio-ex",
		'pt-br': "Wugtrio ex",
		'de-de': "Schligdri-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 250,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Wiglett",
		'fr-fr': "Taupikeau",
		'es-es': "Wiglett",
		'it-it': "Wiglett",
		'pt-br': "Wiglett",
		'de-de': "Schligda"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Tricolor Pump",
			'fr-fr': "Pompe Tricolore",
			'es-es': "Bomba Tricolor",
			'it-it': "Pompa Tricolore",
			'pt-br': "Jato Tricolor",
			'de-de': "Dreifarbenpumpe"
		},

		effect: {
			'en-us': "Discard up to 3 Energy cards from your hand. This attack does 60 damage to 1 of your opponent's Pokémon for each Energy card you discarded in this way. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Défaussez jusqu'à 3 cartes Énergie de votre main. Cette attaque inflige 60 dégâts à l'un des Pokémon de votre adversaire pour chaque carte Énergie défaussée de cette façon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Descarta hasta 3 cartas de Energía de tu mano. Este ataque hace 60 puntos de daño a uno de los Pokémon de tu rival por cada carta de Energía que hayas descartado de esta manera. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Scarta fino a tre carte Energia dalla tua mano. Questo attacco infligge 60 danni a uno dei Pokémon del tuo avversario per ogni carta Energia che hai scartato in questo modo. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Descarte até 3 cartas de Energia da sua mão. Este ataque causa 60 pontos de dano a 1 dos Pokémon do seu oponente para cada carta de Energia descartada desta forma. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Lege bis zu 3 Energiekarten aus deiner Hand auf deinen Ablagestapel. Diese Attacke fügt 1 Pokémon deines Gegners für jede auf diese Weise abgelegte Energiekarte 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Water", "Water"],

		name: {
			'en-us': "Numbing Hold",
			'fr-fr': "Maintien Paralysant",
			'es-es': "Bloqueo Entumecedor",
			'it-it': "Stretta Immobilizzante",
			'pt-br': "Torpor Imobilizante",
			'de-de': "Betäubungsgriff"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 760690,
				tcgplayer: 542804
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

}

export default card