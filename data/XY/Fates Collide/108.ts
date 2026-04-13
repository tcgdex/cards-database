import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Power Memory",
		fr: "Puissante Mémoire",
		es: "Memoria Poderosa",
		it: "Potere della Memoria",
		pt: "Memória Poderosa",
		de: "Langzeitgedächtnis"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Le Zygarde-EX auquel cette carte est attachée peut aussi utiliser l'attaque sur cette carte. (Vous avez toujours besoin de l'Énergie nécessaire pour utiliser cette attaque.)",
		en: "The Zygarde-EX this card is attached to can also use the attack on this card. (You still need the necessary Energy to use this attack.)",
		es: "El Zygarde-EX al que esté unida esta carta también puede usar el ataque de esta carta. (Sigues necesitando la Energía necesaria para usar este ataque).",
		it: "Lo Zygarde-EX a cui è assegnata questa carta può usare anche l'attacco di questa carta. Devi comunque avere l'Energia necessaria per usare questo attacco.",
		pt: "O Zygarde-EX ao qual este card está ligado, pode também usar o ataque deste card. (Você ainda precisa da Energia necessária para usar este ataque.)",
		de: "Das Zygarde-EX, an das diese Karte angelegt ist, kann auch den Angriff auf dieser Karte einsetzen. (Du benötigst jedoch die für diesen Angriff notwendige Energie.)"
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 289928,
		tcgplayer: 117517
	},
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				fr: "Brûlure Polycellule",
				en: "All Cells Burn",
				es: "Quemadura Multicelular",
				it: "Cellule Incendiarie",
				pt: "Queimadura Multicelular",
				de: "Alle Zellen brennen"
			},
			damage: "200",
			effect: {
				fr: "Défaussez 3 Énergies attachées à ce Pokémon.",
				en: "Discard 3 Energy attached to this Pokémon.",
				es: "Descarta 3 Energías unidas a este Pokémon.",
				it: "Scarta tre Energie assegnate a questo Pokémon.",
				pt: "Descarte 3 Energias ligadas a este Pokémon.",
				de: "Lege 3 an dieses Pokémon angelegte Energien auf deinen Ablagestapel."
			}
		},
	],
}

export default card
