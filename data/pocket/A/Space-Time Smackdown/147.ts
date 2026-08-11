import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Giant Cape",
		'fr-fr': "Cape Géante",
		'es-es': "Capa Gigante",
		'it-it': "Mantello Gigante",
		'de-de': "Riesige Robe",
		'pt-br': "Capa Gigante",
		'ko-kr': "커다란망토"
	},

	illustrator: "Ryo Ueda",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		'en-us': "The Pokémon this card is attached to gets +20 HP.",
		'fr-fr': "Cette carte octroie + 20 PV au Pokémon auquel elle est attachée.",
		'es-es': "El Pokémon al que esté unida esta carta obtiene 20 PS más.",
		'it-it': "Il Pokémon a cui è assegnata questa carta ha +20 PS.",
		'de-de': "Das Pokémon, an das diese Karte angelegt ist, erhält + 20 KP.",
		'pt-br': "O Pokémon ao qual esta carta está ligada recebe +20 PS.",
		'ko-kr': "이 카드를 붙이고 있는 포켓몬의 최대 HP를 +20한다."
	},

	trainerType: "Tool",
	boosters: ["dialga"]
}

export default card