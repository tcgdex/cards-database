import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "キングドラ",
		'zh-tw': "刺龍王",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	description: {
		ja: "嵐が来ると 海面に 姿を 見せる。 カイリューに 出くわすと 激しい 争いが はじまる。",
		'zh-tw': "暴風雨來襲時會在海面上現身。如果撞見了快龍， 就會展開激烈的爭鬥。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "さかまくかいりゅう",
				'zh-tw': "翻騰海流",
			},
			effect: {
				ja: "自分の番に1回使える。自分または相手のどちらかを選び、選ばれたプレイヤーは、手札をすべてウラにして切り、山札の下にもどす。その後、選ばれたプレイヤーは山札を4枚引く。",
				'zh-tw': "在自己的回合時，可使用1次。選擇自己或者對手任一方，被選擇的玩家將手牌全部翻回反面並重洗，放回牌庫下方。然後，被選擇的玩家從牌庫抽出4張卡。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ハイドロスプラッシュ",
				'zh-tw': "水炮濺射",
			},
			damage: 130,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 667899,
				tcgplayer: 569955,
			},
		},
	],

	evolveFrom: {
		ja: "シードラ",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [230],
};

export default card;
