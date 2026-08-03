import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "チルタリス",
		'zh-tw': "七夕青鳥",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "大空を ゆったりと 飛びながら 耳にした 者を うっとりさせる 美しい ハミングを 奏でる。",
		'zh-tw': "會一邊在天空中悠然飛翔，一邊哼唱出令人心醉神迷的美妙旋律。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "マジカルエコー",
				'zh-tw': "魔法迴響",
			},
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分のベンチポケモンを1匹選び、選んだポケモンにのっているダメカンをすべて、相手のバトルポケモンにのせ替える。",
				'zh-tw': "選擇自己的1隻備戰寶可夢，將所選的寶可夢身上放置的傷害指示物，全部改放於對手的戰鬥寶可夢身上。",
			},
		},
		{
			name: {
				ja: "ブラストウインド",
				'zh-tw': "爆破之風",
			},
			damage: 90,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673055,
				tcgplayer: 570820,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570902,
			},
		},
	],

	evolveFrom: {
		ja: "チルット",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [334],
};

export default card;
