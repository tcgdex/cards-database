import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "エンニュート",
		'zh-tw': "焰后蜥",
	},

	illustrator: "aoki",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "エンニュートは メスしか いない。 フェロモンガスを 発生させて オスの ヤトウモリを 魅了する。",
		'zh-tw': "焰后蜥只有雌性。會釋放出費洛蒙氣體，讓雄性的夜盜火蜥為之著迷。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "しっぽでまどわす",
				'zh-tw': "擺尾蠱惑",
			},
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
				'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			},
		},
		{
			name: {
				ja: "ほのおでこがす",
				'zh-tw': "火焰灼燒",
			},
			damage: 60,
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
				'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673018,
				tcgplayer: 570784,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570874,
			},
		},
	],

	evolveFrom: {
		ja: "ヤトウモリ",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [758],
};

export default card;
