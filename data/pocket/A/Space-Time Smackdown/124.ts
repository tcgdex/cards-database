import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lickitung",
		'fr-fr': "Excelangue",
		'es-es': "Lickitung",
		'it-it': "Lickitung",
		'de-de': "Schlurp",
		'pt-br': "Lickitung",
		'ko-kr': "내루미"
	},

	illustrator: "Yukiko Baba",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [108],
	hp: 80,
	types: ["Colorless"],

	description: {
		'en-us': "If this Pokémon's sticky saliva gets on you and you don't clean it off, an intense itch will set in. The itch won't go away, either.",
		'fr-fr': "Si sa salive gluante entre en contact avec la peau\net qu'on ne l'essuie pas bien, elle provoque de\nterribles démangeaisons qui ne s'arrêtent jamais.",
		'es-es': "Si sus lametones no se tratan a tiempo,\nsu saliva pegajosa y urticante puede\nprovocar picores persistentes.",
		'it-it': "La sua saliva appiccicosa provoca\nun prurito terribile che non dà tregua\nse le parti leccate non vengono ripulite.",
		'de-de': "Wäscht man sich nach der Berührung mit seinem\nklebrigen Speichel nicht, setzt bald ein starker\nJuckreiz ein, der nicht mehr zu stoppen ist.",
		'pt-br': "Se você entrar em contato com a saliva grudenta\ndeste Pokémon e não se limpar, sentirá uma\ncoceira intensa. E a coceira não parará.",
		'ko-kr': "끈적끈적한 타액에 접촉한 후\n그대로 방치하면 굉장히 가렵고\n급기야 멈출 수 없게 된다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Tongue Slap",
			'fr-fr': "Gros Coup de Langue",
			'es-es': "Bofetón Lengua",
			'it-it': "Linguasberla",
			'de-de': "Zungenschelle",
			'pt-br': "Tapa de Língua",
			'ko-kr': "혀로 막치기"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["palkia"]
}

export default card
