import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cranidos",
		'fr-fr': "Kranidos",
		'es-es': "Cranidos",
		'it-it': "Cranidos",
		'de-de': "Koknodon",
		'pt-br': "Cranidos",
		'ko-kr': "두개도스"
	},

	illustrator: "Kouki Saitou",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [408],
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Skull Fossil"
	},

	description: {
		'en-us': "A primeval Pokémon, it possesses a hard and sturdy skull, lacking any intelligence within.",
		'fr-fr': "Un Pokémon préhistorique doté d'un crâne très\nsolide, mais d'un cerveau très peu performant.",
		'es-es': "Este Pokémon arcaico cuenta con un cráneo sólido\ny resistente, pero su cerebro no está a la par.",
		'it-it': "Pokémon che esisteva in epoca antica, dotato di un cranio duro\ne resistente ma dall'intelligenza non altrettanto sviluppata.",
		'de-de': "Dieses urzeitliche Pokémon war trotz seines\nharten, robusten Schädels nicht sehr schlau.",
		'pt-br': "É um Pokémon primitivo e sem inteligência\nque possui um crânio duro e resistente.",
		'ko-kr': "태곳적 포켓몬. 딱딱하고\n튼튼한 두개골을 가졌지만\n머리는 정말 나빴다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'es-es': "Golpe Cabeza",
			'it-it': "Bottintesta",
			'de-de': "Kopfnuss",
			'pt-br': "Cabeçada",
			'ko-kr': "박치기"
		},

		damage: 50,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["dialga"]
}

export default card
