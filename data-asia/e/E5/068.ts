import { Card } from "../../../interfaces"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		ja: "スタントラー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [234],
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "脅かす",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、相手の手を見てください。彼または彼女がそこにトレーナーカードを持っている場合は、それらの1つを選択してください。あなたの対戦相手はそのカードを彼または彼女のデッキにシャッフルします。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "アントラースワイプ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は防御ポケモンに20のダメージを与えます（脱力や抵抗を適用しないでください）。テールと相手がベンチ付きポケモンを持っている場合、そのうち1つを選択し、この攻撃は20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
