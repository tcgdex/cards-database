import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ドジョッチ",
		'zh-tw': "泥泥鰍",
		'th-th': "โดโจทช์",
		'id-id': "Barboach"
	},

	illustrator: "Scav",
	rarity: "Common",
	category: "Pokemon",
	dexId: [339],
	hp: 70,
	types: ["Fighting"],

	description: {
		'ja-jp': "２本のヒゲは 敏感なレーダー。 泥で 濁った 水の 中でも 獲物の 位置を 察知するぞ。",
		'zh-tw': "２根鬍子是靈敏的雷達。即使在因為泥濘而渾濁的水中， 也能偵查到獵物的位置。",
		'th-th': "หนวด 2 เส้นเป็นเรดาร์ที่ละเอียดอ่อน ตรวจจับตำแหน่งของเหยื่อได้แม้ในน้ำขุ่นโคลน",
		'id-id': "Dua kumis Barboach adalah radar yang sensitif. Pokémon ini mendeteksi letak keberadaan mangsanya meskipun berada di dalam air berlumpur."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'ja-jp': "かくれる",
			'zh-tw': "躲藏",
			'th-th': "ซ่อน",
			'id-id': "Bersembunyi"
		},

		effect: {
			'ja-jp': "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจและเอฟเฟกต์ของท่าต่อสู้",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan dan efek akibat serangan."
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'ja-jp': "どろかけ",
			'zh-tw': "擲泥",
			'th-th': "สาดโคลน",
			'id-id': "Semprotan Lumpur"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705342,
				tcgplayer: 565900,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
}

export default card