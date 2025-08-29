import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "Psyduck",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [54],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "めまい",
			},
			effect: {
				ja: "カードを描きます。",
			},
		},
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "ウォーターガン",
			},
			effect: {
				ja: "Psyduckに取り付けられた各水エネルギーに対して20のダメージに加えて10のダメージをさらに10回かけますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で20以上のダメージを追加することはできません。",
			},
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
