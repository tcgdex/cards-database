import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [531],
	set: Set,

	name: {
		en: "Audino",
		fr: "Nanméouïe",
		de: "Ohrdoch",
		it: "Audino",
		pt: "Audino",
		es: "Audino",
		'es-mx': "Audino"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Return",
			fr: "Retour",
			de: "Rückkehr",
			it: "Ritorno",
			pt: "Retorno",
			es: "Retribución",
			'es-mx': "Retribución"
		},

		effect: {
			en: "You may draw cards until you have 6 cards in your hand.",
			fr: "Vous pouvez piocher des cartes jusqu'à en avoir 6 en main.",
			de: "Du kannst so lange Karten ziehen, bis du 6 Karten auf deiner Hand hast.",
			it: "Puoi pescare fino ad avere sei carte in mano.",
			pt: "Você pode comprar cartas até ter 6 cartas na sua mão.",
			es: "Puedes robar cartas hasta que tengas 6 cartas en tu mano.",
			'es-mx': "Puedes robar cartas hasta que tengas 6 cartas en tu mano."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836223
	}
}

export default card