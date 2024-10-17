import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "シルシュルー"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	dexId: [944],
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "縄張りに 敵が 近づかないよう 刺激臭がする 毒液で 巣の まわりに 図形を 描く。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "しるをとばす"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card