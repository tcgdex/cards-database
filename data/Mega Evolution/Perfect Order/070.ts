import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Core Memory",
		fr: "Cœur Mémoire",
		es: "Memoria Núcleo",
		de: "Datenkern",
		it: "Memoria Nucleare",
		pt: "Núcleo de Memória"
	},
	set: Set,
	rarity: "Uncommon",
	category: "Trainer",
	effect: {
		en: "The Mega Zygarde ex this card is attached to can use the attack on this card. (You still need the necessary Energy to use this attack.)"
	},
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Fighting"
			],
			name: {
				en: "Geobuster",
				fr: "Géodestruction",
				es: "Geodestrucción",
				de: "Geosprenger",
				it: "Geodistruzione",
				pt: "Geodestruidor"
			},
			damage: "350",
			effect: {
				en: "Discard all Energy from this Pokémon.",
				fr: "Défaussez toutes les Énergies de ce Pokémon.",
				es: "Descarta todas las Energías de este Pokémon.",
				de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel.",
				it: "Scarta tutte le Energie da questo Pokémon.",
				pt: "Descarte todas as Energias deste Pokémon."
			}
		}
	],
	trainerType: "Tool",
	regulationMark: "J",
	illustrator: "Toyste Beach",
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
