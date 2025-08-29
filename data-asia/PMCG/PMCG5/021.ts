import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "MistyのPsyduck",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [54],
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "特に",
			},
			effect: {
				ja: "3コインをフリップします。正確に1がヘッドの場合は、カードを描きます。正確に2がヘッドの場合、この攻撃は20のダメージを与えます。 3つすべてがヘッドの場合は、防御ポケモンの攻撃の1つを選択します。 MistyのPsyduckは、そのエネルギーコストを除いて攻撃するコピーをコピーします。 （ディフェンディングポケモンがどんなタイプであっても、MistyのPsyduckのタイプはまだ水です。）",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
