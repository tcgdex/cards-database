import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "マーイーカ",
		'zh-tw': "好啦魷",
	},

	illustrator: "Mori Yuu",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "回転しながら 発光体を 点滅。 光の パターンで 仲間と コミュニケーションする。",
		'zh-tw': "旋轉著閃爍自己的發光體。 透過改變閃爍的方式 來和其他夥伴交流。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "いたずらしょくしゅ",
				'zh-tw': "惡作劇觸手",
			},
			cost: ["Colorless"],
			effect: {
				ja: "相手の山札を上から1枚見て、もとにもどす。のぞむなら、その山札を切る。",
				'zh-tw': "查看對手的牌庫上方1張卡，回復原樣。若希望，重洗那個牌庫。",
			},
		},
		{
			name: {
				ja: "つつく",
				'zh-tw': "啄",
			},
			damage: 10,
			cost: ["Darkness"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773782,
				tcgplayer: 566284,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [686],
};

export default card;
