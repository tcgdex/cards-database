import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "ミュー",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [151],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "Psywave",
			},
			effect: {
				ja: "ディフェンディングポケモンに添付されたエネルギーカードの数を10回ダメージします。",
			},

		},
		{
			cost: ["Psychic", "Psychic"],
			name: {
				ja: "デボリューションビーム",
			},
			effect: {
				ja: "進化したポケモン（あなた自身または相手）を選択してください。そのポケモンの最高ステージ進化カードをプレイヤーの手に返します。そのポケモンは、もはや眠っていない、混乱し、麻痺した、または毒されていない、または攻撃の結果である可能性のあるもの（まるであなたがそれを進化させたかのように）。",
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
