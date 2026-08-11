import { Card } from "models/database/card"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "電極-036/092",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [101],
	hp: 70,
	types: ["Lightning"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				'ja-jp': "スーパーダイナモ",
			},
			effect: {
				'ja-jp': "ターン中に<em>（攻撃の前）</em> </em>、電極がアクティブなポクモンの場合、コインをひっくり返すことができます。頭の場合は、廃棄パイルから稲妻エネルギーカードを選択し、1つのポクモンに取り付けます。電極が特別な状態の影響を受ける場合、この電力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Lightning", "Colorless"],
			name: {
				'ja-jp': "迅速",
			},
			effect: {
				'ja-jp': "この攻撃の損傷は、脱力感、抵抗、pok？-Powers、pok？-bodies、または防御ポケモンに対するその他の影響の影響を受けません。",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
