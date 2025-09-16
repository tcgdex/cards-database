import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "サブリナのXatu",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [178],
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "テレポート",
			},
			effect: {
				ja: "SabrinaのXatuを、1つのベンチポケモンを使用して切り替えます。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "シャープなくちばし",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて30ダメージを与えます。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
		},
	],
};

export default card
