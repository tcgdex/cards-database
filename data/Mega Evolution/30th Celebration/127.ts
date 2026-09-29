import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Switch",
		fr: "Échange",
		de: "Tausch",
		es: "Cambio",
		it: "Scambio",
		'es-mx': "Cambio",
		pt: "Substituição"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Trainer",
	effect: {
		pt: "Troque o seu Pokémon Ativo por 1 dos seus Pokémon no Banco."
	},

	trainerType: "Item",
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907734,
				tcgplayer: 716516
			}
		}
	],
}

export default card
