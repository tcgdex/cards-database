import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のソーナンス",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "真っ黒な 尻尾を 隠すため 暗闇で ひっそりと 生きている。 自分からは 攻撃しない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ロケットミラー" },
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "自分のベンチの「ロケット団のポケモン」を1匹選び、選んだポケモンにのっているダメカンをすべて、相手のバトルポケモンにのせ替える。",
			},
		},
		{
			name: { ja: "とびだしヘッド" },
			damage: 70,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 821935,
				tcgplayer: 629044,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [202],
};

export default card;
