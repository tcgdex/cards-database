import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "ドリュウズ",
		'zh-tw': "龍頭地鼠",
		th: "โดริวซึ",
	},

	illustrator: "Bun Toujo",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "自然の 洞窟に 見えても ドリュウズが 掘り荒らした 跡と いうことも よくある 話だ。",
		'zh-tw': "有許多看似自然形成的洞窟其實都是龍頭地鼠 一陣亂鑽之後留下來的。",
		th: "ว่ากันว่า แม้จะดูเหมือนเป็นถ้ำที่เกิดจากธรรมชาติ แต่ก็ยังมีร่องรอยการขุดของโดริวซึอยู่",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "マッドショット",
				'zh-tw': "泥巴射擊",
				th: "มัดช็อต",
			},
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "ワイルドタックル",
				'zh-tw': "狂野衝撞",
				th: "ไวลด์แท็กเกิล",
			},
			damage: 180,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "このポケモンにも50ダメージ。",
				'zh-tw': "這隻寶可夢也受到50點傷害。",
				th: "โปเกมอนนี้ก็จะได้รับแดเมจ 50 ด้วย",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752923,
				tcgplayer: 566191,
			},
		},
	],

	evolveFrom: {
		ja: "モグリュー",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [530],
};

export default card;
