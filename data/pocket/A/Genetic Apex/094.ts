import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'es-es': "Pikachu",
		'it-it': "Pikachu",
		'de-de': "Pikachu",
		'pt-br': "Pikachu",
		'ko-kr': "피카츄"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",

	dexId: [25],
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'es-es': "Roer",
			'it-it': "Rosicchiamento",
			'de-de': "Nagen",
			'pt-br': "Roída",
			'ko-kr': "갉기"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		'en-us': "When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.",
		'fr-fr': "Quand il s'énerve, il libère instantanément\nl'énergie emmagasinée dans les poches de\nses joues.",
		'es-es': "Cuando se enfada, este Pokémon\ndescarga la energía que almacena en\nel interior de las bolsas de las mejillas.",
		'it-it': "Quando s'arrabbia, libera subito l'energia\naccumulata nelle sacche sulle guance.",
		'de-de': "Ist es wütend, entlädt sich augenblicklich die\nElektrizität, die es in seinen Backentaschen\ngespeichert hat.",
		'pt-br': "Quando está com raiva, descarrega\nimediatamente a energia armazenada\nnas bolsas em suas bochechas.",
		'ko-kr': "양 볼에는 전기를 저장하는 주머니가 있다.\n화가 나면 저장한 전기를 단숨에 방출한다."
	},

	boosters: ["pikachu"]
}

export default card
