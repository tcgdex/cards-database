import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ウソッキー",
		'zh-tw': "樹才怪",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "樹木の素振りするも 幼子も 欺けず。 その体は 樹皮ならず 岩の手触り。 水を ひどく嫌う習性 特記に値す。",
		'zh-tw': "偽裝成樹木，卻連幼童也難以騙過。體表並非樹皮，觸感彷若岩石。 值得一提的是，此寶可夢極其怕水。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ねらいおとす",
				'zh-tw': "狙落",
			},
			damage: 20,
			cost: ["Fighting"],
			effect: {
				ja: "ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。",
				'zh-tw': "在造成傷害前，將對手的戰鬥寶可夢身上附加的「寶可夢道具」丟棄。",
			},
		},
		{
			name: {
				ja: "かこいこむ",
				'zh-tw': "圍困",
			},
			damage: 50,
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656345,
				tcgplayer: 570700,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577115,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [185],
};

export default card;
