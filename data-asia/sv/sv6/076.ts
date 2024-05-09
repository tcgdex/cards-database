import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ヒードラン"
	},

	category: "Pokemon",
	rarity: "Rare",
	illustrator: "AKIRA EGAWA",
	dexId: [485],
	hp: 140,
	types: ["Metal"],

	description: {
		ja: "火山の 洞穴に 生息。 十字の ツメを 食いこませて 壁や 天井を はい回る。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "しゃくねつボディ"
		},

		effect: {
			ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンをやけどにする。"
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			ja: "スチールバースト"
		},

		damage: "50×",

		effect: {
			ja: "このポケモンについているエネルギーをすべてトラッシュし、その枚数×50ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 4
}

export default card
