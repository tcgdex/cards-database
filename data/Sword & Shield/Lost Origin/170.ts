import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Windup Arm",
		fr: "Bras à Remontoir",
		es: "Brazo Mecánico",
		it: "Braccio Caricato",
		pt: "Braço de Corda",
		de: "Aufzieharm"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "The Pokémon this card is attached to can attack even if it's Asleep or Paralyzed.",
		fr: "Le Pokémon auquel cette carte est attachée peut attaquer même s'il est Endormi ou Paralysé.",
		es: "El Pokémon al que esté unida esta carta puede atacar incluso si está Dormido o Paralizado.",
		it: "Il Pokémon a cui è assegnata questa carta può attaccare anche se è addormentato o paralizzato.",
		pt: "O Pokémon ao qual esta carta está ligada pode atacar mesmo se estiver Adormecido ou Paralisado.",
		de: "Das Pokémon, an das diese Karte angelegt ist, kann angreifen, auch wenn es schläft oder paralysiert ist."
	},

	trainerType: "Tool",
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card