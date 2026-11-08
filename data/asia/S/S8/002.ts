import { Card } from "models/database/card";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "トランセル",
		'zh-tw': "鐵甲蛹",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'ja-jp': "硬い 殻に 包まれているが 中身は 軟らかいので 強い 攻撃には 耐えられない。",
		'zh-tw': "雖然有堅硬的外殼，但因為殼裡的身體很軟，所以無法抵抗強力的攻擊。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "かたいからだ",
				'zh-tw': "堅硬身軀",
			},
			effect: {
				'ja-jp': "このポケモンが受けるワザのダメージは「-20」される。",
				'zh-tw': "這隻寶可夢受到招式的傷害「-20」點。",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "ぶつかる",
				'zh-tw': "衝撞",
			},
			damage: 10,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575552,
				tcgplayer: 569503,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "キャタピー",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Common",
	dexId: [11],
};

export default card;
