import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Hop's Corviknight",
		fr: "Corvaillus de Nabil",
		es: "Corviknight de Paul",
		de: "Hops Krarmor",
		it: "Corviknight di Hop",
		pt: "Corviknight do Lupo",
		'es-mx': "Corviknight de Paul"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Shoot Through",
			fr: "Passer à Travers",
			es: "Cruzar Rápido",
			de: "Durchschießen",
			it: "Sparainmezzo",
			pt: "Tiro Vazante",
			'es-mx': "Atravesar"
		},

		effect: {
			en: "This attack also does 50 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 50 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 50 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge anche 50 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 50 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'es-mx': "Este ataque también hace 50 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		},

		damage: 50
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Steel Wing",
			fr: "Ailes d'Acier",
			es: "Ala de Acero",
			de: "Stahlflügel",
			it: "Alacciaio",
			pt: "Asa de Aço",
			'es-mx': "Ala de Acero"
		},

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 60 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 60 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques hacen 60 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 60 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 60 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 60 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'es-mx': "Durante el próximo turno de tu rival, los ataques hacen 60 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia)."
		},

		damage: 150
	}],

	retreat: 2,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
