import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Dust Island",
		'fr-fr': "Île Poussière",
		'es-es': "Isla Polvorienta",
		'it-it': "Isola Tossica",
		'pt-br': "Ilha Empoeirada",
		'de-de': "Staubinsel"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Lorsque l’effet d’une carte Dresseur amène l’un des joueurs à échanger son Pokémon Actif Empoisonné avec l’un de ses Pokémon de Banc, le nouveau Pokémon Actif est affecté par cet État Spécial.",
		'en-us': "Whenever either player switches their Poisoned Active Pokémon with 1 of their Benched Pokémon with the effect of a Trainer card, the new Active Pokémon is now affected by that Special Condition.",
		'es-es': "Cada vez que algún jugador cambie su Pokémon Activo Envenenado por 1 de sus Pokémon en Banca con el efecto de una carta de Entrenador, el nuevo Pokémon Activo pasa a estar afectado por esa Condición Especial.",
		'it-it': "Ogni volta che uno dei giocatori scambia il suo Pokémon attivo avvelenato con uno della sua panchina con l’effetto di una carta Allenatore, il nuovo Pokémon attivo è influenzato da quella condizione speciale.",
		'pt-br': "Sempre que qualquer um dos jogadores trocar o seu Pokémon Ativo Envenenado por 1 dos próprios Pokémon no Banco usando o efeito de uma carta de Treinador, o novo Pokémon Ativo será afetado por aquela Condição Especial.",
		'de-de': "Jedes Mal, wenn einer der beiden Spieler sein vergiftetes Aktives Pokémon durch den Effekt einer Trainerkarte gegen 1 Pokémon auf seiner Bank austauscht, ist das neue Aktive Pokémon jetzt von jenem Speziellen Zustand betroffen."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 372453,
		tcgplayer: 189268
	}
}

export default card
