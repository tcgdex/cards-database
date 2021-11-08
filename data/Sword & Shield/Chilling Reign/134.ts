import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		fr: "Docteure",
		en: "Doctor",
		es: "Doctora",
		it: "Medico",
		pt: "Médica",
		de: "Ärztin"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		fr: "Piochez 2 cartes. Si le Pokémon Actif de votre adversaire est un Pokémon-VMAX, piochez 2 cartes supplémentaires.",
		en: "Draw 2 cards. If your opponent's Active Pokémon is a Pokémon VMAX, draw 2 more cards.",
		es: "Roba 2 cartas. Si el Pokémon Activo de tu rival es un Pokémon VMAX, roba 2 cartas más.",
		it: "Pesca due carte. Se il Pokémon attivo del tuo avversario è un Pokémon-VMAX, pesca altre due carte.",
		pt: "Compre 2 cartas. Se o Pokémon Ativo do seu oponente for um Pokémon VMAX, compre 2 cartas a mais.",
		de: "Ziehe 2 Karten. Wenn das Aktive Pokémon deines Gegners ein Pokémon-VMAX ist, ziehe 2 Karten mehr."
	},

	trainerType: "Supporter",
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
