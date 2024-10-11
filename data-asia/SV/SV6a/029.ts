import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		ja: "クロバット"
	},

	illustrator: "Nisota Niso",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [169],
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "両足が 羽に 変化。 音を たてずに 高速で 飛び 獲物の うなじに キバを たてる。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "かげのつかい"
		},

		effect: {
			ja: "この番、手札から「アンズの秘技」を出して使っていたなら、自分の番に1回使える。自分の手札が8枚になるように、山札を引く。"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "どくどくのキバ"
		},

		damage: 120,

		effect: {
			ja: "相手のバトルポケモンをどくにする。このどくでのせるダメカンの数は2個になる。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 0
}

export default card