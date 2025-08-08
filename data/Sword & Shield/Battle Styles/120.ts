import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [876],
	set: Set,

	name: {
		en: "Indeedee",
		fr: "Wimessir",
		es: "Indeedee",
		it: "Indeedee",
		pt: "Indeedee",
		de: "Servol"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	attacks: [{
		name: {
			en: "Collect",
			fr: "Collecte",
			es: "Coleccionar",
			it: "Tassa",
			pt: "Coleta",
			de: "Sammeln"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			es: "Roba 2 cartas.",
			it: "Pesca due carte.",
			pt: "Compre 2 cartas.",
			de: "Ziehe 2 Karten."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Hand Kinesis",
			fr: "Télékinésie en Main",
			es: "Manoquinesis",
			it: "Manocinèsi",
			pt: "Cinese de Mão",
			de: "Handkinese"
		},

		effect: {
			en: "This attack does 10 damage for each card in your hand.",
			fr: "Cette attaque inflige 10 dégâts pour chaque carte dans votre main.",
			es: "Este ataque hace 10 puntos de daño por cada carta en tu mano.",
			it: "Questo attacco infligge 10 danni per ogni carta nella tua mano.",
			pt: "Este ataque causa 10 pontos de dano para cada carta na sua mão.",
			de: "Diese Attacke fügt für jede Karte auf deiner Hand 10 Schadenspunkte zu."
		},

		damage: "10×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "Through its horns, it can pick up on the emotions of creatures around it. Positive emotions are the source of its strength."
	}
}

export default card