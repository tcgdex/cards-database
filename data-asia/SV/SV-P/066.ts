import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "エーフィ",
		'zh-tw': "天然鳥",
	},

	illustrator: "YU NAGABA",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "相手の 動きを 予知するとき ふたまたに なっている 尻尾の 先は 微妙に 揺れている。",
		'zh-tw': "能夠看穿過去和未來。日復一日注視著太陽動向的奇異寶可夢。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "サイケこうせん",
				'zh-tw': "超念力",
			},
			damage: 80,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 708481,
				tcgplayer: 587824,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [196],
};

export default card;
