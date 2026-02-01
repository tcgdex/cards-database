import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ランクルス",
	},

	illustrator: "satoma",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		ja: "ランクルス 同士が 握手すると 脳みそが ネットワークで つながり サイコパワーが 増幅されるのだ。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "さいぼうかくせい" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のベンチポケモン全員からそれぞれ進化するカードを、自分の山札から1枚ずつ選び、それぞれにのせて進化させる。そして山札を切る。",
			},
		},
		{
			name: { ja: "エボルラリアット" },
			damage: "40+",
			cost: ["Colorless"],
			effect: { ja: "自分の場の進化ポケモンの数×40ダメージ追加。" },
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [{ type: "holo" }],

	evolveFrom: {
		ja: "ダブラン",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [579],

	thirdParty: {
		cardmarket: 829369,
		tcgplayer: 636479,
	},
};

export default card;
