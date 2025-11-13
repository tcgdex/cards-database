import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [256],
	set: Set,

	name: {
		en: "Combusken",
		fr: "Galifeu",
		de: "Jungglut",
		it: "Combusken",
		es: "Combusken",
		pt: "Combusken",
		'es-mx': "Combusken"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],
	evolveFrom: {
		en: "Torchic",
		fr: "Poussifeu",
		de: "Flemmli",
		it: "Torchic",
		es: "Torchic",
		pt: "Torchic",
		"es-mx": "Torchic"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Combustion",
			fr: "Fournaise",
			de: "Glühen",
			it: "Fuoco Continuo",
			es: "Combustión",
			pt: "Combustão",
			'es-mx': "Combustión"
		},

		damage: 20
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			en: "Double Kick",
			fr: "Double Pied",
			de: "Doppelkick",
			it: "Doppiocalcio",
			es: "Doble Patada",
			pt: "Chute Duplo",
			'es-mx': "Doble Patada"
		},

		effect: {
			en: "Flip 2 coins. This attack does 40 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu.",
			it: "Lancia due volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
			es: "Lanza 2 monedas. Este ataque hace 40 puntos de daño por cada cara.",
			pt: "Jogue 2 moedas. Este ataque causa 40 pontos de dano para cada cara.",
			'es-mx': "Lanza 2 monedas. Este ataque hace 40 puntos de daño por cada cara."
		},

		damage: "40×"
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
