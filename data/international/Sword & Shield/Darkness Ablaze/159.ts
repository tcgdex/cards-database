import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		'en-us': "Bird Keeper",
		'fr-fr': "Ornithologue",
		'es-es': "Ornitólogo",
		'it-it': "Avicoltore",
		'pt-br': "Ornitólogo",
		'de-de': "Vogel-Profi"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Switch your Active Pokémon with 1 of your Benched Pokémon. If you do, draw 3 cards.",
		'fr-fr': "Échangez votre Pokémon Actif contre l'un de vos Pokémon de Banc. Dans ce cas, piochez 3 cartes.",
		'es-es': "Cambia tu Pokémon Activo por 1 de tus Pokémon en Banca. Si lo haces, roba 3 cartas.",
		'it-it': "Scambia il tuo Pokémon attivo con uno della tua panchina. Se lo fai, pesca tre carte.",
		'pt-br': "Troque o seu Pokémon Ativo por 1 dos seus Pokémon no Banco. Se fizer isto, compre 3 cartas.",
		'de-de': "Tausche dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank aus. Wenn du das machst, ziehe 3 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "D",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483674,
				tcgplayer: 219269
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483674,
				tcgplayer: 219269
			}
		},
	],
}

export default card
