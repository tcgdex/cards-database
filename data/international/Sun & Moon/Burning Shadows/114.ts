import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Escape Rope",
		'fr-fr': "Corde Sortie",
		'es-es': "Cuerda Huida",
		'it-it': "Fune di Fuga",
		'pt-br': "Corda de Fuga",
		'de-de': "Fluchtseil"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Chaque joueur échange son Pokémon Actif avec l’un de ses Pokémon de Banc. Votre adversaire échange en premier. (Si l’un des joueurs n’a pas de Pokémon de Banc, il n’échange pas de Pokémon).",
		'en-us': "Each player switches their Active Pokémon with 1 of their Benched Pokémon. Your opponent switches first. (If a player does not have a Benched Pokémon, that player doesn’t switch Pokémon.)",
		'es-es': "Cada jugador cambia su Pokémon Activo por 1 de sus Pokémon en Banca. Tu rival lo cambia primero. (Si algún jugador no tiene ningún Pokémon en Banca, no cambiará su Pokémon).",
		'it-it': "Ciascun giocatore scambia il suo Pokémon attivo con uno dei suoi Pokémon in panchina. Inizia il tuo avversario. Se un giocatore non ha Pokémon in panchina, non effettuerà lo scambio.",
		'pt-br': "Cada jogador troca o seu Pokémon Ativo por 1 dos próprios Pokémon no Banco. O seu oponente troca primeiro (se um jogador não possuir Pokémon no Banco, aquele jogador não troca o Pokémon).",
		'de-de': "Jeder Spieler tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus. Dein Gegener tauscht als Erster. (Hat ein Spieler kein Pokémon auf der Bank, tauscht jener Spieler kein Pokémon aus.)"
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 299515,
		tcgplayer: 138625
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
