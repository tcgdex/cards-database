import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Core Memory",
		'fr-fr': "Cœur Mémoire",
		'es-es': "Memoria Núcleo",
		'es-mx': "Memoria Núcleo",
		'de-de': "Datenkern",
		'it-it': "Memoria Nucleare",
		'pt-br': "Núcleo de Memória"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",

	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting", "Fighting"],

		name: {
			'en-us': "Geobuster",
			'fr-fr': "Géodestruction",
			'es-es': "Geodestrucción",
			'es-mx': "Geodestrucción",
			'de-de': "Geosprenger",
			'it-it': "Geodistruzione",
			'pt-br': "Geodestruidor"
		},

		effect: {
			'en-us': "Discard all Energy from this Pokémon.",
			'fr-fr': "Défaussez toutes les Énergies de ce Pokémon.",
			'es-es': "Descarta todas las Energías de este Pokémon.",
			'es-mx': "Descarta todas las Energías de este Pokémon.",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta tutte le Energie da questo Pokémon.",
			'pt-br': "Descarte todas as Energias deste Pokémon."
		},

		damage: 350
	}],

	effect: {
		'en-us': "The Mega Zygarde ex this card is attached to can use the attack on this card. (You still need the necessary Energy to use this attack.)",
		'fr-fr': "Le Méga-Zygarde-ex auquel cette carte est attachée peut utiliser l'attaque sur cette carte. (Vous avez toujours besoin des Énergies nécessaires pour utiliser cette attaque.)",
		'es-es': "El Mega-Zygarde ex al que esté unida esta carta puede usar el ataque de esta carta. (Sigues necesitando las Energías requeridas para usar este ataque).",
		'es-mx': "El Mega-Zygarde ex al que esté unida esta carta puede usar el ataque de esta carta. (Sigues necesitando las Energías requeridas para usar este ataque).",
		'de-de': "Das Mega-Zygarde-ex, an das diese Karte angelegt ist, kann die Attacke auf dieser Karte einsetzen. (Du benötigst jedoch die für diese Attacke notwendige Energie.)",
		'it-it': "Il Mega Zygarde-ex a cui è assegnata questa carta può usare l'attacco di questa carta. Devi comunque avere l'Energia necessaria per usare questo attacco.",
		'pt-br': "O Mega Zygarde ex ao qual esta carta está ligada pode usar o ataque desta carta. (Você ainda precisa da Energia necessária para usar este ataque.)"
	},

	trainerType: "Tool",
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684343,
				cardmarket: 877486
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684343,
				cardmarket: 877486
			}
		},
		{
			type: "normal",
			stamp: ["player-rewards-program"]
		}
	],

}

export default card
