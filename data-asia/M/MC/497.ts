import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "メタング",
	},

	illustrator: "Nobuhiro Imagawa",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		ja: "２匹の ダンバルが 磁力で くっついた。 ２つの 脳みそにより サイコパワーは ２倍に 強化。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "メタルメーカー" },
			effect: {
				ja: "自分の番に1回使える。自分の山札を上から4枚見て、その中から「基本[M]エネルギー」を好きなだけ選び、自分のポケモンに好きなようにつける。残りのカードはすべてウラにして切り、山札の下にもどす。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ビーム" },
			damage: 60,
			cost: ["Metal", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863799,
			},
		},
	],

	evolveFrom: {
		ja: "ダンバル",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [375],
};

export default card;
