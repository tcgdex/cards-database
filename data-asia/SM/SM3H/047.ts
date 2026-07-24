import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "ロトム図鑑 ポケファインダーモード",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から4枚見る。そのカードを好きな順番に入れ替えて、山札の上にもどす。または、そのカードを山札にもどして切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561111,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
