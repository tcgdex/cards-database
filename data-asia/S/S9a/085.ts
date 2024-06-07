import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒスイ バクフーンVSTAR"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Psychic"],
	stage: "VMAX",

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			ja: "ホロウフレイム"
		},

		damage: 180,

		effect: {
			ja: "ダメカン3個を、相手のベンチポケモンに好きなようにのせる。"
		}
	}, {
		cost: ["Psychic"],

		name: {
			ja: "カゲロウスター"
		},

		effect: {
			ja: "相手のバトルポケモンにのっているダメカンが4個なら、そのポケモンをきぜつさせる。［対戦中、自分はVSTARパワーを1回しか使えない。］"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2
}

export default card