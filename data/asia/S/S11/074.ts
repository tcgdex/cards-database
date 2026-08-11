import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "メタング",
		'zh-tw': "金屬怪",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		ja: "２匹の ダンバルが 磁力で くっついた。 ２つの 脳みそにより サイコパワーは ２倍に 強化。",
		'zh-tw': "由２隻鐵啞鈴以磁力結合而成。因為有２個大腦， 精神力量也強化成２倍了。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "バレットパンチ",
				'zh-tw': "子彈拳",
			},
			damage: "30+",
			cost: ["Metal", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数×30ダメージ追加。",
				'zh-tw': "擲2次硬幣，增加正面出現的次數×30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667949,
				tcgplayer: 570005,
			},
		},
	],

	evolveFrom: {
		ja: "ダンバル",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [375],
};

export default card;
