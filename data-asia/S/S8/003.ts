import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "バタフリー",
		'zh-tw': "巴大蝶",
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "毎日 ミツを 集めまわる。 脚の 産毛に ミツを 塗りこんで 巣に 持ち帰る 習性をもつ。",
		'zh-tw': "每天都忙著採集花蜜。習慣在腿部的細毛上塗滿花蜜，然後帶回巢穴裡。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "さんしょくりんぷん",
				'zh-tw': "三色鱗粉",
			},
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のバトルポケモンをどくとやけどとこんらんにする。",
				'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。將對手的戰鬥寶可夢【中毒】、【灼傷】與【混亂】。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "かぜおこし",
				'zh-tw': "起風",
			},
			damage: 90,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 575553,
				tcgplayer: 569504,
			},
		},
	],

	evolveFrom: {
		ja: "トランセル",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [12],
};

export default card;
