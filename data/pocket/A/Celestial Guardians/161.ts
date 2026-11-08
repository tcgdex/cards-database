import { Card } from "models/database/card"
import Set from "../Celestial Guardians"
const card: Card = {
	set: Set,

	name: {
		'en-us': "Turtonator",
		'fr-fr': "Boumata",
		'es-es': "Turtonator",
		'it-it': "Turtonator",
		'de-de': "Tortunator",
		'ko-kr': "폭거북스",
		'pt-br': "Turtonator"
	},

	illustrator: "akagi",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [776],
	hp: 120,
	types: ["Fire"],

	description: {
		'en-us': "Explosive substances coat the shell on its back. Enemies that dare attack it will be blown away by an immense detonation.",
		'fr-fr': "Il s'abrite derrière une carapace couverte\nd'explosifs. Lorsqu'un ennemi l'attaque,\nil riposte à grands coups de déflagrations.",
		'es-es': "Su caparazón está recubierto de un material explosivo.\nResponde con un gran estallido a todo aquel que lo ataque.",
		'it-it': "Il carapace sulla schiena è rivestito di esplosivo.\nRespinge gli attacchi nemici con un potente scoppio.",
		'de-de': "Sein Panzer ist mit einer explosiven Schicht überzogen.\nGegnerische Angriffe quittiert es mit gewaltigen Explosionen.",
		'ko-kr': "폭약으로 코팅된 등껍질을\n짊어지고 있다. 공격하는\n상대에게 대폭발로 반격한다.",
		'pt-br': "Sua carapaça é coberta por substâncias explosivas.\nOs inimigos que ousarem atacar este Pokémon\nserão lançados longe por uma explosão imensa."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Fire Spin",
			'fr-fr': "Danse Flammes",
			'es-es': "Giro Fuego",
			'it-it': "Turbofuoco",
			'de-de': "Feuerwirbel",
			'ko-kr': "회오리불꽃",
			'pt-br': "Chama Furacão"
		},
		damage: 90,
		cost: ["Fire", "Fire", "Colorless"],
		effect: {
			'en-us': "Discard a {R} Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie {R} de ce Pokémon.",
			'es-es': "Descarta 1 Energía {R} de este Pokémon.",
			'it-it': "Rimuovi un'Energia {R} da questo Pokémon.",
			'de-de': "Lege 1 {R}-Energie von diesem Pokémon ab.",
			'ko-kr': "이 포켓몬에서 {R}에너지를 1개 트래쉬한다.",
			'pt-br': "Descarte 1 Energia {R} deste Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 4,
	boosters: ["lunala"]
}
export default card