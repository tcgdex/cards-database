import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Chansey",
		'fr-fr': "Leveinard",
		'es-es': "Chansey",
		'it-it': "Chansey",
		'de-de': "Chaneira",
		'pt-br': "Chansey",
		'ko-kr': "럭키"
	},

	illustrator: "sowsow",
	rarity: "None",
	category: "Pokemon",

	dexId: [113],
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Gentle Slap",
			'fr-fr': "Gifle Douce",
			'es-es': "Bofetada Gentil",
			'it-it': "Schiaffetto",
			'de-de': "Sanfter Hieb",
			'pt-br': "Tapinha",
			'ko-kr': "세게때리기"
		},

		cost: ["Colorless", "Colorless", "Colorless"],
		damage: 60
	}],

	hp: 120,

	description: {
		'en-us': "This kindly Pokémon lays highly nutritious eggs\nand shares them with injured Pokémon or people.",
		'fr-fr': "Ce Pokémon très serviable distribue ses œufs hautement\nnutritifs aux êtres humains et aux Pokémon blessés.",
		'es-es': "Un generoso Pokémon que pone huevos muy\nnutritivos y se los da a personas o Pokémon heridos.",
		'it-it': "Un Pokémon altruista che depone\nuova molto nutrienti e le condivide\ncon persone o Pokémon feriti.",
		'de-de': "Ein freundliches Pokémon, das nahrhafte Eier\nlegt, um diese mit verletzten Pokémon und\nMenschen zu teilen.",
		'pt-br': "Este Pokémon gentil bota ovos bastante nutritivos\ne os compartilha com pessoas ou Pokémon feridos.",
		'ko-kr': "상처 입은 포켓몬이나 사람이 있으면\n영양 만점의 알을 낳아\n나눠 주는 상냥한 포켓몬이다."
	},

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3,
	boosters: []
}

export default card
