import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Vikavolt",
		fr: "Lucanon",
		es: "Vikavolt",
		'es-mx': "Vikavolt",
		de: "Donarion",
		it: "Vikavolt",
		pt: "Vikavolt"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [738],
	hp: 160,
	types: ["Lightning"],

	evolveFrom: {
		en: "Charjabug"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Quick Dive",
			fr: "Plongeon Rapide",
			es: "Picado Raudo",
			'es-mx': "Descenso Rápido",
			de: "Schnelltaucher",
			it: "Immersione Veloce",
			pt: "Mergulho Acelerado"
		},

		cost: ["Lightning"],

		effect: {
			en: "This attack does 50 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 50 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 50 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge 50 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		}
	}, {
		name: {
			en: "Giga Railgun",
			fr: "Giga Canon",
			es: "Gigacañón de Riel",
			'es-mx': "Gigacañón Eléctrico",
			de: "Gigaschienenkanone",
			it: "Cannone a Impulsi Gigante",
			pt: "Gigacanhão Elétrico"
		},

		cost: ["Lightning", "Lightning"],

		damage: 260,

		effect: {
			en: "If this Pokémon has no Voltaic {L} Energy attached, this attack does nothing.",
			fr: "Si aucune Énergie {L} Voltaïque n'est attachée à ce Pokémon, cette attaque ne fait rien.",
			es: "Si este Pokémon no tiene ninguna Energía {L} Voltaica unida, este ataque no hace nada.",
			'es-mx': "Si este Pokémon no tiene ninguna Energía {L} Voltaica unida, este ataque no hace nada.",
			de: "Wenn an dieses Pokémon keine Voltaische {L}-Energie angelegt ist, hat diese Attacke keine Auswirkungen.",
			it: "Se questo Pokémon non ha alcuna Energia {L} Voltaica assegnata, questo attacco non ha effetto.",
			pt: "Se este Pokémon não tiver nenhuma Energia {L} Voltaica ligada a ele, este ataque não fará nada."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895814,
				tcgplayer: 704783
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895814,
				tcgplayer: 704783
			}
		},
	],
}

export default card
