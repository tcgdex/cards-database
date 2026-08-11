import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pidgeot",
		'fr-fr': "Roucarnage",
		'es-es': "Pidgeot",
		'it-it': "Pidgeot",
		'de-de': "Tauboss",
		'pt-br': "Pidgeot",
		'ko-kr': "피죤투"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",

	dexId: [18],
	hp: 130,
	types: ["Colorless"],
	stage: "Stage2",

	evolveFrom: {
		'en-us': "Pidgeotto"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Drive Off",
			'fr-fr': "Déroute",
			'es-es': "Ahuyentar",
			'it-it': "Filar Via",
			'de-de': "Wegtreiben",
			'pt-br': "Rechaçar",
			'ko-kr': "쫓아내기"
		},

		effect: {
			'en-us': "Once during your turn, you may switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			'fr-fr': "Une fois pendant votre tour, vous pouvez échanger le Pokémon Actif de votre adversaire contre l'un de ses Pokémon de Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			'es-es': "Una vez durante tu turno, puedes mover el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			'it-it': "Una sola volta durante il tuo turno, puoi spostare il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			'de-de': "Einmal während deines Zuges kannst du das Aktive Pokémon deines Gegners auf seine Bank auswechseln. (Dein Gegner wählt das neue Aktive Pokémon.)",
			'pt-br': "Uma vez durante o seu turno, você poderá mandar o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
			'ko-kr': "자신의 차례에 1번 사용할 수 있다. 상대의 배틀 포켓몬을 벤치 포켓몬과 교체한다. (배틀필드로 내보낼 포켓몬은 상대가 선택한다.)"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Wing Attack",
			'fr-fr': "Cru-Ailes",
			'es-es': "Ataque Ala",
			'it-it': "Attacco d'Ala",
			'de-de': "Flügelschlag",
			'pt-br': "Ataque de Asa",
			'ko-kr': "날개치기"
		},

		damage: "70"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Star",

	description: {
		'en-us': "When hunting, it skims the surface of water at high speed to pick off unwary prey such as Magikarp.",
		'fr-fr': "Il survole la surface de l'eau pour repérer\nune proie et plonge en piqué pour l'attraper.",
		'es-es': "Cuando caza, vuela muy deprisa a ras del agua\ny sorprende a inocentes presas como Magikarp.",
		'it-it': "Quando caccia, vola velocissimo sul pelo dell'acqua\ne cattura ignare prede come Magikarp.",
		'de-de': "Dieses Pokémon schnellt bei der Jagd blitzschnell\nunter Wasser, um seine ahnungslose Beute zu fangen.",
		'pt-br': "Quando caça, bate na superfície da água em\nalta velocidade para capturar presas desavisadas,\ncomo Magikarp.",
		'ko-kr': "먹이를 찾을 때 수면을\n아슬아슬하게 미끄러지듯 날아\n잉어킹 등을 움켜잡는다."
	},

	boosters: ["mewtwo"]
}

export default card
