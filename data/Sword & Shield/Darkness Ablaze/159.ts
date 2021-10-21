import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Bird Keeper",
		fr: "Ornithologue",
		es: "Ornitólogo",
		it: "Avicoltore",
		pt: "Ornitólogo",
		de: "Vogel-Profi"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Switch your Active Pokémon with 1 of your Benched Pokémon. If you do, draw 3 cards.",
		fr: "Échangez votre Pokémon Actif contre l'un de vos Pokémon de Banc. Dans ce cas, piochez 3 cartes.",
		es: "Cambia tu Pokémon Activo por 1 de tus Pokémon en Banca. Si lo haces, roba 3 cartas.",
		it: "Scambia il tuo Pokémon attivo con uno della tua panchina. Se lo fai, pesca tre carte.",
		pt: "Troque o seu Pokémon Ativo por 1 dos seus Pokémon no Banco. Se fizer isto, compre 3 cartas.",
		de: "Tausche dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank aus. Wenn du das machst, ziehe 3 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
