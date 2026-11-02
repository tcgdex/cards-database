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

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		en: "It's nervous and quick to act aggressively. The potency of its poison increases along with the level of adrenaline present in its body.",
		de: "Es ist nervös und wird schnell aggressiv. Steigt sein Adrenalinspiegel, erhöht sich gleichzeitig auch die Konzentration seines Gifts."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733628,
				tcgplayer: 516016,
				cardtrader: 261199
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733628,
				tcgplayer: 516016,
				cardtrader: 261199
			}
		},
	],

	illustrator: "Shiburingaru",

	
}

export default card
