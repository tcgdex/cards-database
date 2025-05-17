import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Chansey",
		fr: "Leveinard",
		es: "Chansey",
		it: "Chansey",
		de: "Chaneira",
		'pt-br': "Chansey",
		ko: "럭키"
	},

	illustrator: "sowsow",
	rarity: "None",
	category: "Pokemon",
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce",
			es: "Bofetada Gentil",
			it: "Schiaffetto",
			de: "Sanfter Hieb",
			'pt-br': "Tapinha",
			ko: "세게때리기"
		},

		cost: ["Colorless", "Colorless", "Colorless"],
		damage: 60
	}],

	hp: 120,

	description: {
		en: "This kindly Pokémon lays highly nutritious eggs and shares them with injured Pokémon or people.",
		fr: "Ce Pokémon très serviable distribue ses œufs hautement\nnutritifs aux êtres humains et aux Pokémon blessés.",
		es: "Un generoso Pokémon que pone huevos muy\nnutritivos y se los da a personas o Pokémon heridos.",
		it: "Un Pokémon altruista che depone\nuova molto nutrienti e le condivide\ncon persone o Pokémon feriti.",
		de: "Ein freundliches Pokémon, das nahrhafte Eier\nlegt, um diese mit verletzten Pokémon und\nMenschen zu teilen.",
		'pt-br': "Este Pokémon gentil bota ovos bastante nutritivos\ne os compartilha com pessoas ou Pokémon feridos.",
		ko: "상처 입은 포켓몬이나 사람이 있으면\n영양 만점의 알을 낳아\n나눠 주는 상냥한 포켓몬이다."
	},

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3,
	boosters: []
}

export default card
