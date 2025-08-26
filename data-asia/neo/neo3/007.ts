import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "ジャンプラフ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [189],
	hp: 70,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "進化の胞子",
			},
			effect: {
				ja: "ホッピップとスキップルームの数を選択してください。次に、この方法で選択したポケモンごとに、そのポケモンから進化するカードをデッキで検索し、そのポケモンに取り付けることができます。 （これはそれらのポケモンを進化させるものとしてカウントされます。）その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Grass"],
			name: {
				ja: "SolarBeam",
			},
			damage: 30,
		},
	],


	variants: [
		{
			type: "holo",
		},
	],
};

export default card
