import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "ミックスハーブ",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "「ミックスハーブ」は、1枚または2枚同時に使え、使った枚数によって効果が変わる。◆1枚使ったなら、自分のバトルポケモンの特殊状態を1つ回復する。◆2枚同時に使ったなら、自分のバトルポケモンのHPを「90」回復し、特殊状態もすべて回復する。（この効果は、2枚で1回はたらく。）",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558940,
			},
		},
	],

	trainerType: "Item",
	rarity: "Common",
};

export default card;
