import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886435,
				tcgplayer: 693550
			}
		},
	],

	name: {
		en: "Sudowoodo",
		fr: "Simularbre",
		es: "Sudowoodo",
		'es-mx': "Sudowoodo",
		de: "Mogelbaum",
		it: "Sudowoodo",
		pt: "Sudowoodo"
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
			en: "Trials and Trip-ulations",
			fr: "Épreuves et Tribulations",
			es: "Travesía y Tribulaciones",
			'es-mx': "Aventuras y Desventuras",
			de: "Steiniger Weg",
			it: "Avventure e Sventure",
			pt: "Trancos e Travessias"
		},

		cost: ["Colorless"],

		effect: {
			en: "Search your deck for up to 2 Transformation Tome cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Tome de Transformation, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 cartas de Tomo de Transformación, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo hasta 2 cartas de Tomo de Transformación, muéstralas y ponlas en tu mano. Después, baraja tu mazo.",
			de: "Durchsuche dein Deck nach bis zu 2 Transformationsfoliant-Karten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo fino a due carte Tomo della Trasformazione, mostrale e aggiungile alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			pt: "Procure por até 2 cartas Tomo da Transformação no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}, {
		name: {
			en: "Rock Hurl",
			fr: "Lance-Pierre",
			es: "Lanzamiento de Rocas",
			'es-mx': "Lanzamiento de Rocas",
			de: "Steinschleuderer",
			it: "Scaglia Pietre",
			pt: "Lançamento de Pedras"
		},

		cost: ["Fighting"],
		damage: 30,

		effect: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			es: "El daño de este ataque no se ve afectado por Resistencia.",
			'es-mx': "El daño de este ataque no se ve afectado por Resistencia.",
			de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert.",
			it: "I danni di questo attacco non sono influenzati dalla resistenza.",
			pt: "O dano deste ataque não é afetado por Resistência."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
}

export default card