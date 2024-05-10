import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ピジョット",
		'zh-tw': "大比鳥",
		th: "พีเจียต",
		id: "Pidgeot"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [18],
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "美しい 羽を 広げて 相手を 威嚇する。 マッハ２で 空を 飛び回る。",
		'zh-tw': "會展開美麗的翅膀威嚇對手。 能以２馬赫的速度在空中四處飛行。",
		th: "กางปีกอันสวยงามออกเพื่อข่มขวัญศัตรู บินไปมาบนท้องฟ้าด้วยความเร็วเสียง 2 มัค",
		id: "Pidgeot mengintimidasi lawannya dengan melebarkan sayapnya yang indah. Pokémon ini terbang mengelilingi langit dengan kecepatan 2 Mach."
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "はばたく",
			'zh-tw': "羽擊",
			th: "ตีปีก",
			id: "Mengepak"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "そらをとぶ",
			'zh-tw': "飛翔",
			th: "บินขึ้น",
			id: "Terbang"
		},

		damage: 150,

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。オモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกก้อย ท่าต่อสู้นี้จะล้มเหลว ถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจและเอฟเฟกต์ของท่าต่อสู้",
			id: "Lempar koin 1 kali. Jika hasilnya sisi belakang, serangan ini gagal. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan dan efek akibat serangan."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card