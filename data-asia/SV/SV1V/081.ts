import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		ja: "スコヴィラン"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	category: "Pokemon",
	dexId: [952],
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "グリーンヘッドは 辛み成分に 脳が 刺激されて 凶暴化。 暴れだすと 手がつけられない。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ホットバイト"
		},

		damage: 20,

		effect: {
			ja: "相手のバトルポケモンをやけどにする。"
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "げきからヒーハー"
		},

		damage: "90＋",

		effect: {
			ja: "このポケモンにエネルギーがついているなら、90ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693156,
				tcgplayer: 568307,
			},
		},
	],

	retreat: 1
}

export default card