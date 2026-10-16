import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Poké Pad",
		fr: "Poké Registre",
		de: "Poképad",
		es: "Pokétableta",
		it: "Poké Pad",
		'es-mx': "Pokétableta",
		pt: "Poké Tablet"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Trainer",
	effect: {
		en: "Search your deck for a Pokémon that doesn’t have a Rule Box, reveal it, and put it into your hand. Then, shuffle your deck. (Pokémon ex, Pokémon V, etc. have Rule Boxes.)",
		pt: "Procure no seu baralho por um Pokémon que não tiver uma Caixa de Regras, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho. (Pokémon ex, Pokémon V, etc. têm Caixas de Regras.)"
	},

	trainerType: "Item",
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907733,
				tcgplayer: 716515
			}
		}
	],
}

export default card
