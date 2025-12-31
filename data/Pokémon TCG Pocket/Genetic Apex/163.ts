import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Grapploct",
		fr: "Krakos",
		es: "Grapploct",
		it: "Grapploct",
		de: "Kaocto",
		'pt-br': "Grapploct",
		ko: "케오퍼스"
	},

	illustrator: "kurumitsu",
	category: "Pokemon",

	dexId: [853],
	hp: 130,
	types: ["Fighting"],
	stage: "Stage1",

	evolveFrom: {
		en: "Clobbopus",
		fr: "Poulpaf",
		es: "Clobbopus",
		it: "Clobbopus",
		pt: "Clobbopus",
		de: "Klopptopus"
	},

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Knock Back",
			fr: "Dégagement",
			es: "Devolver Noqueo",
			it: "Allontanato",
			de: "Schlag versetzen",
			'pt-br': "Jogar de Volta",
			ko: "힘껏후려치기"
		},

		effect: {
			en: "Switch out your opponent’s Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			fr: "Échangez le Pokémon Actif de votre adversaire avec l'un de ses Pokémon de Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			es: "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			it: "Sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			de: "Wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)",
			'pt-br': "Mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
			ko: "상대의 배틀 포켓몬을 벤치 포켓몬과 교체한다. (배틀필드로 내보낼 포켓몬은 상대가 선택한다.)"
		},

		damage: "70"
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Two Diamond",

	description: {
		en: "A body made up of nothing but muscle makes the grappling moves this Pokémon performs with its tentacles tremendously powerful.",
		fr: "Son corps est un amas de muscles. La puissance des prises\nd'étranglement qu'il exécute avec ses tentacules est saisissante.",
		es: "Todo su cuerpo es una mole de puro músculo.\nUtiliza los tentáculos para ejecutar técnicas de\nestrangulamiento con una formidable potencia.",
		it: "Il suo corpo è un ammasso di muscoli.\nÈ in grado di stritolare con una potenza\nformidabile grazie ai suoi tentacoli.",
		de: "Sein Körper besteht gänzlich aus Muskeln.\nDie schiere Stärke seines Würgegriffs, bei dem\nes seine Tentakel einsetzt, ist sagenhaft.",
		'pt-br': "O corpo composto unicamente de músculos deste\nPokémon torna os seus movimentos de chave com\nos tentáculos incrivelmente poderosos.",
		ko: "온몸이 근육덩어리다.\n촉수를 사용해서 펼치는\n조르기 기술의 위력은 무시무시하다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
