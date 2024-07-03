import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [83],
	set: Set,

	name: {
		fr: "Canarticho",
		en: "Farfetch'd",
		es: "Farfetch'd",
		it: "Farfetch'd",
		pt: "Farfetch'd",
		de: "Porenta"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Aubaine",
			en: "Package Deal",
			es: "Paquete Ganga",
			it: "Pacchetto Completo",
			pt: "Promoção Combinada",
			de: "Pauschale"
		},

		effect: {
			fr: "Piochez 2 cartes.",
			en: "Draw 2 cards.",
			es: "Roba 2 cartas.",
			it: "Pesca due carte.",
			pt: "Compre 2 cartas.",
			de: "Ziehe 2 Karten."
		}
	}, {
		cost: ["Colorless"],

		name: {
			fr: "Poireau Tabasseur",
			en: "Leek Clobber",
			es: "Aporreo con Puerro",
			it: "Gambomazzata",
			pt: "Alho-poró Esmagador",
			de: "Lauchvermöbler"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card