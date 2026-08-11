import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "To avoid being attacked, it does nothing but mimic a tree. It hates water and flees from rain.",
	},


	name: {
		'en-us': "Sudowoodo",
		'fr-fr': "Simularbre",
		'es-es': "Sudowoodo",
		'es-mx': "Sudowoodo",
		'de-de': "Mogelbaum",
		'it-it': "Sudowoodo",
		'pt-br': "Sudowoodo"
	},

	illustrator: "GOTO minori",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [185],
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Trials and Trip-ulations",
			'fr-fr': "Épreuves et Tribulations",
			'es-es': "Travesía y Tribulaciones",
			'es-mx': "Aventuras y Desventuras",
			'de-de': "Steiniger Weg",
			'it-it': "Avventure e Sventure",
			'pt-br': "Trancos e Travessias"
		},

		cost: ["Colorless"],

		effect: {
			'en-us': "Search your deck for up to 2 Transformation Tome cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Tome de Transformation, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Tomo de Transformación, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo hasta 2 cartas de Tomo de Transformación, muéstralas y ponlas en tu mano. Después, baraja tu mazo.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Transformationsfoliant-Karten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Tomo della Trasformazione, mostrale e aggiungile alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			'pt-br': "Procure por até 2 cartas Tomo da Transformação no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}, {
		name: {
			'en-us': "Rock Hurl",
			'fr-fr': "Lance-Pierre",
			'es-es': "Lanzamiento de Rocas",
			'es-mx': "Lanzamiento de Rocas",
			'de-de': "Steinschleuderer",
			'it-it': "Scaglia Pietre",
			'pt-br': "Lançamento de Pedras"
		},

		cost: ["Fighting"],
		damage: 30,

		effect: {
			'en-us': "This attack's damage isn't affected by Resistance.",
			'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
			'es-mx': "El daño de este ataque no se ve afectado por Resistencia.",
			'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert.",
			'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
			'pt-br': "O dano deste ataque não é afetado por Resistência."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886435,
				tcgplayer: 693550
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886435,
				tcgplayer: 693550
			}
		},
	],
}

export default card
