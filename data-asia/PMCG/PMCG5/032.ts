import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "ミスティのゴルダック",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [55],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "電子ビーム",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、MistyのGolduckに取り付けられたすべてのエネルギーカードを捨ててください。",
			},
			damage: 40,
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "スーパー除去",
			},
			effect: {
				ja: "コインをひっくり返します。ヘッドの場合は、エネルギーカードを備えた相手のポケモンのそれぞれに1枚のエネルギーカードを選択し、それらのエネルギーカードを破棄します。",
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
