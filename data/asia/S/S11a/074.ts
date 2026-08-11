import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "チルタリス",
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "大空を ゆったりと 飛びながら 耳にした 者を うっとりさせる 美しい ハミングを 奏でる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "マジカルエコー" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分のベンチポケモンを1匹選び、選んだポケモンにのっているダメカンをすべて、相手のバトルポケモンにのせ替える。",
			},
		},
		{
			name: { ja: "ブラストウインド" },
			damage: 90,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673391,
				tcgplayer: 570837,
			},
		},
	],

	evolveFrom: {
		ja: "チルット",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Character Rare",
	dexId: [334],
};

export default card;
