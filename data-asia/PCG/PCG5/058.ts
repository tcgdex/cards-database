import { Card } from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "Armaldo Ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [348],
	hp: 160,
	types: ["Fighting"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "デュアルアーマー",
			},
			effect: {
				ja: "Armaldo Exに反応エネルギーカードが付いている限り、Armaldo Exは草と戦闘タイプの両方です。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "スパイラルドレイン",
			},
			effect: {
				ja: "Armaldo Exから2つのダメージカウンターを削除します。",
			},
			damage: 40,
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				ja: "渦チョップ",
			},
			effect: {
				ja: "防御ポケモンに抵抗がある場合、この攻撃の基本ダメージは70ではなく100です。",
			},
			damage: 70,
		},
	],

	retreat: 3,

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
