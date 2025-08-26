import { Card } from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		ja: "Smeargle",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [235],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "スケッチ",
			},
			effect: {
				ja: "防御するポケモンが最後のターンを攻撃し、その攻撃中にSmeargleがプレイ中だった場合、その攻撃を除いて、その攻撃を除いてその攻撃をSmeargleで攻撃するために必要なものを除いてコピーします。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
