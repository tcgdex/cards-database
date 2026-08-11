import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ダブルドラゴンエネルギー",
	},

	illustrator: "5ban Graphics",
	category: "Energy",
	energyType: "Special",

	effect: {
		'ja-jp': "このカードは[竜]ポケモンにしかつけられず、ついているかぎりすべてのタイプのエネルギー2個ぶんとしてはたらく。（このカードが[竜]ポケモン以外についているなら、トラッシュする。）",
	},

	variants: [{ type: "normal" }],

	rarity: "Promo",
};

export default card;
