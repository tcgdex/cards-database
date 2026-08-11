import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Furisode Girl",
		'fr-fr': "Fille en Kimono",
		'es-es': "Jovencita con Kimono",
		'it-it': "Ragazza in kimono",
		'pt-br': "Garota Furisode",
		'de-de': "Kimono-Trägerin"
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck. You may switch that Pokémon with your Active Pokémon.",
		'fr-fr': "Cherchez dans votre deck un Pokémon de base, puis placez-le sur votre Banc. Mélangez ensuite votre deck. Vous pouvez échanger ce Pokémon-là contre votre Pokémon Actif.",
		'es-es': "Busca en tu baraja 1 Pokémon Básico y ponlo en tu Banca. Después, baraja las cartas de tu baraja. Puedes cambiar ese Pokémon por tu Pokémon Activo.",
		'it-it': "Cerca nel tuo mazzo un Pokémon Base e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo. Puoi scambiare quel Pokémon con il tuo Pokémon attivo.",
		'pt-br': "Procure por 1 Pokémon Básico no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho. Você pode trocar aquele Pokémon pelo seu Pokémon Ativo.",
		'de-de': "Durchsuche dein Deck nach 1 Basis-Pokémon und lege es auf deine Bank. Mische anschließend dein Deck. Du kannst jenes Pokémon gegen dein Aktives Pokémon austauschen."
	},

	trainerType: "Supporter",
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682204,
				tcgplayer: 451805
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682204,
				tcgplayer: 451805
			}
		},
	],
}

export default card
