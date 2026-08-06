import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "バドレックス",
		'zh-tw': "蕾冠王",
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "癒しと 恵みの 力を もつ 慈愛に 満ちた ポケモン。 はるか むかし ガラルに 君臨していた。",
		'zh-tw': "擁有治癒與賜恩之力，且滿懷慈愛的寶可夢。在遠古時代曾統治伽勒爾。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "おうのさいはい",
				'zh-tw': "王之號令",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "のぞむなら、自分の山札から好きなカードを2枚まで選び、手札に加える。そして山札を切る。",
				'zh-tw': "若希望，從自己的牌庫任意選擇最多2張卡加入手牌。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "ブルームシャイン",
				'zh-tw': "綻放閃耀",
			},
			damage: 90,
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "自分のポケモン全員のHPを、それぞれ「20」回復する。",
				'zh-tw': "將自己的所有寶可夢各恢復「20」HP。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673008,
				tcgplayer: 570774,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [898],
};

export default card;
