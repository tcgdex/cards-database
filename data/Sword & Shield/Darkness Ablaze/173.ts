import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Yell Horn",
		fr: "Clairon de la Team Yell",
		es: "Trompeta Yell",
		it: "Trombetta Yell",
		pt: "Corneta da Equipe Yell",
		de: "Yell-Tröte"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Both Active Pokémon are now Confused.",
		fr: "Les deux Pokémon Actifs sont maintenant Confus.",
		es: "Ambos Pokémon Activos pasan a estar Confundidos.",
		it: "Entrambi i Pokémon attivi vengono confusi.",
		pt: "Ambos os Pokémon Ativos agora estão Confusos.",
		de: "Beide Aktiven Pokémon sind jetzt verwirrt."
	},

	trainerType: "Item",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
