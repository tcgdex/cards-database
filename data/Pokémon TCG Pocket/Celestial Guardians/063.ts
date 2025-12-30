import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Heliolisk",
		fr: "Iguolta",
		es: "Heliolisk",
		it: "Heliolisk",
		de: "Elezard",
		'pt-br': "Heliolisk",
		ko: "일레도리자드"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [695],
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		en: "Helioptile"
	},

	description: {
		en: "One Heliolisk basking in the sun with its frill outspread is all it would take to produce enough electricity to power a city.",
		fr: "Lorsqu'il déploie sa collerette pour emmagasiner\nla lumière du soleil, il génère à lui seul assez\nd'électricité pour alimenter une grande ville.",
		es: "Al extender su gorguera y exponerse a la luz\nsolar, genera la energía eléctrica suficiente para\ncubrir el consumo de una metrópoli entera.",
		it: "L'energia prodotta da un Heliolisk quando apre\nil suo collare in un luogo soleggiato è sufficiente\na soddisfare il fabbisogno di una metropoli.",
		de: "Stellt es seine kragenartigen Hautlappen auf und\nabsorbiert damit Sonnenlicht, kann ein Elezard\ngenug Strom für eine Großstadt produzieren.",
		'pt-br': "Um único Heliolisk tomando banho de sol com\nsuas cristas abertas consegue produzir energia\no suficiente para abastecer uma cidade inteira.",
		ko: "깃을 펼쳐 태양광을 받으면\n대도시에서 사용할 수 있는\n전기를 혼자서 발전한다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Rear Kick",
			fr: "Ruade",
			es: "Patada Trasera",
			it: "Retrocalcio",
			de: "Rückwärtskick",
			'pt-br': "Chute Traseiro",
			ko: "뒤로 차기"
		},

		damage: 40,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo", "lunala"]
}

export default card