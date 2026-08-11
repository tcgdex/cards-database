import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Power Memory",
		'fr-fr': "Puissante Mémoire",
		'es-es': "Memoria Poderosa",
		'it-it': "Potere della Memoria",
		'pt-br': "Memória Poderosa",
		'de-de': "Langzeitgedächtnis"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Le Zygarde-EX auquel cette carte est attachée peut aussi utiliser l'attaque sur cette carte. (Vous avez toujours besoin de l'Énergie nécessaire pour utiliser cette attaque.)",
		'en-us': "The Zygarde-EX this card is attached to can also use the attack on this card. (You still need the necessary Energy to use this attack.)",
		'es-es': "El Zygarde-EX al que esté unida esta carta también puede usar el ataque de esta carta. (Sigues necesitando la Energía necesaria para usar este ataque).",
		'it-it': "Lo Zygarde-EX a cui è assegnata questa carta può usare anche l'attacco di questa carta. Devi comunque avere l'Energia necessaria per usare questo attacco.",
		'pt-br': "O Zygarde-EX ao qual este card está ligado, pode também usar o ataque deste card. (Você ainda precisa da Energia necessária para usar este ataque.)",
		'de-de': "Das Zygarde-EX, an das diese Karte angelegt ist, kann auch den Angriff auf dieser Karte einsetzen. (Du benötigst jedoch die für diesen Angriff notwendige Energie.)"
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
				'fr-fr': "Brûlure Polycellule",
				'en-us': "All Cells Burn",
				'es-es': "Quemadura Multicelular",
				'it-it': "Cellule Incendiarie",
				'pt-br': "Queimadura Multicelular",
				'de-de': "Alle Zellen brennen"
			},
			damage: "200",
			effect: {
				'fr-fr': "Défaussez 3 Énergies attachées à ce Pokémon.",
				'en-us': "Discard 3 Energy attached to this Pokémon.",
				'es-es': "Descarta 3 Energías unidas a este Pokémon.",
				'it-it': "Scarta tre Energie assegnate a questo Pokémon.",
				'pt-br': "Descarte 3 Energias ligadas a este Pokémon.",
				'de-de': "Lege 3 an dieses Pokémon angelegte Energien auf deinen Ablagestapel."
			}
		},
	],
}

export default card
