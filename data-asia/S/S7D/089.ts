import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "結晶の洞窟",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分の[鋼]ポケモンと[竜]ポケモン全員のHPを、それぞれ「30」回復してよい。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 572071,
				tcgplayer: 569412,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "E",
	rarity: "Secret Rare",
};

export default card;
