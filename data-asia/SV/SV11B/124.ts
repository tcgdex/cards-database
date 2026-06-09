import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ダブラン",
	},

	illustrator: "Kedamahadaitai Yawarakai",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "２つに 分裂した 脳みそを 持っているため いきなり 違う 行動を とることが あるのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "さいぼうしんか" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の場のポケモン1匹から進化するカードを、自分の山札から1枚選び、そのポケモンにのせて進化させる。そして山札を切る。",
			},
		},
		{ name: { ja: "しるをとばす" }, damage: 30, cost: ["Colorless"] },
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [{ type: "holo" }],

	evolveFrom: {
		ja: "ユニラン",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [578],

	thirdParty: {
		cardmarket: 829368,
		tcgplayer: 636478,
	},
};

export default card;
