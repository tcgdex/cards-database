import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "G Scope",
		'fr-fr': "Impact G",
		'es-es': "Alcance G",
		'it-it': "Mirino G",
		'pt-br': "Alvo G",
		'de-de': "G-Skop"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Le Genesect-EX auquel cette carte est attachée peut aussi utiliser l'attaque sur cette carte. (Vous avez toujours besoin de l'Énergie nécessaire pour utiliser cette attaque.)",
		'en-us': "This attack does 100 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
		'es-es': "Este ataque hace 100 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia para los Pokémon en Banca.)",
		'it-it': "Questo attacco infligge 100 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
		'pt-br': "Este ataque causa 100 de danos a 1 dos Pokémon do Banco do oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
		'de-de': "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 100 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 281114,
		tcgplayer: 85596
	}
}

export default card
