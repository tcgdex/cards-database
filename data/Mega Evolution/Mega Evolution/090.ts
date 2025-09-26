import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Thievul",
		fr: "Roublenard",
		de: "Gaunux",
		it: "Thievul",
		es: "Thievul",
		pt: "Thievul",
		'es-mx': "Thievul"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Greedy Hunt",
			fr: "Chasse Avide",
			de: "Gierige Jagd",
			it: "Caccia Ingorda",
			es: "Caza Codiciosa",
			pt: "Caçada Gananciosa",
			'es-mx': "Caza Codiciosa"
		},

		effect: {
			en: "You may draw cards until you have 6 cards in your hand.",
			fr: "Vous pouvez piocher des cartes jusqu'à en avoir 6 en main.",
			de: "Du kannst so lange Karten ziehen, bis du 6 Karten auf deiner Hand hast.",
			it: "Puoi pescare fino ad avere sei carte in mano.",
			es: "Puedes robar cartas hasta tener 6 cartas en tu mano.",
			pt: "Você pode comprar cartas até ter 6 cartas na sua mão.",
			'es-mx': "Puedes robar cartas hasta que tengas 6 cartas en tu mano."
		},

		damage: 20
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Pitch-Black Fangs",
			fr: "Crocs Nuit Noire",
			de: "Pechschwarze Fänge",
			it: "Zanne Buiopesto",
			es: "Colmillos Azabaches",
			pt: "Presas do Breu",
			'es-mx': "Colmillos Umbríos"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654429
	}
}

export default card