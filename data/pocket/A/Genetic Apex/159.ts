import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Kabutops",
		'fr-fr': "Kabutops",
		'es-es': "Kabutops",
		'it-it': "Kabutops",
		'de-de': "Kabutops",
		'pt-br': "Kabutops",
		'ko-kr': "투구푸스"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",

	dexId: [141],
	hp: 140,
	types: ["Fighting"],
	stage: "Stage2",

	evolveFrom: {
		'en-us': "Kabuto"
	},

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Leech Life",
			'fr-fr': "Vampirisme",
			'es-es': "Chupavidas",
			'it-it': "Sanguisuga",
			'de-de': "Blutsauger",
			'pt-br': "Suga-vidas",
			'ko-kr': "흡혈"
		},

		effect: {
			'en-us': "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
			'fr-fr': "Soignez ce Pokémon du nombre de dégâts que vous avez infligés au Pokémon Actif de votre adversaire.",
			'es-es': "Cura a este Pokémon el mismo número de puntos de daño que hayas infligido al Pokémon Activo de tu rival.",
			'it-it': "Cura questo Pokémon da una quantità di danni pari a quelli inflitti al Pokémon attivo del tuo avversario.",
			'de-de': "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast.",
			'pt-br': "Cure deste Pokémon a mesma quantidade de dano que você causou ao Pokémon Ativo do seu oponente.",
			'ko-kr': "상대의 배틀 포켓몬에게 준 데미지만큼 이 포켓몬의 HP를 회복."
		},

		damage: "50"
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Three Diamond",

	description: {
		'en-us': "Kabutops slices its prey apart and sucks out the fluids. The discarded body parts become food for other Pokémon.",
		'fr-fr': "Il lacère sa proie pour boire ses fluides corporels,\npuis jette son corps en pâture à d'autres Pokémon.",
		'es-es': "Despedaza a las presas que atrapa para\nsorber sus fluidos y deja los restos para que\notros Pokémon den buena cuenta de ellos.",
		'it-it': "Lacera le prede e ne succhia i fluidi corporei.\nI resti diventano poi cibo per altri Pokémon.",
		'de-de': "Kabutops schlitzt seine Beute auf und saugt ihre\nKörpersäfte aus. Die Überreste dienen als\nNahrung für andere Pokémon.",
		'pt-br': "Kabutops despedaça sua presa e drena seus\nfluidos. As partes do corpo descartadas se\ntornam comida para outros Pokémon.",
		'ko-kr': "먹이를 베어 갈라 체액을\n빨아먹는다. 남은 몸은\n다른 포켓몬의 먹이가 된다."
	},

	boosters: ["charizard"]
}

export default card
