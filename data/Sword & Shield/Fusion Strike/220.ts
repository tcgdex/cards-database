import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [822],
	set: Set,

	name: {
		en: "Corvisquire",
		fr: "Bleuseille",
		es: "Corvisquire",
		it: "Corvisquire",
		pt: "Corvisquire",
		de: "Kranoviz"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		en: "Rookidee",
		fr: "Minisange",
		es: "Rookidee",
		it: "Rookidee",
		pt: "Rookidee",
		de: "Meikro"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Naoyo Kimura",

	description: {
		en: "The lessons of many harsh battles have taught it how to accurately judge an opponent's strength."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Fury Attack",
			fr: "Furie",
			de: "Furienschlag",
			es: "Ataque Furia",
			pt: "Ataque de Fúria",
			it: "Furia"
		},

		damage: "30×",

		effect: {
			en: "Flip 3 coins. This attack does 30 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
			de: "Wirf 3 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu.",
			es: "Lanza 3 monedas. Este ataque hace 30 puntos de daño por cada cara.",
			pt: "Jogue 3 moedas. Este ataque causa 30 pontos de dano para cada cara.",
			it: "Lancia tre volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582956
	}
}

export default card