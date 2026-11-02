import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "クロバット",
		'zh-tw': "叉字蝠",
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "両足が 羽に 変化。 音を たてずに 高速で 飛び 獲物の うなじに キバを たてる。",
		'zh-tw': "雙腳變成了翅膀。 能夠無聲無息地高速飛行， 用獠牙咬住獵物的後頸。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "かげのつかい",
				'zh-tw': "怨影使者",
			},
			effect: {
				ja: "この番、手札から「アンズの秘技」を出して使っていたなら、自分の番に1回使える。自分の手札が8枚になるように、山札を引く。",
				'zh-tw': "在這個回合，若從手牌使出了「‌阿杏的秘招」，則在自己的回合時可使用1次。從牌庫抽卡直到自己的手牌滿8張為止。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "どくどくのキバ",
				'zh-tw': "劇毒牙",
			},
			damage: 120,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。このどくでのせるダメカンの数は2個になる。",
				'zh-tw': "將對手的戰鬥寶可夢【中毒】。因這個【中毒】而放置的傷害指示物的數量改為2個。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773778,
				tcgplayer: 566280,
			},
		},
	],

	evolveFrom: {
		ja: "ゴルバット",
	},

	retreat: 0,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [169],
};

export default card;
