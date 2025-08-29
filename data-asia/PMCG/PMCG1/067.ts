import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "クリーフ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [35],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "歌う",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、相手のアクティブなポケモンは眠っています。",
			},

		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "メトロノーム",
			},
			effect: {
				ja: "対戦相手のアクティブなポケモンの攻撃の1つを選択し、この攻撃として使用します。",
			},

		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
