import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	name: {
		'en-us': "Old Cemetery",
		'fr-fr': "Cimetière Ancien",
		'es-es': "Viejo Cementerio",
		'it-it': "Cimitero Antico",
		'pt-br': "Cemitério Antigo",
		'de-de': "Uralter Friedhof"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: 'Stadium',

	effect: {
		'en-us': "Whenever any player attaches an Energy card from their hand to 1 of their non-Psychic Pokémon, put 2 damage counters on that Pokémon.",
		'fr-fr': "Chaque fois qu'un joueur attache une carte Énergie de sa main à l'un de ses Pokémon non Psychic, placez 2 marqueurs de dégâts sur ce Pokémon-là.",
		'es-es': "Cada vez que algún jugador una 1 carta de Energía de su mano a 1 de sus Pokémon no Psychic, pon 2 contadores de daño en ese Pokémon.",
		'it-it': "Ogni volta che un giocatore assegna a uno dei suoi Pokémon non di tipo Psychic una carta Energia dalla propria mano, metti due segnalini danno su quel Pokémon.",
		'pt-br': "Sempre que algum jogador ligar 1 carta de Energia da própria mão a 1 dos próprios Pokémon que não seja de tipo Psychic, coloque 2 contadores de dano naquele Pokémon.",
		'de-de': "Lege jedes Mal, wenn ein Spieler 1 Energiekarte aus seiner Hand an 1 seiner Pokémon, das kein Psychic-Pokémon ist, anlegt, 2 Schadensmarken auf jenes Pokémon."
	},

	regulationMark: "E",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567255,
				tcgplayer: 241850
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567255,
				tcgplayer: 241850
			}
		},
	],
}

export default card
