import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "クレセリア",
		'zh-tw': "克雷色利亞",
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "飛行するときは ベールのような 羽から 光る 粒子を 出す。 三日月の化身と 呼ばれている。",
		'zh-tw': "飛行時，會從薄紗般的翅膀 發出閃亮的粒子。 被稱為新月的化身。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "いやしのまい",
				'zh-tw': "治癒之舞",
			},
			cost: ["Psychic"],
			effect: {
				ja: "自分のポケモン全員のHPを、それぞれ「20」回復する。",
				'zh-tw': "將自己的所有寶可夢各恢復「20」HP。",
			},
		},
		{
			name: {
				ja: "クレセントパージ",
				'zh-tw': "弦月光芒",
			},
			damage: "80+",
			cost: ["Psychic", "Psychic", "Psychic"],
			effect: {
				ja: "のぞむなら、ウラになっている自分のサイドを1枚選び、オモテにする。その場合、80ダメージ追加。（対戦が終わるまで、そのサイドはオモテのまま。）",
				'zh-tw': "若希望，選擇1張自己的反面朝上的獎賞卡，翻到正面。這個情況下，增加80點傷害。（在對戰結束前，那張獎賞卡維持正面朝上。）",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 773770,
				tcgplayer: 566272,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [488],
};

export default card;
