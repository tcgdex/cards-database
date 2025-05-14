import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Larvesta",
		fr: "Pyronille",
		es: "Larvesta",
		it: "Larvesta",
		de: "Ignivor",
		'pt-br': "Larvesta",
		ko: "활화르바"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		en: "This Pokémon was called the Larva That Stole the Sun. The fire Larvesta spouts from its horns can cut right through a sheet of iron.",
		fr: "On l'appelait autrefois \" la larve qui a dérobé\nle soleil \". Les flammes qui jaillissent de ses\ncornes peuvent découper une plaque de fer.",
		es: "Antaño lo llamaron la Larva que Hurtó el Sol.\nLas llamas que brotan de sus cuernos pueden\nfundir sin problema una plancha de acero.",
		it: "Veniva chiamato la \"larva che ha rubato\nil sole\". Con le fiamme che lancia dalle\ncorna può tagliare anche lastre di ferro.",
		de: "Man nannte es die \"Larve, welche die Sonne\nstahl\". Die Flammen, die es aus seinen Hörnern\nfeuert, können selbst Eisenplatten zerteilen.",
		'pt-br': "Este Pokémon era chamado de \"Larva que Roubou o Sol\". O fogo\nque Larvesta expele de seus chifres pode cortar uma placa de ferro.",
		ko: "태양을 훔친 유충이라 불렸었다.\n뿔을 통해 분출하는 불꽃은\n철판도 끊어 버릴 수 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Combustion",
			fr: "Fournaise",
			es: "Combustión",
			it: "Fuoco Continuo",
			de: "Glühen",
			'pt-br': "Combustão",
			ko: "화염"
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
