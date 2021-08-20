import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Archeops",
		fr: "Aéroptéryx",
		es: "Archeops",
		it: "Archeops",
		pt: "Archeops",
		de: "Aeropteryx"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		567,
	],

	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Archen",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Ancient Power",
				fr: "Pouv.Antique",
				es: "Poder Pasado",
				it: "Forzantica",
				pt: "Poder Ancestral",
				de: "Antik-Kraft"
			},
			effect: {
				en: "Each player can’t play any Pokémon from his or her hand to evolve his or her Pokémon.",
				fr: "Aucun joueur ne peut jouer de Pokémon de sa main pour faire évoluer ses Pokémon.",
				es: "Los jugadores no pueden jugar ningún Pokémon de su mano para evolucionar a sus Pokémon.",
				it: "Nessun giocatore può giocare dei Pokémon dalla propria mano per far evolvere altri Pokémon.",
				pt: "Nenhum jogador pode jogar nenhum Pokémon de sua própria mão para evoluir o Pokémon desse jogador.",
				de: "Kein Spieler darf Pokémon von seiner Hand spielen, um die eigenen Pokémon zu entwickeln."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rock Slide",
			},
			effect: {
				en: "Does 10 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2
}

export default card
