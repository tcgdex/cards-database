import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "アップリュー",
		'zh-tw': "伽勒爾 喵喵",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 80,
	types: ["Dragon"],

	description: {
		ja: "りんごの 皮の 翼で 飛んで 強酸性の 唾液を 飛ばす。 りんごの 形に 変形する。",
		'zh-tw': "和好戰的海洋民族一起生活，久而久之身體的各個地方 就都變成了黑鐵。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "フライトアップ",
				'zh-tw': "出爪",
			},
			cost: ["Fire"],
			effect: {
				ja: "自分のトラッシュから基本エネルギーを3枚まで選び、ベンチポケモン1匹につける。",
				'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。",
			},
		},
		{
			name: { ja: "さんでとかす" },
			damage: 70,
			cost: ["Grass", "Fire"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 573770,
				tcgplayer: 597408,
			},
		},
	],

	evolveFrom: {
		ja: "カジッチュ",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [841],
};

export default card;
