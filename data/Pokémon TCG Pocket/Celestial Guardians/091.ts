import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Hariyama",
		fr: "Hariyama",
		es: "Hariyama",
		it: "Hariyama",
		de: "Hariyama",
		'pt-br': "Hariyama",
		ko: "하리뭉"
	},

	illustrator: "Miki Tanaka",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [297],
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		en: "Makuhita"
	},

	description: {
		en: "It loves challenging others to tests of strength. It has the power to stop a train with a slap.",
		fr: "Il aime s'adonner à des concours de force et\nil est capable d'arrêter un train lancé à pleine\nvitesse d'un simple coup du plat de la main.",
		es: "Le encanta medir sus fuerzas. Es tan fuerte que\npuede detener un tren en marcha de un manotazo.",
		it: "Adora le gare di forza. Sarebbe capace di fermare\nun treno in corsa con un colpo della mano.",
		de: "Dieses Pokémon liebt ein ordentliches Kräftemessen.\nEs ist stark genug, um mit der flachen Hand einen\nrasenden Zug aufzuhalten.",
		'pt-br': "Ele adora desafiar os outros em testes de força.\nEle tem o poder de parar um trem com um tapa.",
		ko: "힘겨루기를 매우 좋아한다.\n달리는 열차를 손바닥치기로\n멈추게 하는 파워를 가졌다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Push Out",
			fr: "Expulsion",
			es: "Expulsar",
			it: "Spingi Fuori",
			de: "Verdrängen",
			'pt-br': "Expulsar",
			ko: "밀어내기"
		},

		damage: 50,
		cost: ["Fighting", "Colorless"],

		effect: {
			en: "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			fr: "Échangez le Pokémon Actif de votre adversaire avec l'un de ses Pokémon de Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			es: "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			it: "Sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			de: "Wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)",
			'pt-br': "Mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
			ko: "상대의 배틀 포켓몬을 벤치 포켓몬과 교체한다. (배틀필드로 내보낼 포켓몬은 상대가 선택한다.)"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["solgaleo", "lunala"]
}

export default card