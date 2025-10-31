import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "コジョフー",
	},

	illustrator: "Iori Suzuki",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "流れるような 連続 攻撃を 繰り出して 敵を 圧倒する。 鋭い ツメで 敵を 切り裂く。",
	},

	stage: "Basic",

	attacks: [{ name: { ja: "キック" }, damage: 20, cost: ["Fighting"] }],

	weaknesses: [{ type: "Psychic", value: "x2" }],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [619],
};

export default card;
