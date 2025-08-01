import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Délestin",
		en: "Veluza",
		es: "Veluza",
		it: "Veluza",
		pt: "Veluza",
		de: "Agiluza"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Collision",
			en: "Ram",
			es: "Apisonar",
			it: "Carica",
			pt: "Aríete",
			de: "Ramme"
		},

		damage: 20
	}, {
		cost: ["Water", "Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Vis Fine",
			en: "Slim Screw",
			es: "Rosca Fina",
			it: "Vite Snella",
			pt: "Parafuso Esbelto",
			de: "Schmale Schraube"
		},

		effect: {
			fr: "Si vous n'avez aucune carte dans votre main, cette attaque peut être utilisée pour {W}.",
			en: "If you have no cards in your hand, this attack can be used for {W}.",
			es: "Si no tienes ninguna carta en tu mano, este ataque se puede usar por {W}.",
			it: "Se non hai carte in mano, il costo di questo attacco è {W}.",
			pt: "Se você não tiver cartas na sua mão, este ataque poderá ser usado por {W}.",
			de: "Wenn du keine Karten auf deiner Hand hast, kann diese Attacke für {W} eingesetzt werden."
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false
	},

	illustrator: "Anesaki Dynamic",

	thirdParty: {
		cardmarket: 715531
	}
}

export default card
