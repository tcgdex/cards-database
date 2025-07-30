import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [427],
	set: Set,

	name: {
		en: "Buneary",
		fr: "Laporeille",
		es: "Buneary",
		it: "Buneary",
		pt: "Buneary",
		de: "Haspiror"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Yuu Nishida",

	description: {
		en: "The reason it keeps one ear rolled up is so it can launch a swift counterattack if it's attacked by an enemy."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Double Kick",
			fr: "Double Pied",
			de: "Doppelkick",
			es: "Doble Patada",
			pt: "Chute Duplo",
			it: "Doppiocalcio"
		},

		damage: "20×",

		effect: {
			en: "Flip 2 coins. This attack does 20 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu.",
			es: "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
			pt: "Jogue 2 moedas. Este ataque causa 20 pontos de dano para cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582948
	}
}

export default card