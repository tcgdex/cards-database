import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Sandshrew",
		fr: "Sabeletted'Alola",
		es: "Sandshrewde Alola",
		it: "Sandshrewdi Alola",
		de: "Alola-Sandan",
		'pt-br': "Sandshrewde Alola",
		ko: "알로라모래두지"
	},

	illustrator: "ryoma uratsuka",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [27],
	hp: 60,
	types: ["Water"],

	description: {
		en: "Life on mountains covered with deep snow has granted this Pokémon a body of ice that's as hard as steel.",
		fr: "À force de vivre au milieu des sommets\nenneigés, ce Pokémon a développé une\ncarapace de glace dure comme l'acier.",
		es: "Ha desarrollado un caparazón de hielo duro como el acero para\nadaptarse a las montañas de nieves perpetuas donde habita.",
		it: "Vivendo in zone montuose gelide e impenetrabili ha\nsviluppato un corpo di ghiaccio duro come l'acciaio.",
		de: "Da es in einer durch Schnee abgeschotteten\nBergregion lebt, hat es sich einen stahlharten\nKörper aus Eis angeeignet.",
		'pt-br': "A vida nas montanhas cobertas de neve concedeu\na este Pokémon um corpo de gelo tão forte quanto aço.",
		ko: "눈으로 봉쇄된 산악 지대에\n사는 동안 얼음으로 된\n강철처럼 단단한 몸을 갖게 되었다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Scratch",
			fr: "Griffe",
			es: "Arañazo",
			it: "Graffio",
			de: "Kratzer",
			'pt-br': "Arranhão",
			ko: "할퀴기"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo", "lunala"]
}

export default card