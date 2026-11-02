import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "カスタムキャッチャー",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "「カスタムキャッチャー」は、1枚または2枚同時に使え、使った枚数によって効果が変わる。◆1枚使ったなら、自分の手札が3枚になるように、山札を引く。◆2枚同時に使ったなら、相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。（この効果は、2枚で1回はたらく。）",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558960,
			},
		},
	],

	trainerType: "Item",
	rarity: "Secret Rare",
};

export default card;
