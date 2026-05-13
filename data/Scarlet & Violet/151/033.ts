import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [33],
	set: Set,

	name: {
		fr: "Nidorino",
		en: "Nidorino",
		es: "Nidorino",
		it: "Nidorino",
		pt: "Nidorino",
		de: "Nidorino"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],
	evolveFrom: {
		fr: "Nidoran♂",
		en: "Nidoran♂",
		es: "Nidoran♂",
		it: "Nidoran♂",
		pt: "Nidoran♂",
		de: "Nidoran♂"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			fr: "Croc Aiguisé",
			en: "Sharp Fang",
			es: "Colmillo Afilado",
			it: "Zannaffilata",
			pt: "Presa Afiada",
			de: "Scharfe Fänge"
		},

		damage: 30
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			fr: "Cornes Surpuissantes",
			en: "Superpowered Horns",
			es: "Cuernos Superpoderosos",
			it: "Corna Superpotenziate",
			pt: "Chifres Superpoderosos",
			de: "Superstarke Hörner"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Shiburingaru",

	thirdParty: {
		cardmarket: 733628
	}
}

export default card