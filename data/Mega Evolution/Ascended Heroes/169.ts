import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Larry's Staravia",
		fr: "Étourvol d'Okuba",
		es: "Staravia de Laureano",
		'es-mx': "Staravia de Laureano",
		de: "Aokis Staravia",
		it: "Staravia di Ubaldo",
		pt: "Staravia do Lauro"
	},

	evolveFrom: {
		en: "Larry's Starly",
		fr: "Étourmi d'Okuba",
		es: "Starly de Laureano",
		'es-mx': "Starly de Laureano",
		de: "Aokis Staralili",
		it: "Starly di Ubaldo",
		pt: "Starly do Lauro",
	},

	illustrator: "Fujimoto Gold",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Flap",
			fr: "Battement",
			es: "Aleteo",
			'es-mx': "Aleteo",
			de: "Flattern",
			it: "Alabattito",
			pt: "Asa"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Razor Wing",
			fr: "Aile Tranchante",
			es: "Ala Cortante",
			'es-mx': "Ala Cortante",
			de: "Rasierflügel",
			it: "Ala Tagliente",
			pt: "Asa Cortante"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "J",

	description: {
		en: "They maintain huge flocks, although fierce scuffles break out between various flocks.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869780,
			tcgplayer: 675981
		}
	},
	{
		type: "reverse",
		foil: "pokeball",
		thirdParty: {
			cardmarket: 870398,
			tcgplayer: 676983
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870397,
			tcgplayer: 677123
		}
	},
],
}

export default card