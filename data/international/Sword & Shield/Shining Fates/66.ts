import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Ornithologue",
		'en-us': "Bird Keeper",
		'es-es': "Ornitólogo",
		'it-it': "Avicoltore",
		'pt-br': "Ornitólogo",
		'de-de': "Vogel-Profi"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'fr-fr': "Échangez votre Pokémon Actif contre l'un de vos Pokémon de Banc. Dans ce cas, piochez 3 cartes.",
		'en-us': "Switch your Active Pokémon with 1 of your Benched Pokémon. If you do, draw 3 cards.",
		'es-es': "Cambia tu Pokémon Activo por 1 de tus Pokémon en Banca. Si lo haces, roba 3 cartas.",
		'it-it': "Scambia il tuo Pokémon attivo con uno della tua panchina. Se lo fai, pesca tre carte.",
		'pt-br': "Troque o seu Pokémon Ativo por 1 dos seus Pokémon no Banco. Se fizer isto, compre 3 cartas.",
		'de-de': "Tausche dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank aus. Wenn du das machst, ziehe 3 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "D",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539353,
				tcgplayer: 232538
			}
		},
	],
}

export default card
