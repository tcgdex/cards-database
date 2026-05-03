import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [718],

	name: {
		en: "Mega Zygarde ex",
		fr: "Méga-Zygarde-ex",
		es: "Mega-Zygarde ex",
		'es-mx': "Mega-Zygarde ex",
		de: "Mega-Zygarde-ex",
		it: "Mega Zygarde-ex",
		pt: "Mega Zygarde ex"
	},

	suffix: "ex",
	illustrator: "takuyoa",
	rarity: "Mega Hyper Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			en: "Gaia Wave",
			fr: "Onde de Gaïa",
			es: "Onda Gaia",
			'es-mx': "Onda Gaia",
			de: "Gaia-Welle",
			it: "Onda Gaia",
			pt: "Onda de Gaia"
		},

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'es-mx': "Durante el próximo turno de tu rival, este Pokémon recibe 30 puntos de daño menos de ataques (después de aplicar Debilidad y Resistencia).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência)."
		},

		damage: 200
	}, {
		cost: ["Fighting", "Fighting", "Fighting", "Fighting", "Fighting"],

		name: {
			en: "Nullifying Zero",
			fr: "Zéro Annihilant",
			es: "Cero Devastador",
			'es-mx': "Nulificación Cero",
			de: "Tilgendes Nichts",
			it: "Tabula Zero",
			pt: "Zero Anulador"
		},

		effect: {
			en: "For each of your opponent's Pokémon, flip a coin. If heads, this attack does 150 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Pour chacun des Pokémon de votre adversaire, lancez une pièce. Si c'est face, cette attaque inflige 150 dégâts à ce Pokémon-là. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Por cada uno de los Pokémon de tu rival, lanza 1 moneda. Si sale cara, este ataque hace 150 puntos de daño a ese Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Por cada uno de los Pokémon de tu rival, lanza 1 moneda. Si sale cara, este ataque hace 150 puntos de daño a ese Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			de: "Wirf für jedes Pokémon deines Gegners 1 Münze. Bei Kopf fügt diese Attacke jenem Pokémon 150 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Per ciascuno dei Pokémon del tuo avversario, lancia una moneta. Se esce testa, questo attacco infligge 150 danni a quel Pokémon. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Para cada um dos Pokémon do seu oponente, jogue uma moeda. Se sair cara, este ataque causará 150 pontos de dano àquele Pokémon. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		}
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo"
		}
	],

	thirdParty: {
		tcgplayer: 684339,
		cardmarket: 877541
	}
}

export default card
