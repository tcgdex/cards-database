import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "RocketのMewtwo Ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [150],
	hp: 100,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "闇のスイッチ",
			},
			effect: {
				ja: "RocketのMewtwo Exに取り付けられたエネルギーカードを捨ててから、RocketのMewtwo Exのすべてのダメージカウンターを防御ポケモンのMewtwo Exと切り替えます。 （この攻撃の影響が防止された場合、この攻撃は何もしません。）",
			},
		},
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: {
				ja: "催眠芽球",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御するポケモンは今眠っています。",
			},
			damage: 40,
		},
		{
			cost: ["Psychic", "Colorless", "Colorless", "Colorless"],
			name: {
				ja: "Psyburn",
			},
			damage: 70,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
