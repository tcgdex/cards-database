import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [158],
	set: Set,

	name: {
		'en-us': "Totodile",
		'fr-fr': "Kaiminus",
		'es-es': "Totodile",
		'it-it': "Totodile",
		'pt-br': "Totodile",
		'de-de': "Karnimani"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Big Bite",
			'fr-fr': "Grosse Morsure",
			'es-es': "Gran Mordisco",
			'it-it': "Grande Morso",
			'pt-br': "Mordidona",
			'de-de': "Mächtiger Biss"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "It is small but rough and tough. It won't hesitate to take a bite out of anything that moves.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760669,
				tcgplayer: 542783
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760669,
				tcgplayer: 542783
			}
		},
	],

	illustrator: "MINAMINAMI Take",

}

export default card