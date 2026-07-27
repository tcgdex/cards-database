import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "メタモン",
		'zh-tw': "百變怪",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "全身の 細胞を 組み替えて 見たもの そっくりに 変身するが 力が 抜けると もとにもどる。",
		'zh-tw': "能夠藉由重組全身的細胞，變得與看到的東西一模一樣，然而一旦放鬆就會變回原形。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "いきなりへんげ",
				'zh-tw': "突然變化",
			},
			effect: {
				ja: "このポケモンは、自分のトラッシュにあるたねポケモン（「ルールを持つポケモン」をのぞく）が持っているワザを、すべて使える。［ワザを使うためのエネルギーは必要。］",
				'zh-tw': "這隻寶可夢可使用自己棄牌區的【基礎】寶可夢（「擁有規則的寶可夢」除外）持有的所有招式。[需要有足夠使用招式的能量。]",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687759,
				tcgplayer: 571735,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Illustration rare",
	dexId: [132],
};

export default card;
