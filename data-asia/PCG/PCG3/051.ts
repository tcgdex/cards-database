import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "ダークサンドスラッシュ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [28],
	hp: 70,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ポイズンの見返り",
			},
			effect: {
				ja: "ダークサンドスラッシュがアクティブなポケモンであり、相手の攻撃によって損傷を受けている場合（暗いサンドスラッシュがノックアウトされたとしても）、攻撃するポケモンは現在毒されています。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "迅速",
			},
			effect: {
				ja: "この攻撃の損傷は、脱力感、抵抗、ポケの提唱、ポケボディ、または防御ポケモンに対するその他の影響の影響を受けません。",
			},
			damage: 50,
		},
	],


	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
