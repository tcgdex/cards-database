import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "クロバット",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "キバが 鋭いので 暗闇で 噛まれ 血を 吸われても 痛みが なくて すぐに 気が つかない。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "おとがくれ" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。次の相手の番の終わりまで、このポケモンは、相手のポケモンからワザのダメージや効果を受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "バッドポイズン" },
			damage: 60,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。このどくでのせるダメカンの数は4個になる。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558136,
			},
		},
	],

	evolveFrom: {
		ja: "ゴルバット",
	},

	retreat: 0,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [169],
};

export default card;
