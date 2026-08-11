import { Card } from "models/database/card"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Chewtle",
		'fr-fr': "Khélocrok",
		'es-es': "Chewtle",
		'it-it': "Chewtle",
		'de-de': "Kamehaps",
		'pt-br': "Chewtle",
		'ko-kr': "깨물부기"
	},

	illustrator: "Taiga Kayama",
	category: "Pokemon",

	dexId: [833],
	hp: 80,
	types: ["Water"],

	description: {
		'en-us': "Its large front tooth is still growing in. When the tooth itches, this Pokémon will bite another Chewtle's horn, and the two Pokémon will tussle.",
		'fr-fr': "Son incisive continue à pousser.\nLorsqu'elle le démange, il joue avec un\nde ses congénères et lui mord la corne.",
		'es-es': "Su gran incisivo no le ha terminado de salir.\nCuando le molesta, juguetea con uno de sus\ncompañeros mordisqueándole el cuerno.",
		'it-it': "Il suo grande incisivo sta ancora crescendo\ne, quando gli causa prurito, questo Pokémon\ngioca a mordicchiare il corno dei suoi simili.",
		'de-de': "Juckt sein noch im Wachstum befindlicher großer\nVorderzahn, schnappt es nach dem Horn eines\nArtgenossen und tobt mit diesem herum.",
		'pt-br': "Seu grande incisivo ainda está em crescimento.\nQuando o dente coça, este Pokémon morde o chifre\nde outro Chewtle e os dois entram em uma briga danada.",
		'ko-kr': "커다란 앞니는 난 지 얼마 되지 않았다.\n이빨이 가려울 때는 동료의 뿔을\n덥석 물면서 장난을 친다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'de-de': "Biss",
			'pt-br': "Mordida",
			'ko-kr': "물기"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Diamond"
}

export default card
