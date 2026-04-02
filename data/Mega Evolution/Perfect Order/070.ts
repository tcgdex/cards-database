import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Core Memory",
		fr: "Cœur Mémoire",
		es: "Memoria Núcleo",
		'es-mx': "Memoria Núcleo",
		de: "Datenkern",
		it: "Memoria Nucleare",
		pt: "Núcleo de Memória"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",

	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting", "Fighting"],

		name: {
			en: "Geobuster",
			fr: "Géodestruction",
			es: "Geodestrucción",
			'es-mx': "Geodestrucción",
			de: "Geosprenger",
			it: "Geodistruzione",
			pt: "Geodestruidor"
		},

		effect: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toutes les Énergies de ce Pokémon.",
			es: "Descarta todas las Energías de este Pokémon.",
			'es-mx': "Descarta todas las Energías de este Pokémon.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta tutte le Energie da questo Pokémon.",
			pt: "Descarte todas as Energias deste Pokémon."
		},

		damage: 350
	}],

	effect: {
		en: "The Mega Zygarde ex this card is attached to can use the attack on this card. (You still need the necessary Energy to use this attack.)",
		fr: "Le Méga-Zygarde-ex auquel cette carte est attachée peut utiliser l'attaque sur cette carte. (Vous avez toujours besoin des Énergies nécessaires pour utiliser cette attaque.)",
		es: "El Mega-Zygarde ex al que esté unida esta carta puede usar el ataque de esta carta. (Sigues necesitando las Energías requeridas para usar este ataque).",
		'es-mx': "El Mega-Zygarde ex al que esté unida esta carta puede usar el ataque de esta carta. (Sigues necesitando las Energías requeridas para usar este ataque).",
		de: "Das Mega-Zygarde-ex, an das diese Karte angelegt ist, kann die Attacke auf dieser Karte einsetzen. (Du benötigst jedoch die für diese Attacke notwendige Energie.)",
		it: "Il Mega Zygarde-ex a cui è assegnata questa carta può usare l'attacco di questa carta. Devi comunque avere l'Energia necessaria per usare questo attacco.",
		pt: "O Mega Zygarde ex ao qual esta carta está ligada pode usar o ataque desta carta. (Você ainda precisa da Energia necessária para usar este ataque.)"
	},

	trainerType: "Tool",
	regulationMark: "J",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 684343,
		cardmarket: 877486
	}
}

export default card
