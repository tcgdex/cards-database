import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Gapejaw Bog",
		fr: "Marais Bouchebée",
		es: "Ciénaga Bocazas",
		it: "Palude Boccalarga",
		pt: "Brejo Gapejaw",
		de: "Großmaulmoor"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		en: "Whenever either player puts a Basic Pokémon from their hand onto their Bench, put 2 damage counters on that Pokémon.",
		fr: "Chaque fois qu'un joueur place un Pokémon de base de sa main sur son Banc, placez 2 marqueurs de dégâts sur ce Pokémon-là.",
		es: "Cada vez que algún jugador ponga 1 Pokémon Básico de su mano en su Banca, pon 2 contadores de daño en ese Pokémon.",
		it: "Ogni volta che uno dei giocatori prende un Pokémon Base dalla propria mano e lo mette nella propria panchina, metti due segnalini danno su quel Pokémon.",
		pt: "Sempre que qualquer um dos jogadores colocar um Pokémon Básico da própria mão no próprio Banco, coloque 2 contadores de dano naquele Pokémon.",
		de: "Lege jedes Mal, wenn ein Spieler 1 Basis-Pokémon aus seiner Hand auf seine Bank legt, 2 Schadensmarken auf jenes Pokémon."
	},

	trainerType: "Stadium",
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card