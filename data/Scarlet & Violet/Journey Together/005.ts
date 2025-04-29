import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Parasect",
		fr: "Parasect",
		es: "Parasect",
		de: "Parasek",
		it: "Parasect",
		pt: "Parasect",
		'es-mx': "Parasect"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Spore",
			fr: "Spore",
			es: "Espora",
			de: "Pilzspore",
			it: "Spora",
			pt: "Esporos",
			'es-mx': "Esporas"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Dormido."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Scissor Swing",
			fr: "Frappe Cisaille",
			es: "Golpe Tijera",
			de: "Scherenschwung",
			it: "Colpoforbice",
			pt: "Tesourar",
			'es-mx': "Tijerazo"
		},

		effect: {
			en: "Flip 2 coins. This attack does 30 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 30 puntos de daño más por cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte mehr pro Kopf zu.",
			it: "Lancia due volte una moneta. Questo attacco infligge 30 danni in più ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 30 pontos de dano a mais para cada cara.",
			'es-mx': "Lanza 2 monedas. Este ataque hace 30 puntos de daño más por cada cara."
		},

		damage: "60+"
	}],

	retreat: 2,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
