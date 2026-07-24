import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "ユリーカ",
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		ja: "このカードは、場にスタジアムが出ていなければ使えない。場に出ているスタジアムをトラッシュする。この番、自分の「ジガルデGX」は、自分がすでにGXワザを使っていても、GXワザが使える。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559647,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Ultra Rare",
};

export default card;
