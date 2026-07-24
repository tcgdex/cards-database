import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "オノノクス",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 150,
	types: ["Dragon"],

	description: {
		ja: "優しい 性格だが 縄張りを 荒らす 者には 容赦しない。 鉄を 切る キバで 挑みかかる。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "グラインダーアップ" },
			effect: {
				ja: "自分の番に1回使える。場に出ているスタジアムをトラッシュする。その後、自分の手札にある[炎]または[鋼]エネルギーを3枚まで、このポケモンにつける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "パワフルアックス" },
			damage: "10+",
			cost: ["Fire", "Metal"],
			effect: {
				ja: "このポケモンについている基本エネルギーの数×40ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557315,
			},
		},
	],

	evolveFrom: {
		ja: "オノンド",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [612],
};

export default card;
