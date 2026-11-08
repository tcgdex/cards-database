import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		'en-us': "Spikemuth",
		'fr-fr': "Smashings",
		'es-es': "Pueblo Crampón",
		'it-it': "Spikeville",
		'pt-br': "Spikemuth",
		'de-de': "Spikeford"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Whenever a player's Active Pokémon moves to the Bench during their turn, put 2 damage counters on that Pokémon.",
		'fr-fr': "Chaque fois que le Pokémon Actif d'un joueur se déplace vers le Banc pendant son tour, placez 2 marqueurs de dégâts sur ce Pokémon-là.",
		'es-es': "Cada vez que el Pokémon Activo de un jugador se mueva a la Banca durante su turno, pon 2 contadores de daño en ese Pokémon.",
		'it-it': "Ogni volta che il Pokémon attivo di un giocatore si sposta in panchina durante il suo turno, metti due segnalini danno su quel Pokémon.",
		'pt-br': "Sempre que o Pokémon Ativo de um dos jogadores for movido para o Banco durante o turno dele(a), coloque 2 contadores de dano naquele Pokémon.",
		'de-de': "Lege jedes Mal, wenn das Aktive Pokémon eines Spielers während seines Zuges auf die Bank wechselt, 2 Schadensmarken auf jenes Pokémon."
	},

	trainerType: "Stadium",
	regulationMark: "D",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483729,
				tcgplayer: 219286
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483729,
				tcgplayer: 219286
			}
		},
	],
}

export default card
