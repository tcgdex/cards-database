import { Card } from "models/database/card";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "なみのりビーチ",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいのプレイヤーは、自分の番ごとに1回、自分のバトル場の[W]ポケモンを、ベンチの[W]ポケモンと入れ替えてよい。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 877369,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "I",
	rarity: "Ultra Rare",
};

export default card;
