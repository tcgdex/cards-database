import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Ornithologue",
		en: "Bird Keeper",
		es: "Ornitólogo",
		it: "Avicoltore",
		pt: "Ornitólogo",
		de: "Vogel-Profi"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		fr: "Échangez votre Pokémon Actif contre l'un de vos Pokémon de Banc. Dans ce cas, piochez 3 cartes.",
		en: "Switch your Active Pokémon with 1 of your Benched Pokémon. If you do, draw 3 cards.",
		es: "Cambia tu Pokémon Activo por 1 de tus Pokémon en Banca. Si lo haces, roba 3 cartas.",
		it: "Scambia il tuo Pokémon attivo con uno della tua panchina. Se lo fai, pesca tre carte.",
		pt: "Troque o seu Pokémon Ativo por 1 dos seus Pokémon no Banco. Se fizer isto, compre 3 cartas.",
		de: "Tausche dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank aus. Wenn du das machst, ziehe 3 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 539353
	}
}

export default card
