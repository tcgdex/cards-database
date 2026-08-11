import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Thievul",
		'fr-fr': "Roublenard",
		'de-de': "Gaunux",
		'it-it': "Thievul",
		'es-es': "Thievul",
		'pt-br': "Thievul",
		'es-mx': "Thievul"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Nickit",
		'fr-fr': "Goupilou",
		'de-de': "Kleptifux",
		'it-it': "Nickit",
		'es-es': "Nickit",
		'pt-br': "Nickit",
		'es-mx': "Nickit"
	},
	stage: "Stage1",
	dexId: [828],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Greedy Hunt",
			'fr-fr': "Chasse Avide",
			'de-de': "Gierige Jagd",
			'it-it': "Caccia Ingorda",
			'es-es': "Caza Codiciosa",
			'pt-br': "Caçada Gananciosa",
			'es-mx': "Caza Codiciosa"
		},

		effect: {
			'en-us': "You may draw cards until you have 6 cards in your hand.",
			'fr-fr': "Vous pouvez piocher des cartes jusqu'à en avoir 6 en main.",
			'de-de': "Du kannst so lange Karten ziehen, bis du 6 Karten auf deiner Hand hast.",
			'it-it': "Puoi pescare fino ad avere sei carte in mano.",
			'es-es': "Puedes robar cartas hasta tener 6 cartas en tu mano.",
			'pt-br': "Você pode comprar cartas até ter 6 cartas na sua mão.",
			'es-mx': "Puedes robar cartas hasta que tengas 6 cartas en tu mano."
		},

		damage: 20
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Pitch-Black Fangs",
			'fr-fr': "Crocs Nuit Noire",
			'de-de': "Pechschwarze Fänge",
			'it-it': "Zanne Buiopesto",
			'es-es': "Colmillos Azabaches",
			'pt-br': "Presas do Breu",
			'es-mx': "Colmillos Umbríos"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851161,
				tcgplayer: 654429
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851161,
				tcgplayer: 654429
			}
		},
	],
}

export default card
