import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [632],
	set: Set,

	name: {
		'en-us': "Durant",
		'fr-fr': "Fermite",
		'es-es': "Durant",
		'it-it': "Durant",
		'pt-br': "Durant",
		'de-de': "Fermicula"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Swarming Rage",
			'fr-fr': "Armada Furieuse",
			'es-es': "Colonia Furiosa",
			'it-it': "Ira Brulicante",
			'pt-br': "Formigueiro Feroz",
			'de-de': "Wutschwarm"
		},

		effect: {
			'en-us': "This attack does 20 damage for each damage counter on all of your Durant.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts placé sur vos Fermite.",
			'es-es': "Este ataque hace 20 puntos de daño por cada contador de daño en cada uno de tus Durant.",
			'it-it': "Questo attacco infligge 20 danni per ogni segnalino danno presente sui tuoi Durant.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada contador de dano em todos os seus Durant.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf allen deinen Fermicula 20 Schadenspunkte zu."
		},

		damage: "20×"
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Hard Scissors",
			'fr-fr': "Cisailles",
			'es-es': "Tijeras Resistentes",
			'it-it': "Forbici Dure",
			'pt-br': "Tesouras Resistentes",
			'de-de': "Harte Scheren"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 20 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 20 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 20 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 80
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
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "With their large mandibles, these Pokémon can crunch their way through rock. They work together to protect their eggs from Sandaconda.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740667,
				tcgplayer: 523806,
				cardtrader: 265244
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740667,
				tcgplayer: 523806,
				cardtrader: 265244
			}
		},
	],

	illustrator: "Kyoko Umemoto",

	
}

export default card
