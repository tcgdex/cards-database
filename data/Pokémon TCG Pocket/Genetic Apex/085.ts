import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Ducklett",
		fr: "Couaneton",
		es: "Ducklett",
		it: "Ducklett",
		de: "Piccolente",
		'pt-br': "Ducklett",
		ko: "꼬지보리"
	},

	illustrator: "Yumi",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Flap",
			fr: "Battement",
			es: "Aleteo",
			it: "Alabattito",
			de: "Flattern",
			'pt-br': "Asa",
			ko: "홰치기"
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
		en: "When attacked, it uses its feathers to splash water, escaping under cover of the spray.",
		fr: "Quand on l'attaque, il s'ébroue et fait jaillir de la vapeur d'eau\nde tout son corps. Il se cache dedans pour s'enfuir.",
		es: "Cuando se ve atacado, las plumas que lo recubren\ndespiden ráfagas de agua que lo ayudan a escapar.",
		it: "Quando viene attaccato schizza acqua\nda tutte le piume del corpo. Fugge\ndileguandosi in una nuvola di spruzzi.",
		de: "Gerät es in Gefahr, versprüht es Wasser aus\nseinem Federkleid und nutzt den Sprühregen,\num Reißaus zu nehmen.",
		'pt-br': "Quando atacado, usa as penas para\nespirrar água e foge protegido pelo spray.",
		ko: "상대에게 공격당하면 전신의\n깃털에서 물보라를 내뿜는다.\n물안개에 숨어들어 도망친다."
	}
}

export default card
