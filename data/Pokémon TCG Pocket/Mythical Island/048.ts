import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Stonjourner",
		fr: "Dolman",
		es: "Stonjourner",
		it: "Stonjourner",
		de: "Humanolith",
		'pt-br': "Stonjourner",
		ko: "돌헨진"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		en: "The elemental composition of the rocks that form its body were found to match the bedrock of a land far away from this Pokémon's habitat.",
		fr: "Les éléments rocheux qui constituent son corps\ncorrespondent à ceux qu'on trouve dans le sol\nd'une zone très éloignée de son habitat actuel.",
		es: "Los elementos que componen las rocas de\nsu cuerpo se han encontrado en lechos de\nroca muy alejados de su hábitat.",
		it: "La composizione delle pietre che formano il suo corpo coincide\ncon quella di basamenti rocciosi molto distanti dal suo habitat.",
		de: "Sein Körper setzt sich aus Steinen zusammen,\ndie mit dem Grundgestein einer weit von seinem\nLebensraum entfernten Gegend identisch sind.",
		'pt-br': "A composição elementar das pedras que formam seu corpo é a mesma\nencontrada em leitos rochosos em terras distantes do habitat deste Pokémon.",
		ko: "몸의 암석 성분이\n서식지에서 멀리 떨어진 땅의\n암반과 일치했다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Mega Kick",
			fr: "Ultimawashi",
			es: "Megapatada",
			it: "Megacalcio",
			de: "Megakick",
			'pt-br': "Megachute",
			ko: "메가톤킥"
		},

		damage: 90,
		cost: ["Fighting", "Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Two Diamond"
}

export default card
