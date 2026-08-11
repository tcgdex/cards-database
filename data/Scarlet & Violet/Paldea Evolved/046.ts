import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [225],
	set: Set,

	name: {
		fr: "Cadoizo",
		en: "Delibird",
		es: "Delibird",
		it: "Delibird",
		pt: "Delibird",
		de: "Botogel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Double Pioche",
			en: "Double Draw",
			es: "Roba Doble",
			it: "Pescata Doppia",
			pt: "Compra Dupla",
			de: "Zweifachzug"
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
		cost: ["Water", "Colorless"],

		name: {
			fr: "Aile Glace",
			en: "Ice Wing",
			es: "Ala Gélida",
			it: "Alagelata",
			pt: "Asa de Gelo",
			de: "Frostschwinge"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715520,
				tcgplayer: 497457,
				cardtrader: 248642
			}
		},
		{
			type: 'normal',
			stamp: ['snowflake'],
			thirdParty: {
				cardmarket: 845403
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715520,
				tcgplayer: 497457,
				cardtrader: 248642
			}
		},
	],

	illustrator: "miki kudo",

	description: {
		en: "It carries food all day long. There are tales about lost people who were saved by the food it had.",
	},
}

export default card
