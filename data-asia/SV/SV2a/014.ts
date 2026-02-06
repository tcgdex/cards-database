import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "コクーン",
		'zh-tw': "鐵殼蛹",
		th: "โคคูน",
		id: "Kakuna"
	},

	illustrator: "nisimono",
	rarity: "Common",
	category: "Pokemon",
	dexId: [14],
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "天敵に 見つからないように 葉っぱの 裏や 枝の すきまに 隠れて 進化の ときを 待つ。",
		'zh-tw': "為了不被天敵發現， 會躲在葉子背面或樹枝的間隙中， 等待進化的時刻到來。",
		th: "จะคอยหลบซ่อนตัวตามซอกกิ่งไม้หรือหลังใบไม้เพื่อไม่ให้ศัตรูทางธรรมชาติเห็น และรอเวลาที่จะวิวัฒนาการ",
		id: "Kakuna bersembunyi di balik daun dan celah di antara batang pohon agar tidak ditemukan oleh musuh alaminya, dan menanti waktu evolusi."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "さなぎガード",
			'zh-tw': "蛹之防守",
			th: "ป้องกันดักแด้",
			id: "Pupa Pelindung"
		},

		effect: {
			ja: "このポケモンは、相手のポケモンが使うワザの効果を受けない。",
			'zh-tw': "這隻寶可夢不會受到對手的寶可夢使用招式的效果的影響。",
			th: "โปเกมอนนี้ จะไม่ได้รับเอฟเฟกต์ของท่าต่อสู้ที่โปเกมอนฝ่ายตรงข้ามใช้",
			id: "Pokémon ini tidak menerima efek akibat serangan yang digunakan oleh Pokémon lawan."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "チクッ",
			'zh-tw': "刺痛",
			th: "ต่อย",
			id: "Sengat"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719456
	}
}

export default card