import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gapejaw Bog",
		'fr-fr': "Marais Bouchebée",
		'es-es': "Ciénaga Bocazas",
		'it-it': "Palude Boccalarga",
		'pt-br': "Brejo Gapejaw",
		'de-de': "Großmaulmoor"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		'en-us': "Whenever either player puts a Basic Pokémon from their hand onto their Bench, put 2 damage counters on that Pokémon.",
		'fr-fr': "Chaque fois qu'un joueur place un Pokémon de base de sa main sur son Banc, placez 2 marqueurs de dégâts sur ce Pokémon-là.",
		'es-es': "Cada vez que algún jugador ponga 1 Pokémon Básico de su mano en su Banca, pon 2 contadores de daño en ese Pokémon.",
		'it-it': "Ogni volta che uno dei giocatori prende un Pokémon Base dalla propria mano e lo mette nella propria panchina, metti due segnalini danno su quel Pokémon.",
		'pt-br': "Sempre que qualquer um dos jogadores colocar um Pokémon Básico da própria mão no próprio Banco, coloque 2 contadores de dano naquele Pokémon.",
		'de-de': "Lege jedes Mal, wenn ein Spieler 1 Basis-Pokémon aus seiner Hand auf seine Bank legt, 2 Schadensmarken auf jenes Pokémon."
	},

	trainerType: "Stadium",
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 682262,
				tcgplayer: 452011
			}
		},
	],
}

export default card
