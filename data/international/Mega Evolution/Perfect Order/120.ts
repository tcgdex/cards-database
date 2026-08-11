import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [718],

	name: {
		'en-us': "Mega Zygarde ex",
		'fr-fr': "Méga-Zygarde-ex",
		'es-es': "Mega-Zygarde ex",
		'es-mx': "Mega-Zygarde ex",
		'de-de': "Mega-Zygarde-ex",
		'it-it': "Mega Zygarde-ex",
		'pt-br': "Mega Zygarde ex"
	},

	suffix: "ex",
	illustrator: "kantaro",
	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 310,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			'en-us': "Gaia Wave",
			'fr-fr': "Onde de Gaïa",
			'es-es': "Onda Gaia",
			'es-mx': "Onda Gaia",
			'de-de': "Gaia-Welle",
			'it-it': "Onda Gaia",
			'pt-br': "Onda de Gaia"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'es-mx': "Durante el próximo turno de tu rival, este Pokémon recibe 30 puntos de daño menos de ataques (después de aplicar Debilidad y Resistencia).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência)."
		},

		damage: 200
	}, {
		cost: ["Fighting", "Fighting", "Fighting", "Fighting", "Fighting"],

		name: {
			'en-us': "Nullifying Zero",
			'fr-fr': "Zéro Annihilant",
			'es-es': "Cero Devastador",
			'es-mx': "Nulificación Cero",
			'de-de': "Tilgendes Nichts",
			'it-it': "Tabula Zero",
			'pt-br': "Zero Anulador"
		},

		effect: {
			'en-us': "For each of your opponent's Pokémon, flip a coin. If heads, this attack does 150 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Pour chacun des Pokémon de votre adversaire, lancez une pièce. Si c'est face, cette attaque inflige 150 dégâts à ce Pokémon-là. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Por cada uno de los Pokémon de tu rival, lanza 1 moneda. Si sale cara, este ataque hace 150 puntos de daño a ese Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Por cada uno de los Pokémon de tu rival, lanza 1 moneda. Si sale cara, este ataque hace 150 puntos de daño a ese Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'de-de': "Wirf für jedes Pokémon deines Gegners 1 Münze. Bei Kopf fügt diese Attacke jenem Pokémon 150 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Per ciascuno dei Pokémon del tuo avversario, lancia una moneta. Se esce testa, questo attacco infligge 150 danni a quel Pokémon. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Para cada um dos Pokémon do seu oponente, jogue uma moeda. Se sair cara, este ataque causará 150 pontos de dano àquele Pokémon. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		}
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 684338,
				cardmarket: 877537
			}
		}
	],

}

export default card
