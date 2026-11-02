import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "シルヴァディGX",
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ディスクリロード" },
			effect: {
				ja: "自分の番に1回使える。自分の手札が5枚になるように、山札を引く。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "バディブレイブ" },
			damage: "50+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "この番、手札からサポートを出して使っていたなら、70ダメージ追加。",
			},
		},
		{
			name: { ja: "ホワイトナイトGX" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが「ウルトラビースト」なら、そのポケモンをきぜつさせる。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 555228,
			},
		},
	],

	evolveFrom: {
		ja: "タイプ：ヌル",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Double rare",
	dexId: [773],

	suffix: "GX",
};

export default card;
