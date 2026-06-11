import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [380],
	set: Set,

	name: {
		en: "Latias",
		fr: "Latias",
		es: "Latias",
		it: "Latias",
		pt: "Latias",
		de: "Latias"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Allure",
			fr: "Allure",
			es: "Atractivo",
			it: "Affascinante",
			pt: "Fascinar",
			de: "Verlockung"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			es: "Roba 2 cartas.",
			it: "Pesca due carte.",
			pt: "Compre 2 cartas.",
			de: "Ziehe 2 Karten."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Lagoon Flight",
			fr: "Survol du Lagon",
			es: "Vuelo Laguna",
			it: "Volo Lagunare",
			pt: "Sobrevoar a Laguna",
			de: "Lagunenflug"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Darkness",
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
	regulationMark: "H",

	description: {
		en: "It communicates using telepathy. Its body is covered in down that refracts light to make it invisible.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760697,
				tcgplayer: 542811
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760697,
				tcgplayer: 542811
			}
		},
	],

	illustrator: "Takumi Wada",

}

export default card