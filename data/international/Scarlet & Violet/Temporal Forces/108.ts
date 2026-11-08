import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [981],
	set: Set,

	name: {
		'en-us': "Farigiraf ex",
		'fr-fr': "Farigiraf-ex",
		'es-es': "Farigiraf ex",
		'it-it': "Farigiraf-ex",
		'pt-br': "Farigiraf ex",
		'de-de': "Farigiraf-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Girafarig",
		'fr-fr': "Girafarig",
		'es-es': "Girafarig",
		'it-it': "Girafarig",
		'pt-br': "Girafarig",
		'de-de': "Girafarig"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Armor Tail",
			'fr-fr': "Armure Caudale",
			'es-es': "Cola Armadura",
			'it-it': "Codarmatura",
			'pt-br': "Cauda de Armadura",
			'de-de': "Schweifrüstung"
		},

		effect: {
			'en-us': "Prevent all damage done to this Pokémon by attacks from your opponent's Basic Pokémon ex.",
			'fr-fr': "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon-ex de base de votre adversaire.",
			'es-es': "Se evita todo el daño infligido a este Pokémon por ataques de los Pokémon ex Básicos de tu rival.",
			'it-it': "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon-ex Base del tuo avversario.",
			'pt-br': "Previna todo o dano causado a este Pokémon por ataques dos Pokémon ex Básicos do seu oponente.",
			'de-de': "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Basis-Pokémon-ex deines Gegners zugefügt wird."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Dirty Beam",
			'fr-fr': "Rayon Abject",
			'es-es': "Rayo Sucio",
			'it-it': "Raggio Sleale",
			'pt-br': "Feixe Traiçoeiro",
			'de-de': "Fieser Strahl"
		},

		effect: {
			'en-us': "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 30 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 760738,
				tcgplayer: 542852
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

}

export default card