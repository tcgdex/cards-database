import { Card } from "models/database/card"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Larvesta",
		'fr-fr': "Pyronille",
		'es-es': "Larvesta",
		'it-it': "Larvesta",
		'de-de': "Ignivor",
		'pt-br': "Larvesta",
		'ko-kr': "활화르바"
	},

	illustrator: "kawayoo",
	category: "Pokemon",

	dexId: [636],
	hp: 80,
	types: ["Fire"],

	description: {
		'en-us': "This Pokémon was called the Larva That Stole the Sun. The fire Larvesta spouts from its horns can cut right through a sheet of iron.",
		'fr-fr': "On l'appelait autrefois \" la larve qui a dérobé\nle soleil \". Les flammes qui jaillissent de ses\ncornes peuvent découper une plaque de fer.",
		'es-es': "Antaño lo llamaron la Larva que Hurtó el Sol.\nLas llamas que brotan de sus cuernos pueden\nfundir sin problema una plancha de acero.",
		'it-it': "Veniva chiamato la \"larva che ha rubato\nil sole\". Con le fiamme che lancia dalle\ncorna può tagliare anche lastre di ferro.",
		'de-de': "Man nannte es die \"Larve, welche die Sonne\nstahl\". Die Flammen, die es aus seinen Hörnern\nfeuert, können selbst Eisenplatten zerteilen.",
		'pt-br': "Este Pokémon era chamado de \"Larva que Roubou o Sol\". O fogo\nque Larvesta expele de seus chifres pode cortar uma placa de ferro.",
		'ko-kr': "태양을 훔친 유충이라 불렸었다.\n뿔을 통해 분출하는 불꽃은\n철판도 끊어 버릴 수 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Combustion",
			'fr-fr': "Fournaise",
			'es-es': "Combustión",
			'it-it': "Fuoco Continuo",
			'de-de': "Glühen",
			'pt-br': "Combustão",
			'ko-kr': "화염"
		},

		damage: 30,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Diamond"
}

export default card
