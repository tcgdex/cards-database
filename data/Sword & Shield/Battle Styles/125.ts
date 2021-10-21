import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Escape Rope",
		fr: "Corde Sortie",
		es: "Cuerda Huida",
		it: "Fune di Fuga",
		pt: "Corda de Fuga",
		de: "Fluchtseil"
	},

	illustrator: "sadaji",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Each player switches their Active Pokémon with 1 of their Benched Pokémon. Your opponent switches first. (If a player does not have a Benched Pokémon, they don't switch Pokémon.)",
		fr: "Chaque joueur échange son Pokémon Actif contre l'un de ses Pokémon de Banc. Votre adversaire échange en premier. (Si l'un des joueurs n'a pas de Pokémon de Banc, il n'échange pas de Pokémon.)",
		es: "Cada jugador cambia a su Pokémon Activo por 1 de sus Pokémon en Banca. (Tu rival lo cambia primero. Si algún jugador no tiene a un Pokémon en Banca, no cambiará a su Pokémon.)",
		it: "Ciascun giocatore scambia il suo Pokémon attivo con uno dei suoi Pokémon in panchina. Inizia il tuo avversario. Se un giocatore non ha Pokémon in panchina, non effettuerà lo scambio.",
		pt: "Cada jogador troca seu Pokémon Ativo por 1 dos Pokémon no Banco dele ou dela. (Seu oponente troca primeiro. Se um jogador não tiver um Pokémon no Banco, ele não trocará os Pokémon.)",
		de: "Jeder Spieler tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus. (Dein Gegner beginnt. Hat ein Spieler kein Pokémon auf der Bank, tauscht er kein Pokémon aus.)"
	},

	trainerType: "Item",
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
