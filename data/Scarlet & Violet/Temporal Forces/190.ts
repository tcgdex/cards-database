import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Wugtrio ex",
		fr: "Triopikeau-ex",
		es: "Wugtrio ex",
		it: "Wugtrio-ex",
		pt: "Wugtrio ex",
		de: "Schligdri-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 250,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Tricolor Pump",
			fr: "Pompe Tricolore",
			es: "Bomba Tricolor",
			it: "Pompa Tricolore",
			pt: "Jato Tricolor",
			de: "Dreifarbenpumpe"
		},

		effect: {
			en: "Discard up to 3 Energy cards from your hand. This attack does 60 damage to 1 of your opponent's Pokémon for each Energy card you discarded in this way. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez jusqu'à 3 cartes Énergie de votre main. Cette attaque inflige 60 dégâts à l'un des Pokémon de votre adversaire pour chaque carte Énergie défaussée de cette façon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Descarta hasta 3 cartas de Energía de tu mano. Este ataque hace 60 puntos de daño a uno de los Pokémon de tu rival por cada carta de Energía que hayas descartado de esta manera. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Scarta fino a tre carte Energia dalla tua mano. Questo attacco infligge 60 danni a uno dei Pokémon del tuo avversario per ogni carta Energia che hai scartato in questo modo. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Descarte até 3 cartas de Energia da sua mão. Este ataque causa 60 pontos de dano a 1 dos Pokémon do seu oponente para cada carta de Energia descartada desta forma. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Lege bis zu 3 Energiekarten aus deiner Hand auf deinen Ablagestapel. Diese Attacke fügt 1 Pokémon deines Gegners für jede auf diese Weise abgelegte Energiekarte 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Water", "Water"],

		name: {
			en: "Numbing Hold",
			fr: "Maintien Paralysant",
			es: "Bloqueo Entumecedor",
			it: "Stretta Immobilizzante",
			pt: "Torpor Imobilizante",
			de: "Betäubungsgriff"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card