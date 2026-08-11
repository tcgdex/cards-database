import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Ducklett",
		'fr-fr': "Couaneton",
		'es-es': "Ducklett",
		'it-it': "Ducklett",
		'de-de': "Piccolente",
		'pt-br': "Ducklett",
		'ko-kr': "꼬지보리"
	},

	illustrator: "Yumi",
	category: "Pokemon",

	dexId: [580],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Flap",
			'fr-fr': "Battement",
			'es-es': "Aleteo",
			'it-it': "Alabattito",
			'de-de': "Flattern",
			'pt-br': "Asa",
			'ko-kr': "홰치기"
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		'en-us': "When attacked, it uses its feathers to splash water, escaping under cover of the spray.",
		'fr-fr': "Quand on l'attaque, il s'ébroue et fait jaillir de la vapeur d'eau\nde tout son corps. Il se cache dedans pour s'enfuir.",
		'es-es': "Cuando se ve atacado, las plumas que lo recubren\ndespiden ráfagas de agua que lo ayudan a escapar.",
		'it-it': "Quando viene attaccato schizza acqua\nda tutte le piume del corpo. Fugge\ndileguandosi in una nuvola di spruzzi.",
		'de-de': "Gerät es in Gefahr, versprüht es Wasser aus\nseinem Federkleid und nutzt den Sprühregen,\num Reißaus zu nehmen.",
		'pt-br': "Quando atacado, usa as penas para\nespirrar água e foge protegido pelo spray.",
		'ko-kr': "상대에게 공격당하면 전신의\n깃털에서 물보라를 내뿜는다.\n물안개에 숨어들어 도망친다."
	},

	boosters: ["charizard"]
}

export default card
