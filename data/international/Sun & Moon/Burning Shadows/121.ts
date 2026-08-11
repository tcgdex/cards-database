import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Po Town",
		'fr-fr': "Kokohio",
		'es-es': "Pueblo Po",
		'it-it': "Poh",
		'pt-br': "Vila Pô",
		'de-de': "Po’u"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Chaque fois qu’un joueur joue un Pokémon de sa main pour faire évoluer l’un de ses Pokémon, placez 3 marqueurs de dégâts sur ce Pokémon.",
		'en-us': "Whenever any player plays a Pokémon from their hand to evolve 1 of their Pokémon, put 3 damage counters on that Pokémon.",
		'es-es': "Cada vez que algún jugador juegue 1 Pokémon de su mano para hacer evolucionar a 1 de sus Pokémon, pon 3 contadores de daño en ese Pokémon.",
		'it-it': "Ogni volta che un giocatore gioca un Pokémon dalla sua mano per far evolvere uno dei suoi Pokémon, metti tre segnalini danno su quel Pokémon.",
		'pt-br': "Sempre que algum jogador jogar 1 Pokémon da própria mão para evoluir 1 dos próprios Pokémon, coloque 3 contadores de dano naquele Pokémon.",
		'de-de': "Lege jedes Mal, wenn ein Spieler 1 Pokémon aus seiner Hand spielt, um 1 seiner Pokémon zu entwickeln, 3 Schadensmarken auf jenes Pokémon."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 299521,
		tcgplayer: 138631
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
