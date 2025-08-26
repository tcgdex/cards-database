import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "qwilfish",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [211],
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "とんでもない",
			},
			effect: {
				ja: "Qwilfishがあなたのアクティブなポケモンであり、相手の攻撃によって損傷を受けている場合（Qwilfishがノックアウトされたとしても）、尾が出るまでコインをひっくり返します。各ヘッドについて、攻撃するポケモンに1つのダメージカウンターを置きます。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "スタンポイズン",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御するポケモンは今や麻痺し、毒されます。",
			},
			damage: 10,
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
