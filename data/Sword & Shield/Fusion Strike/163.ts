import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [319],
	set: Set,

	name: {
		en: "Sharpedo",
		fr: "Sharpedo",
		es: "Sharpedo",
		it: "Sharpedo",
		pt: "Sharpedo",
		de: "Tohaido"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		en: "Carvanha",
		fr: "Carvanha",
		es: "Carvanha",
		it: "Carvanha",
		pt: "Carvanha",
		de: "Kanivanha"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Hasuno",

	description: {
		en: "It drinks in seawater and jets it from its rear to propel itself. It's very sensitive to the scent of blood."
	},

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Sharp Fang",
			fr: "Croc Aiguisé",
			de: "Scharfe Fänge",
			es: "Colmillo Afilado",
			pt: "Presa Afiada",
			it: "Zannaffilata"
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
		cardmarket: 582791
	}
}

export default card