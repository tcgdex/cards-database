import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Chewtle",
		fr: "Khélocrok",
		es: "Chewtle",
		it: "Chewtle",
		de: "Kamehaps",
		'pt-br': "Chewtle",
		ko: "깨물부기"
	},

	illustrator: "Taiga Kayama",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		en: "Its large front tooth is still growing in. When the tooth itches, this Pokémon will bite another Chewtle's horn, and the two Pokémon will tussle.",
		fr: "Son incisive continue à pousser.\nLorsqu'elle le démange, il joue avec un\nde ses congénères et lui mord la corne.",
		es: "Su gran incisivo no le ha terminado de salir.\nCuando le molesta, juguetea con uno de sus\ncompañeros mordisqueándole el cuerno.",
		it: "Il suo grande incisivo sta ancora crescendo\ne, quando gli causa prurito, questo Pokémon\ngioca a mordicchiare il corno dei suoi simili.",
		de: "Juckt sein noch im Wachstum befindlicher großer\nVorderzahn, schnappt es nach dem Horn eines\nArtgenossen und tobt mit diesem herum.",
		'pt-br': "Seu grande incisivo ainda está em crescimento.\nQuando o dente coça, este Pokémon morde o chifre\nde outro Chewtle e os dois entram em uma briga danada.",
		ko: "커다란 앞니는 난 지 얼마 되지 않았다.\n이빨이 가려울 때는 동료의 뿔을\n덥석 물면서 장난을 친다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			it: "Morso",
			de: "Biss",
			'pt-br': "Mordida",
			ko: "물기"
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
