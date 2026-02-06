import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [628],

	name: {
		en: "Larry's Braviary",
		fr: "Gueriaigle d'Okuba",
		es: "Braviary de Laureano",
		'es-mx': "Braviary de Laureano",
		de: "Aokis Washakwil",
		it: "Braviary di Ubaldo",
		pt: "Braviary do Lauro"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Clutch",
			fr: "Serre",
			es: "Embrague",
			'es-mx': "Enganchar",
			de: "Greifer",
			it: "Grinfie",
			pt: "Agarramento"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar."
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Brave Bird",
			fr: "Rapace",
			es: "Pájaro Osado",
			'es-mx': "Ave Brava",
			de: "Sturzflug",
			it: "Baldeali",
			pt: "Pássaro Bravo"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'es-mx': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675986,
		cardmarket: 869785
	}
}

export default card