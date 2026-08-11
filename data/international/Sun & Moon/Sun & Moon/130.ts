import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Repel",
		'fr-fr': "Repousse",
		'es-es': "Repelente",
		'it-it': "Repellente",
		'pt-br': "Repelente",
		'de-de': "Schutz"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
		'en-us': "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
		'es-es': "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
		'it-it': "Il tuo avversario scambia il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
		'pt-br': "Seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
		'de-de': "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 295443,
		tcgplayer: 127002
	}
}

export default card
