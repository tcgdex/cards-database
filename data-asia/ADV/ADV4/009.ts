import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "ヘラクロス",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [214],
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "余分なドロー",
			},
			effect: {
				ja: "対戦相手がポケモンエクスをプレイしている場合は、デッキを最大2匹の草エネルギーカードで検索し、ヘラクロスに取り付けます。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: {
				ja: "Sonicboom",
			},
			effect: {
				ja: "この攻撃の損傷は、脱力感や抵抗の影響を受けません。",
			},
			damage: 50,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
