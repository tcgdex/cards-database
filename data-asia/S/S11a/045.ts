import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "かがやくジラーチ",
		'zh-tw': "光輝基拉祈",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		ja: "１０００年間で ７日だけ 目を 覚まし どんな 願い事でも かなえる 力を 使うという。",
		'zh-tw': "據說牠在１０００年之中只有７天時間會醒過來，使用能實現任何願望的力量。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ねがいをたくす",
				'zh-tw': "託付願望",
			},
			effect: {
				ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けてきぜつしたとき、自分の山札から好きなカードを3枚まで選び、手札に加える。そして山札を切る。",
				'zh-tw': "當這隻寶可夢在戰鬥場上受到對手的寶可夢招式的傷害而【氣絕】時，從自己的牌庫任意選擇最多3張卡加入手牌。並且重洗牌庫。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ほしのわざわい",
				'zh-tw': "星星降災",
			},
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを2回投げ、すべてオモテなら、相手のバトルポケモンをきぜつさせる。",
				'zh-tw': "擲2次硬幣，若全部為正面，則將對手的戰鬥寶可夢【氣絕】。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673043,
				tcgplayer: 570808,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Radiant Rare",
	dexId: [385],
};

export default card;
