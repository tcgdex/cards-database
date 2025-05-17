import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Solgaleo ex",
		fr: "Solgaleo-ex",
		es: "Solgaleo ex",
		it: "Solgaleo-ex",
		de: "Solgaleo-ex",
		'pt-br': "Solgaleo ex",
		ko: "솔가레오 ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],

	evolveFrom: {
		en: "Cosmoem"
	},

	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Rising Road",
			fr: "Ascension Solaire",
			es: "Camino Ascendente",
			it: "Ascesa Rapida",
			de: "Aufstiegspfad",
			'pt-br': "Via Ascendente",
			ko: "라이징 로드"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is on your Bench, you may switch it with your Active Pokémon.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur votre Banc, vous pouvez l'échanger avec votre Pokémon Actif.",
			es: "Una vez durante tu turno, si este Pokémon está en tu Banca, puedes cambiarlo por tu Pokémon Activo.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è nella tua panchina, puoi scambiarlo con il tuo Pokémon attivo.",
			de: "Einmal während deines Zuges, wenn sich dieses Pokémon auf deiner Bank befindet, kannst du es gegen dein Aktives Pokémon austauschen.",
			'pt-br': "Uma vez durante o seu turno, se este Pokémon estiver no seu Banco, você poderá trocá-lo pelo seu Pokémon Ativo.",
			ko: "이 포켓몬이 벤치에 있다면 자신의 차례에 1번 사용할 수 있다. 이 포켓몬을 배틀 포켓몬과 교체한다."
		}
	}],

	attacks: [{
		name: {
			en: "Sol Breaker",
			fr: "Brèche Solaire",
			es: "Brecha Solar",
			it: "Schianto Solare",
			de: "Solarbrecher",
			'pt-br': "Quebra-sol",
			ko: "솔브레이크"
		},

		damage: 120,
		cost: ["Metal", "Metal"],

		effect: {
			en: "This Pokémon also does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
			es: "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 10 danni a se stesso.",
			de: "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu.",
			'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			ko: "이 포켓몬에게도 10데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["solgaleo"]
}

export default card