import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "コバルオンGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "メタルシンボル" },
			effect: {
				ja: "このポケモンがいるかぎり、[鋼]エネルギーがついている自分のポケモン全員は、特殊状態にならず、受けている特殊状態は、すべて回復する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "デュエルセーバー" },
			damage: "50+",
			cost: ["Metal", "Metal"],
			effect: {
				ja: "場にスタジアムが出ているなら、60ダメージ追加。",
			},
		},
		{
			name: { ja: "てつのおきてGX" },
			cost: ["Colorless"],
			effect: {
				ja: "次の相手の番、相手のポケモン全員はワザが使えない。（新しく出したポケモンも含む。）［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558630,
			},
		},
	],

	retreat: 1,
	rarity: "Ultra Rare",
	dexId: [638],

	suffix: "GX",
};

export default card;
