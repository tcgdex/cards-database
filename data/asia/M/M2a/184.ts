import { Card } from "models/database/card";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゼロの大空洞",
	},

	illustrator: "MARINA Chikazawa",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の場に「テラスタル」のポケモンがいるプレイヤーが、ベンチに出せるポケモンの数は8匹になる。（このカードがトラッシュされたときか、自分の場に「テラスタル」のポケモンがいなくなったとき、ベンチが5匹になるまでトラッシュする。おたがいにトラッシュするなら、このカードの持ち主から行う。）",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861427,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "H",
	rarity: "None",
};

export default card;
