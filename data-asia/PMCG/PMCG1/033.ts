import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "Poliwrath",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [62],
	hp: 90,
	types: ["Water"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Water", "Water", "Colorless"],
			name: {
				ja: "ウォーターガン",
			},
			effect: {
				ja: "PoliWrathに付着した水エネルギーごとに30のダメージに加えて10ダメージを与えますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で20以上のダメージを追加することはできません。",
			},

		},
		{
			cost: ["Water", "Water", "Colorless", "Colorless"],
			name: {
				ja: "渦",
			},
			effect: {
				ja: "防御するポケモンにエネルギーカードが接続されている場合は、それらの1つを選択して破棄します。",
			},
			damage: 40,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
