import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Hippopotas",
		fr: "Hippopotas",
		es: "Hippopotas",
		it: "Hippopotas",
		de: "Hippopotas",
		'pt-br': "Hippopotas",
		ko: "히포포타스"
	},

	illustrator: "Akira Komayama",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [449],
	hp: 80,
	types: ["Fighting"],

	description: {
		en: "It shuts its nostrils tight, then travels through sand as if walking. They form colonies of around 10.",
		fr: "Ce Pokémon peut obturer ses narines et avancer dans le sable\navec aisance. Il vit en colonies d'environ dix individus.",
		es: "Cierra los orificios nasales y luego se\ndesplaza por la arena con total tranquilidad.\nSuele formar colonias de diez individuos.",
		it: "Chiude le narici e poi avanza nella sabbia in tutta\ntranquillità. Vive in gruppi di una decina di esemplari.",
		de: "Dieses Pokémon schließt seine Nasenlöcher und\nreist dann durch den Sand. Es lebt in Kolonien\nmit einer Größe von circa zehn Hippopotas.",
		'pt-br': "Ele aperta as narinas enquanto viaja pela areia\ncomo se estivesse andando.\nEles formam colônias com cerca de 10.",
		ko: "콧구멍을 꽉 막고\n모래 속을 걸어 다니듯 이동한다.\n10마리 정도가 무리 지어 생활한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Rolling Tackle",
			fr: "Roulé-Boulé",
			es: "Placaje Giro",
			it: "Rollazione",
			de: "Rolltackle",
			'pt-br': "Golpe de Colisão Rolante",
			ko: "구르기 태클"
		},

		damage: 60,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["palkia"]
}

export default card
