import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ホウオウV",
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 230,
	types: ["Colorless"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ふっかつのほのお" },
			effect: {
				ja: "このカードがトラッシュにあるなら、自分の番に1回使えて、使ったなら、自分の番は終わる。このカードをベンチに出す。その後、自分のトラッシュから基本エネルギーを4枚まで選び、このポケモンにつける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "レインボーバーン" },
			damage: "100+",
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている基本エネルギーのタイプの数×30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673397,
				tcgplayer: 570843,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Ultra Rare",
	dexId: [250],
};

export default card;
