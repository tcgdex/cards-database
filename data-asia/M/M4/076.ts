import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ジプソ",
	},

	illustrator: "Yusuke Ohmura",
	category: "Trainer",
	trainerType: "Supporter",

	effect: {
		ja: "自分の山札を調べ、好きなカードを5枚まで選び、手札に加える。そして山札を切る。",
	},

	variants: [{ type: "holo" }],

	regulationMark: "I",
	rarity: "ACE SPEC Rare",
};

export default card;
