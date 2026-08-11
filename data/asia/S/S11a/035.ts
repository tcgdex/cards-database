import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ミュウツー",
		'zh-tw': "超夢",
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "ミュウの 遺伝子を 組み替えて 生み出された。 ポケモンで 一番 凶暴な 心を 持つという。",
		'zh-tw': "藉著重組夢幻的基因而誕生。據說有著所有寶可夢中最殘暴的心。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "サイコパンプ",
				'zh-tw': "精神充氣",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュから[P]エネルギーを2枚まで選び、自分のポケモン1匹につける。",
				'zh-tw': "從自己的棄牌區選擇最多2張【超】能量卡，附於自己的1隻寶可夢身上。",
			},
		},
		{
			name: {
				ja: "リミットブレイク",
				'zh-tw': "界限破壞",
			},
			damage: "90+",
			cost: ["Psychic", "Psychic", "Colorless"],
			effect: {
				ja: "相手のサイドの残り枚数が3枚以下なら、90ダメージ追加。",
				'zh-tw': "若對手剩餘獎賞卡的張數為3張以下，則增加90點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673033,
				tcgplayer: 570798,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [150],
};

export default card;
