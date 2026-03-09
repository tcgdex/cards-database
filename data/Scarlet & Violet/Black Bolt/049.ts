import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [534],
	set: Set,

	name: {
		en: "Conkeldurr",
		fr: "Bétochef",
		de: "Meistagrif",
		it: "Conkeldurr",
		pt: "Conkeldurr",
		es: "Conkeldurr",
		'es-mx': "Conkeldurr"
	},

	illustrator: "Shinya Mizuno",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	evolveFrom: {
		en: "Gurdurr",
		fr: "Ouvrifier",
		de: "Strepoli",
		it: "Gurdurr",
		pt: "Gurdurr",
		es: "Gurdurr",
		'es-mx': "Gurdurr"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Craftsmanship",
			fr: "Maître d'Œuvre",
			de: "Handwerkskunst",
			it: "Maestria",
			pt: "Manufatura",
			es: "Maestro de Obras",
			'es-mx': "Destreza Constructiva"
		},

		effect: {
			en: "This Pokémon gets +40 HP for each {F} Energy attached to it.",
			fr: "Ce Pokémon reçoit +40 PV pour chaque Énergie {F} qui lui est attachée.",
			de: "Dieses Pokémon erhält für jede an es angelegte {F}-Energie +40 KP.",
			it: "Questo Pokémon ha 40 PS in più per ogni Energia {F} a esso assegnata.",
			pt: "Este Pokémon recebe 40 PS a mais para cada Energia {F} ligada a ele.",
			es: "Este Pokémon obtiene 40 PS más por cada Energía {F} unida a él.",
			'es-mx': "Este Pokémon obtiene 40 PS más por cada Energía {F} unida a él."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Swing Around",
			fr: "Balançoire",
			de: "Gegenschwung",
			it: "Giravolta",
			pt: "Balanço",
			es: "Dar Vueltas",
			'es-mx': "Zarandeo"
		},

		effect: {
			en: "Flip 2 coins. This attack does 50 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts supplémentaires pour chaque côté face.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 50 Schadenspunkte mehr pro Kopf zu.",
			it: "Lancia due volte una moneta. Questo attacco infligge 50 danni in più ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 50 pontos de dano a mais para cada cara.",
			es: "Lanza 2 monedas. Este ataque hace 50 puntos de daño más por cada cara.",
			'es-mx': "Lanza 2 monedas. Este ataque hace 50 puntos de daño más por cada cara."
		},

		damage: "100+"
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836007
	}
}

export default card