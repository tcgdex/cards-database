import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Hawlucha",
		'fr-fr': "Brutalibré",
		'es-es': "Hawlucha",
		'it-it': "Hawlucha",
		'de-de': "Resladero",
		'pt-br': "Hawlucha",
		'ko-kr': "루차불"
	},

	illustrator: "miki kudo",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [701],
	hp: 80,
	types: ["Colorless"],

	description: {
		'en-us': "Its elegant finishing moves—performed by nimbly leaping around using its wings—are polished in the forest where it was born and raised.",
		'fr-fr': "Ce Pokémon sautille adroitement à l'aide de ses\nailes avant d'achever son adversaire en beauté. Il\nperfectionne cette technique dans sa forêt natale.",
		'es-es': "Remata a sus rivales con elegancia dando ágiles\nsaltos con la ayuda de las alas. Se trata de una\ntécnica que perfecciona en su bosque natal.",
		'it-it': "Al momento di sferrare il suo elegante colpo\ndi grazia, si libra in volo grazie alle sue ali. Affina\nquesta tecnica nel bosco in cui è nato e cresciuto.",
		'de-de': "Mithilfe seiner Flügel springt es behände umher\nund erledigt Gegner so mit eleganten Attacken.\nDiese Technik trainiert es in seinem Heimatwald.",
		'pt-br': "Seus movimentos elegantes de finalização, que consistem\nem saltos ágeis com o uso de suas asas, são refinados\nna floresta onde nasceu e cresceu.",
		'ko-kr': "날개를 사용해 가볍게 도약하여\n상대를 화려하게 마무리하는 기술은\n나고 자란 숲에서 다듬어진다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Justified Press",
			'fr-fr': "Juste Pression",
			'es-es': "Presa Justiciera",
			'it-it': "Pressa della Giustizia",
			'de-de': "Justified Press",
			'pt-br': "Aperto Justificado",
			'ko-kr': "정의의프레스"
		},

		damage: "20+",
		cost: ["Colorless"],

		effect: {
			'en-us': "If your opponent's Active Pokémon is a {D} Pokémon, this attack does 30 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon {D}, cette attaque inflige 30 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon {D}, este ataque hace 30 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon {D}, questo attacco infligge 30 danni in più.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein {D}-Pokémon ist, fügt diese Attacke 30 Schadenspunkte mehr zu.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon {D}, este ataque causará 30 pontos de dano a mais.",
			'ko-kr': "상대의 배틀 포켓몬이 {D}포켓몬이라면 30데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo"]
}

export default card
