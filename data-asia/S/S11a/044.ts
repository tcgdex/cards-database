import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ハッサム",
		'zh-tw': "巨鉗螳螂",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "大きな ハサミは 体重の ３分の１の 重さ。 振り下ろせば 岩石も 一発で 粉々だ。",
		'zh-tw': "巨大的鉗子重達體重的３分之１。鉗子一揮，就連岩石都能一擊粉碎。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "シザークロス",
				'zh-tw': "十字剪",
			},
			damage: "30+",
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージ追加。",
				'zh-tw': "擲1次硬幣若為正面，則增加30點傷害。",
			},
		},
		{
			name: {
				ja: "デンジャラスクロー",
				'zh-tw': "危險爪",
			},
			damage: "80+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンがたねポケモンなら、80ダメージ追加。",
				'zh-tw': "若對手的戰鬥寶可夢為【基礎】寶可夢，則增加80點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673042,
				tcgplayer: 570807,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570892,
			},
		},
	],

	evolveFrom: {
		ja: "ストライク",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [212],
};

export default card;
