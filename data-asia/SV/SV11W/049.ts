import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "コジョフー",
	},

	illustrator: "Keisin",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "流れるような 連続 攻撃を 繰り出して 敵を 圧倒する。 鋭い ツメで 敵を 切り裂く。",
	},

	stage: "Basic",

	attacks: [{ name: { ja: "キック" }, damage: 20, cost: ["Fighting"] }],

	weaknesses: [{ type: "Psychic", value: "x2" }],

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
			foil: "pokeball",
		},
		{
			type: "reverse",
			foil: "masterball",
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [619],
	thirdParty: {
		cardmarket: 829052,
		tcgplayer: 636602,
	},
};

export default card;
