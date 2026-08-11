import { Card } from "../../../interfaces";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		ja: "ブーストエナジー 古代",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		ja: "このカードをつけている「古代」のポケモンは、最大HPが「+60」され、そのポケモンは、特殊状態にならず、受けている特殊状態は、すべて回復する。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752846,
				tcgplayer: 568399,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "H",
	rarity: "Uncommon",
};

export default card;
