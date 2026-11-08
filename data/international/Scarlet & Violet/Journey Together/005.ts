import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [47],
	set: Set,

	name: {
		'en-us': "Parasect",
		'fr-fr': "Parasect",
		'es-es': "Parasect",
		'de-de': "Parasek",
		'it-it': "Parasect",
		'pt-br': "Parasect",
		'es-mx': "Parasect"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Paras",
		'fr-fr': "Paras",
		'es-es': "Paras",
		'de-de': "Paras",
		'it-it': "Paras",
		'pt-br': "Paras",
		'es-mx': "Paras"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Spore",
			'fr-fr': "Spore",
			'es-es': "Espora",
			'de-de': "Pilzspore",
			'it-it': "Spora",
			'pt-br': "Esporos",
			'es-mx': "Esporas"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Dormido."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Scissor Swing",
			'fr-fr': "Frappe Cisaille",
			'es-es': "Golpe Tijera",
			'de-de': "Scherenschwung",
			'it-it': "Colpoforbice",
			'pt-br': "Tesourar",
			'es-mx': "Tijerazo"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 30 more damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 30 puntos de daño más por cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte mehr pro Kopf zu.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 30 danni in più ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 30 pontos de dano a mais para cada cara.",
			'es-mx': "Lanza 2 monedas. Este ataque hace 30 puntos de daño más por cada cara."
		},

		damage: "60+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",
	illustrator: "Tetsu Kayama",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817157,
				tcgplayer: 623432
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817157,
				tcgplayer: 623432
			}
		},
	],
}

export default card
