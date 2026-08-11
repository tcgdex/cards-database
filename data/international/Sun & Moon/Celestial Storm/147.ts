import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Switch",
		fr: "Échange",
		es: "Cambio",
		it: "Scambio",
		pt: "Substituição",
		de: "Tausch"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Échangez votre Pokémon Actif avec l’un de vos Pokémon de Banc.",
		en: "Switch your Active Pokémon with 1 of your Benched Pokémon.",
		es: "Cambia tu Pokémon Activo por 1 de tus Pokémon en Banca.",
		it: "Scambia il tuo Pokémon attivo con uno dei tuoi Pokémon in panchina.",
		pt: "Troque o seu Pokémon Ativo por 1 dos seus Pokémon no Banco.",
		de: "Tausche dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank aus."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 361384,
		tcgplayer: 171008
	}
}

export default card
