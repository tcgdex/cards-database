import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [205],
	set: Set,

	name: {
		'en-us': "Forretress",
		'fr-fr': "Foretress",
		'es-es': "Forretress",
		'it-it': "Forretress",
		'pt-br': "Forretress",
		'de-de': "Forstellka"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Pineco",
		'fr-fr': "Pomdepik"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Continuous Spin",
			'fr-fr': "Rotation Continue",
			'es-es': "Giro Continuo",
			'it-it': "Eternogiro",
			'pt-br': "Giro Contínuo",
			'de-de': "Dauerdrehung"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 50 damage for each heads.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 50 dégâts pour chaque côté face.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 50 puntos de daño por cada cara.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 50 danni ogni volta che esce testa.",
			'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 50 pontos de dano para cada cara.",
			'de-de': "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu."
		},

		damage: "50×"
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Rolling Shell",
			'fr-fr': "Coquille Roulante",
			'es-es': "Caparazón Rodante",
			'it-it': "Guscio Rotolante",
			'pt-br': "Concha Rolante",
			'de-de': "Rollende Schale"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 50 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 50 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 50 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 50 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 50 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 50 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	illustrator: "Lee HyunJung",

	description: {
		'en-us': "Its entire body is shielded by a steel-hard shell. What lurks inside this shell is a total mystery.",
	},

	thirdParty: {
        cardmarket: 702434,
        tcgplayer: 488027
    }
}

export default card