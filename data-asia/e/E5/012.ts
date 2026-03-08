import { Card } from "../../../interfaces"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		ja: "venomoth",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [49],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "癒しのほこり",
			},
			effect: {
				ja: "2つのコインをフリップします。各ヘッドについて、各ポケモンから1つのダメージカウンターを取り外します。ポケモンがヘッド数よりもダメージカウンターが少ない場合は、それらすべてを削除します。",
			},
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				ja: "ミラクルパウダー",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、特別な状態を選択します（眠り、燃やし、混乱し、麻痺し、毒されます）。防御ポケモンは現在、その特別な状態の影響を受けています。",
			},
			damage: 30,
		},
	],


	variants: [
		{
			type: "normal",
			subtype: "unlimited",

		},
		{
			type: "normal",
			stamp: ["1st Edition"],
		},
	],
};

export default card
