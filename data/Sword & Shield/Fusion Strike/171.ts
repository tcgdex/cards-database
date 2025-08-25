import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [571],
	set: Set,

	name: {
		en: "Zoroark",
		fr: "Zoroark",
		es: "Zoroark",
		it: "Zoroark",
		pt: "Zoroark",
		de: "Zoroark"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		en: "Zorua",
		fr: "Zorua",
		es: "Zorua",
		it: "Zorua",
		pt: "Zorua",
		de: "Zorua"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Kouki Saitou",

	description: {
		en: "If it thinks humans are going to discover its den, Zoroark shows them visions that make them wander around in the woods."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Double Claw",
			fr: "Double-Griffe",
			de: "Doppelklaue",
			es: "Doble Zarpa",
			pt: "Garra em Dobro",
			it: "Doppio-Artiglio"
		},

		damage: "40×",

		effect: {
			en: "Flip 2 coins. This attack does 40 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu.",
			es: "Lanza 2 monedas. Este ataque hace 40 puntos de daño por cada cara.",
			pt: "Jogue 2 moedas. Este ataque causa 40 pontos de dano para cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa."
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Night Daze",
			fr: "Explonuit",
			de: "Nachtflut",
			es: "Pulso Noche",
			pt: "Ofuscamento Noturno",
			it: "Urtoscuro"
		},

		damage: 100
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582799,
		tcgplayer: 253385
	}
}

export default card