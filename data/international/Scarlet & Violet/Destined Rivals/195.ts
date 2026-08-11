import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [366],
	set: Set,

	name: {
		'en-us': "Clamperl",
		'fr-fr': "Coquiperl",
		'de-de': "Perlu",
		'it-it': "Clamperl",
		'es-es': "Clamperl",
		'pt-br': "Clamperl",
		'es-mx': "Clamperl"
	},


	illustrator: "Mori Yuu",

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Shell Press",
			'fr-fr': "Pression Coquille",
			'de-de': "Schalendruck",
			'it-it': "Gusciopressa",
			'es-es': "Presión Caparazón",
			'pt-br': "Compressão de Concha",
			'es-mx': "Prensa Acorazada"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 10 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 10 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 10 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 10 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 10 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 10 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'es-mx': "Durante el próximo turno de tu rival, los ataques hacen 10 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia)."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 826069,
				tcgplayer: 632995
			}
		},
	],
}

export default card
