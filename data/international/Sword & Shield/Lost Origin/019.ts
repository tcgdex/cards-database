import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [825],
	set: Set,

	name: {
		'en-us': "Dottler",
		'fr-fr': "Coléodôme",
		'es-es': "Dottler",
		'it-it': "Dottler",
		'pt-br': "Dottler",
		'de-de': "Keradar"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Blipbug",
		'fr-fr': "Larvadar",
		'es-es': "Blipbug",
		'it-it': "Blipbug",
		'pt-br': "Blipbug",
		'de-de': "Sensect"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Barrier Attack",
			'fr-fr': "Attaque d'Obstacle",
			'es-es': "Ataque Barrera",
			'it-it': "Attacco Barriera",
			'pt-br': "Ataque Barreira",
			'de-de': "Angriffsbarriere"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674030,
				tcgplayer: 283887
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674030,
				tcgplayer: 283887
			}
		},
	],
}

export default card
