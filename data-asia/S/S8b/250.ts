import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ザシアンV",
	},

	illustrator: "aoki",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ふとうのつるぎ" },
			effect: {
				ja: "自分の番に1回使えて、使ったなら、自分の番は終わる。自分の山札を上から3枚見て、その中から[鋼]エネルギーを好きなだけ選び、このポケモンにつける。残りのカードは手札に加える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ブレイブキャリバー" },
			damage: 230,
			cost: ["Metal", "Metal", "Metal"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587048,
				tcgplayer: 571502,
			},
		},
	],

	retreat: 2,
	regulationMark: "D",
	rarity: "Character Super Rare",
	dexId: [888],
};

export default card;
