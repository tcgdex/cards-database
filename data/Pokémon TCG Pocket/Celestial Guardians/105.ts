import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Minior",
		fr: "Météno",
		es: "Minior",
		it: "Minior",
		de: "Meteno",
		'pt-br': "Minior",
		ko: "메테노"
	},

	illustrator: "Amelicart",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		en: "Places where Minior fall from the night sky are few and far between, with Alola being one of the precious few.",
		fr: "Alola fait partie des rares endroits où l'on\npeut observer un Météno tombant du ciel.",
		es: "Alola es uno de los pocos lugares en los que, durante\nla noche, se puede ver cómo los Minior caen del cielo.",
		it: "Alola è uno dei rari luoghi in cui di notte è\npossibile vedere dei Minior cadere dal cielo.",
		de: "Alola ist einer der wenigen Orte, an denen es möglich ist,\ndieses Pokémon vom Nachthimmel herabfallen zu sehen.",
		'pt-br': "São raros os lugares em que Minior caem do céu noturno,\ne Alola faz parte desse grupo excepcional.",
		ko: "밤하늘에서 떨어지는 메테노와\n만날 수 있는 장소는 제한되어 있다.\n알로라는 그 귀한 장소 중 한 곳이다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Star Drop",
			fr: "Chute d'Étoiles",
			es: "Caída Sideral",
			it: "Caduta Astrale",
			de: "Sternensturz",
			'pt-br': "Queda de Estrela",
			ko: "별떨구기"
		},

		cost: ["Fighting", "Fighting"],

		effect: {
			en: "This attack does 40 damage to 1 of your opponent's Pokémon.",
			fr: "Cette attaque inflige 40 dégâts à l'un des Pokémon de votre adversaire.",
			es: "Este ataque hace 40 puntos de daño a 1 de los Pokémon de tu rival.",
			it: "Questo attacco infligge 40 danni a uno dei Pokémon\ndel tuo avversario.",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 40 Schadenspunkte zu.",
			'pt-br': "Este ataque causa 40 pontos de dano a 1 dos Pokémon do seu oponente.",
			ko: "상대의 포켓몬 1마리에게 40데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card