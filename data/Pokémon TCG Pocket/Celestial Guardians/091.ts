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
			en: "Push Out"
		},

		damage: 50,
		cost: ["Fighting", "Colorless"],

		effect: {
			en: "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 3
}

export default card