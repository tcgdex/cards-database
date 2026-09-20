import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "Living with a savage, seafaring people has toughened this Pokémon's body so much that parts of it have turned to iron."
	},

	name: {
		en: "Galarian Meowth",
		fr: "Miaouss de Galar",
		de: "Galar-Mauzi",
		es: "Meowth de Galar",
		it: "Meowth di Galar",
		'es-mx': "Meowth de Galar"
	},

	illustrator: "Mékayu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [52],
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Pay Day",
			fr: "Jackpot",
			de: "Zahltag",
			es: "Día de Pago",
			it: "Giornopaga",
			'es-mx': "Día de Pago"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			de: "Ziehe 1 Karte.",
			es: "Roba 1 carta.",
			it: "Pesca una carta.",
			'es-mx': "Roba 1 carta."
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Treasure Rush",
			fr: "Ruée au Trésor",
			de: "Schatzhatz",
			es: "Embestida Tesoro",
			it: "Sfrecciatesoro",
			'es-mx': "Embestida del Tesoro"
		},

		effect: {
			en: "This attack does 10 damage for each card in your hand.",
			fr: "Cette attaque inflige 10 dégâts pour chaque carte dans votre main.",
			de: "Diese Attacke fügt für jede Karte auf deiner Hand 10 Schadenspunkte zu.",
			es: "Este ataque hace 10 puntos de daño por cada carta en tu mano.",
			it: "Questo attacco infligge 10 danni per ogni carta che hai in mano.",
			'es-mx': "Este ataque hace 10 puntos de daño por cada carta en tu mano."
		},

		damage: "10×",
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907708,
				tcgplayer: 716494
			}
		}
	],
}

export default card