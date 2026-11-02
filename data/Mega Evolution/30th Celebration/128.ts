import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Ultra Ball",
		fr: "Hyper Ball",
		de: "Hyperball",
		es: "Ultra Ball",
		it: "Ultra Ball",
		'es-mx': "Ultrabola",
		pt: "Ultra Bola"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Trainer",
	effect: {
		pt: "Você só pode usar esta carta se descartar outras 2 cartas da sua mão. Procure por um Pokémon no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho."
	},

	trainerType: "Item",
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907735,
				tcgplayer: 716517
			}
		}
	],
}

export default card
