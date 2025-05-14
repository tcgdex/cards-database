import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Torterra",
		fr: "Torterra",
		es: "Torterra",
		it: "Torterra",
		de: "Chelterrar",
		'pt-br': "Torterra",
		ko: "토대부기"
	},

	illustrator: "kawayoo",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],

	evolveFrom: {
		en: "Grotle"
	},

	description: {
		en: "Ancient people imagined that beneath the ground dwelt a gigantic Torterra.",
		fr: "Autrefois, les gens croyaient que le monde\nreposait sur le dos d'un gigantesque Torterra.",
		es: "Las gentes de antaño creían que la superficie\nterrestre se encontraba sobre un gran Torterra.",
		it: "In tempi antichissimi si credeva che\nsottoterra dimorasse un gigantesco Torterra.",
		de: "In alten Zeiten malten die Menschen sich aus, dass sich\nein riesiges Chelterrar unter der Erde befinde.",
		'pt-br': "Povos antigos acreditavam que um Torterra gigante\nvivia embaixo da terra.",
		ko: "오랜 옛날 사람들은 대지\n밑에 거대한 토대부기가\n있다고 공상했었다."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Frenzy Plant"
		},

		damage: 150,
		cost: ["Grass", "Grass", "Colorless", "Colorless"],

		effect: {
			en: "During your next turn, this Pokémon can't use ."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 4
}

export default card
