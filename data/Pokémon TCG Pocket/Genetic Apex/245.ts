import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Pidgeot",
		fr: "Roucarnage",
		es: "Pidgeot",
		it: "Pidgeot",
		de: "Tauboss",
		'pt-br': "Pidgeot",
		ko: "피죤투"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	stage: "Stage2",
	evolveFrom: {
		en: "Pidgeotto"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Drive Off",
			fr: "Déroute",
			es: "Ahuyentar",
			it: "Filar Via",
			de: "Wegtreiben",
			'pt-br': "Rechaçar",
			ko: "쫓아내기"
		},

		effect: {
			en: "Once during your turn, you may switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			fr: "Une fois pendant votre tour, vous pouvez échanger le Pokémon Actif de votre adversaire contre l'un de ses Pokémon de Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			es: "Una vez durante tu turno, puedes mover el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			it: "Una sola volta durante il tuo turno, puoi spostare il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			de: "Einmal während deines Zuges kannst du das Aktive Pokémon deines Gegners auf seine Bank auswechseln. (Dein Gegner wählt das neue Aktive Pokémon.)",
			'pt-br': "Uma vez durante o seu turno, você poderá mandar o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
			ko: "자신의 차례에 1번 사용할 수 있다. 상대의 배틀 포켓몬을 벤치 포켓몬과 교체한다. (배틀필드로 내보낼 포켓몬은 상대가 선택한다.)"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Wing Attack",
			fr: "Cru-Ailes",
			es: "Ataque Ala",
			it: "Attacco d'Ala",
			de: "Flügelschlag",
			'pt-br': "Ataque de Asa",
			ko: "날개치기"
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
		en: "When hunting, it skims the surface of water at high speed to pick off unwary prey such as Magikarp.",
		fr: "Il survole la surface de l'eau pour repérer\nune proie et plonge en piqué pour l'attraper.",
		es: "Cuando caza, vuela muy deprisa a ras del agua\ny sorprende a inocentes presas como Magikarp.",
		it: "Quando caccia, vola velocissimo sul pelo dell'acqua\ne cattura ignare prede come Magikarp.",
		de: "Dieses Pokémon schnellt bei der Jagd blitzschnell\nunter Wasser, um seine ahnungslose Beute zu fangen.",
		'pt-br': "Quando caça, bate na superfície da água em\nalta velocidade para capturar presas desavisadas,\ncomo Magikarp.",
		ko: "먹이를 찾을 때 수면을\n아슬아슬하게 미끄러지듯 날아\n잉어킹 등을 움켜잡는다."
	}
}

export default card
