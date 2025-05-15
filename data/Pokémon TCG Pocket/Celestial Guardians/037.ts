import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"
const card: Card = {
	set: Set,
	name: {
		en: "Turtonator",
		fr: "Boumata",
		es: "Turtonator",
		it: "Turtonator",
		de: "Tortunator",
		ko: "폭거북스"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	description: {
		en: "Explosive substances coat the shell on its back. Enemies that dare attack it will be blown away by an immense detonation.",
		fr: "Il s'abrite derrière une carapace couverte\nd'explosifs. Lorsqu'un ennemi l'attaque,\nil riposte à grands coups de déflagrations.",
		es: "Su caparazón está recubierto de un material explosivo.\nResponde con un gran estallido a todo aquel que lo ataque.",
		it: "Il carapace sulla schiena è rivestito di esplosivo.\nRespinge gli attacchi nemici con un potente scoppio.",
		de: "Sein Panzer ist mit einer explosiven Schicht überzogen.\nGegnerische Angriffe quittiert es mit gewaltigen Explosionen.",
		ko: "폭약으로 코팅된 등껍질을\n짊어지고 있다. 공격하는\n상대에게 대폭발로 반격한다."
	},
	stage: "Basic",
	attacks: [{
		name: {
			en: "Fire Spin",
			fr: "Danse Flammes",
			es: "Giro Fuego",
			it: "Turbofuoco",
			de: "Feuerwirbel",
			ko: "회오리불꽃"
		},
		damage: 90,
		cost: ["Fire", "Fire", "Colorless"],
		effect: {
			en: "Discard a {R} Energy from this Pokémon.",
			fr: "Défaussez une Énergie {R} de ce Pokémon.",
			es: "Descarta 1 Energía {R} de este Pokémon.",
			it: "Rimuovi un'Energia {R} da questo Pokémon.",
			de: "Lege 1 {R}-Energie von diesem Pokémon ab.",
			ko: "이 포켓몬에서 {R}에너지를 1개 트래쉬한다.",
			'pt-br': "Descarte 1 Energia {R} deste Pokémon."
		}
	}],
	weaknesses: [{
		type: "Water",
		value: "+20"
	}],
	retreat: 4
}
export default card