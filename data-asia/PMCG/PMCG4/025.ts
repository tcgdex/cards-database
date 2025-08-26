import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "暗いギャラドス",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [130],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "最終的なビーム",
			},
			effect: {
				ja: "暗いギャラドスが攻撃によってノックアウトされたら、コインをひっくり返します。頭の場合、このパワーは、暗いギャラドスに暗いギャラドスに付着した水エネルギーごとに20のダメージを与えます。衰弱と抵抗を適用します。暗いギャラドスが眠っている、混乱し、麻痺している場合、このパワーは機能しません。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Water", "Water"],
			name: {
				ja: "アイスビーム",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 30,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
