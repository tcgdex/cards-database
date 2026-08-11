import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [523],
	set: Set,

	name: {
		'en-us': "Zebstrika",
		'fr-fr': "Zéblitz",
		'es-es': "Zebstrika",
		'it-it': "Zebstrika",
		'pt-br': "Zebstrika",
		'de-de': "Zebritz"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Blitzle",
		'fr-fr': "Zébibron",
		'es-es': "Blitzle",
		'it-it': "Blitzle",
		'pt-br': "Blitzle",
		'de-de': "Elezeba"
	},

	attacks: [{
		name: {
			'en-us': "Coordinated Bolt",
			'fr-fr': "Éclair Coordonné",
			'es-es': "Rayo Coordinado",
			'it-it': "Lampo Coordinato",
			'pt-br': "Raio Coordenado",
			'de-de': "Koordinierter Blitz"
		},

		effect: {
			'en-us': "If 1 of your other Rapid Strike Pokémon used an attack during your last turn, this attack does 90 more damage.",
			'fr-fr': "Si l'un de vos autres Pokémon Mille Poings a utilisé une attaque pendant votre dernier tour, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si 1 de tus otros Pokémon Golpe Fluido usó un ataque durante tu último turno, este ataque hace 90 puntos de daño más.",
			'it-it': "Se uno dei tuoi altri Pokémon Colpo Rapido ha usato un attacco durante il tuo ultimo turno, questo attacco infligge 90 danni in più.",
			'pt-br': "Se 1 dos seus outros Pokémon Golpe Fluido usou um ataque durante o seu último turno, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn 1 deiner anderen Fließender-Angriff-Pokémon während deines letzten Zuges eine Attacke eingesetzt hat, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "30+",
		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Spark Rush",
			'fr-fr': "Charge Étincelle",
			'es-es': "Embestida Chispa",
			'it-it': "Sfrecciascintilla",
			'pt-br': "Fúria Faiscante",
			'de-de': "Funkensturm"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 90 damage for each heads.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 90 dégâts pour chaque côté face.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 90 puntos de daño por cada cara.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 90 danni ogni volta che esce testa.",
			'pt-br': "Jogue 1 moeda até sair coroa. Este ataque causa 90 pontos de dano para cada cara.",
			'de-de': "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 90 Schadenspunkte pro Kopf zu."
		},

		damage: "90×",
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "They have lightning-like movements. When Zebstrika run at full speed, the sound of thunder reverberates."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567131,
				tcgplayer: 241708
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567131,
				tcgplayer: 241708
			}
		},
	],
}

export default card
