import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Scorbunny",
		fr: "Flambino",
		de: "Hopplo",
		it: "Scorbunny",
		es: "Scorbunny",
		pt: "Scorbunny",
		'es-mx': "Scorbunny"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",
	dexId: [813],

	attacks: [{
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
			en: "Flip 2 coins. This attack does 20 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu.",
			it: "Lancia due volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
			es: "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
			pt: "Jogue 2 moedas. Este ataque causa 20 pontos de dano para cada cara.",
			'es-mx': "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara."
		},

		damage: "20×"
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Water",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 886622,
				tcgplayer: 699877
			}
		},
	],
}

export default card
