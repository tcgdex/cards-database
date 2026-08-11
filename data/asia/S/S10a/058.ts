import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "カビゴン",
		'zh-tw': "卡比獸",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		ja: "１日に 食べ物を ４００キロ 食べないと 気がすまない。 食べ終わると 眠ってしまう。",
		'zh-tw': "每天不吃下４００公斤的食物絕不會善罷甘休。 吃飽了就會開始睡覺。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "へいきなしぼう",
				'zh-tw': "無畏脂肪",
			},
			effect: {
				ja: "このポケモンは、相手のポケモンが使うワザの効果を受けない。",
				'zh-tw': "這隻寶可夢不會受到對手的寶可夢使用招式的效果的影響。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "どっすんグースカ",
				'zh-tw': "轟隆打呼",
			},
			damage: 180,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンをねむりにする。このねむりで投げるコインは2回になり、すべてオモテが出ないと回復しない。",
				'zh-tw': "將這隻寶可夢【睡眠】。因這個【睡眠】的擲硬幣次數改為2次，若沒有全部為正面則無法恢復。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 656382,
				tcgplayer: 570721,
			},
		},
	],

	retreat: 4,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [143],
};

export default card;
