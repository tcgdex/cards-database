import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Guzma",
		'fr-fr': "Guzma",
		'es-es': "Guzmán",
		'it-it': "Guzman",
		'pt-br': "Guzma",
		'de-de': "Bromley"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Dans ce cas, échangez votre Pokémon Actif avec l’un de vos Pokémon de Banc.",
		'en-us': "Switch 1 of your opponent’s Benched Pokémon with their Active Pokémon. If you do, switch your Active Pokémon with 1 of your Benched Pokémon.",
		'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. Si lo haces, cambia tu Pokémon Activo por 1 de tus Pokémon en Banca.",
		'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Se lo fai, scambia il tuo Pokémon attivo con uno dei tuoi Pokémon in panchina.",
		'pt-br': "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a). Se fizer isto, troque o seu Pokémon Ativo por 1 dos seus Pokémon no Banco.",
		'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Wenn du das machst, tausche dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank aus."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 299541,
		tcgplayer: 138610
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
