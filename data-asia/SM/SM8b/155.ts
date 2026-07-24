import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ノボリとクダリ",
	},

	illustrator: "Megumi Mizutani",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から1枚見て、もとにもどす。その後、2つの効果から1つを選んで使う。◆ 自分の手札をすべてトラッシュし、山札を5枚引く。◆ 自分の手札をすべてトラッシュし、山札を下から5枚引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551271,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Ultra Rare",
};

export default card;
