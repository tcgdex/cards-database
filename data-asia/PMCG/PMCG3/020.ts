import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "シードラ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [117],
	hp: 60,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "ウォーターガン",
			},
			effect: {
				ja: "20ダメージに加えて、シードラに付着した各水エネルギーに対してさらに10ダメージを与えますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で20以上のダメージを追加することはできません。",
			},

		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				ja: "敏ility性",
			},
			effect: {
				ja: "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、シードラに行われたダメージを含む攻撃のすべての影響を防ぎます。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
