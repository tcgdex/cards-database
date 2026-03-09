import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Trubbish",
		fr: "Miamiasme",
		es: "Trubbish",
		it: "Trubbish",
		de: "Unratütox",
		'pt-br': "Trubbish",
		ko: "깨봉이"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [568],
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "Its favorite places are unsanitary ones. If you leave trash lying around, you could even find one of these Pokémon living in your room.",
		fr: "Il raffole des endroits sales. Si on laisse\ntraîner des ordures dans une pièce trop\nlongtemps, il finit par en faire son domicile.",
		es: "Le gustan los lugares insalubres. Puede llegar a\nestablecerse en las casas de aquellas personas\nque no hagan la limpieza con regularidad.",
		it: "Predilige luoghi insalubri. Sbuca fuori nelle case dove\nè stata lasciata spazzatura in giro e vi si stabilisce.",
		de: "Es liebt schmutzige Orte. Angeblich zieht es auch\nin menschliche Behausungen ein, wenn man zu viel\nMüll herumliegen lässt.",
		'pt-br': "Este Pokémon prefere lugares insalubres, e se você\nnão limpar o lixo do seu quarto, poderá até encontrá-lo\nvivendo lá dentro.",
		ko: "비위생적인 장소를 좋아한다.\n쓰레기를 어질러놓은 채 내버려 두면\n방에 나타나 그대로 눌러앉는다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Pound",
			fr: "Écras'Face",
			es: "Destructor",
			it: "Botta",
			de: "Klaps",
			'pt-br': "Pancada",
			ko: "막치기"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo", "lunala"]
}

export default card