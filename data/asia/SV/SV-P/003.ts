import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ウインディ",
		'zh-tw': "呆火鱷",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "草原を 駆け抜ける 様子は 人々の 心を 虜にしたと 昔の 絵巻に 記されていた。",
		'zh-tw': "會躺在溫熱的岩石上， 用四角形的鱗片所吸收的 熱能來製造火之能量。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "かみくだく",
				'zh-tw': "火焰灼燒",
			},
			damage: 30,
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
			},
		},
		{
			name: { ja: "ほのおのたてがみ" },
			damage: 120,
			cost: ["Fire", "Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 692249,
				tcgplayer: 587760,
			},
		},
	],

	evolveFrom: {
		ja: "ガーディ",
	},

	retreat: 3,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [59],
};

export default card;
