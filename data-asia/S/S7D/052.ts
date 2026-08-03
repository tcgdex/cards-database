import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "ケッキング",
		'zh-tw': "請假王",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 180,
	types: ["Colorless"],

	description: {
		ja: "世界一の ぐうたらだが たまった エネルギーを 一気に 出す ことで 恐ろしい パワーを 発揮する。",
		'zh-tw': "雖然是世界上最懶散的寶可夢，但能藉由把積蓄的能量一次釋放，發揮出驚人的力量。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "のさばる",
				'zh-tw': "橫行",
			},
			effect: {
				ja: "場にスタジアムが出ているなら、このポケモンはワザが使えない。",
				'zh-tw': "若場上有競技場卡，則這隻寶可夢無法使用招式。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "けちらす",
				'zh-tw': "踢散",
			},
			damage: "120+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のベンチポケモンの数×30ダメージ追加。",
				'zh-tw': "增加對手的備戰寶可夢的數量×30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 571640,
				tcgplayer: 569375,
			},
		},
	],

	evolveFrom: {
		ja: "ヤルキモノ",
	},

	retreat: 4,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [289],
};

export default card;
