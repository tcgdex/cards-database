import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Cutiefly",
		fr: "Bombydou",
		es: "Cutiefly",
		it: "Cutiefly",
		de: "Wommel",
		'pt-br': "Cutiefly",
		ko: "에블리"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],

	description: {
		en: "Nectar and pollen are its favorite fare. In fields of flowers, it gets into skirmishes with Butterfree over food.",
		fr: "Il aime le nectar et le pollen, et se dispute ces denrées\navec Papilusion dans les champs de fleurs.",
		es: "Le encantan el néctar y el polen. Revolotea en busca de alimento\npor campos de flores, donde tiene sus rifirrafes con Butterfree.",
		it: "Adora il nettare e il polline. Lo si vede spesso nei prati\nmentre bisticcia con i Butterfree per accaparrarsi il cibo.",
		de: "Es liebt Blütenstaub und Nektar. Schwirrt es auf der\nSuche nach Futter durch Blumenbeete, handelt es sich\noft Reibereien mit Smettbo ein.",
		'pt-br': "Néctar e pólen são favoritos em seu cardápio.\nEm campos floridos, briga com Butterfree\npor causa de comida.",
		ko: "꽃의 꿀과 화분을 좋아한다.\n꽃밭에서 먹이를 두고\n버터플과 옥신각신한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Flap",
			fr: "Battement",
			es: "Aleteo",
			it: "Alabattito",
			de: "Flattern",
			'pt-br': "Asa",
			ko: "홰치기"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 0,
	boosters: ["solgaleo"]
}

export default card