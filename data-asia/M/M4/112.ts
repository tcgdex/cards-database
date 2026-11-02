import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "なみのりビーチ",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分のバトル場の[W]ポケモンを、ベンチの[W]ポケモンと入れ替えてよい。",
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
