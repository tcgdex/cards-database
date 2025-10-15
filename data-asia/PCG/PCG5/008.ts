import { Card } from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "Wurmple",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [265],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ポイズンの見返り",
			},
			effect: {
				ja: "Wurmpleがあなたのアクティブなポカモンであり、対戦相手の攻撃によって損傷を受けた場合（Wurmpleがノックアウトされたとしても）、攻撃するPokã©Monは現在毒されています。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "文字列プル",
			},
			effect: {
				ja: "対戦相手のベンチポケモンの1つを防御ポケモンの1つに切り替えます。対戦相手は、防御するポケモンを選択して切り替えます。",
			},
		},
	],

	retreat: 1,

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
