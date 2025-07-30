import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [512],
	set: Set,

	name: {
		en: "Simisage",
		fr: "Feuiloutan",
		es: "Simisage",
		it: "Simisage",
		pt: "Simisage",
		de: "Vegichita"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	evolveFrom: {
		en: "Pansage",
		fr: "Feuillajou",
		es: "Pansage",
		it: "Pansage",
		pt: "Pansage",
		de: "Vegimak"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Akira Komayama",

	description: {
		en: "Ill tempered, it fights by swinging its barbed tail around wildly. The leaf growing on its head is very bitter."
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Return",
			fr: "Retour",
			de: "Rückkehr",
			es: "Retribución",
			pt: "Retorno",
			it: "Ritorno"
		},

		damage: 30,

		effect: {
			en: "You may draw cards until you have 6 cards in your hand.",
			fr: "Vous pouvez piocher des cartes jusqu'à en avoir 6 en main.",
			de: "Du kannst so viele Karten ziehen, bis du 6 Karten auf der Hand hast.",
			es: "Puedes robar cartas hasta que tengas 6 cartas en tu mano.",
			pt: "Você pode comprar cartas até ter 6 cartas na sua mão.",
			it: "Puoi pescare fino ad avere sei carte in mano."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Whip Smash",
			fr: "Frappe Fouet",
			de: "Peitschenschlag",
			es: "Golpe Látigo",
			pt: "Chicote Esmagador",
			it: "Frustata Devastante"
		},

		damage: 70
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582036
	}
}

export default card