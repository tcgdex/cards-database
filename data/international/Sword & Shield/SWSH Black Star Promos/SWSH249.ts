import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [900],
	set: Set,

	name: {
		'fr-fr': "Hachécateur VSTAR",
		'de-de': "Axantor VSTAR",
		'es-es': "Kleavor V-ASTRO",
		'pt-br': "Kleavor V-ASTRO",
		'it-it': "Kleavor V ASTRO",
		'en-us': "Kleavor VSTAR"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 270,
	types: ["Fighting"],

	evolveFrom: {
		'fr-fr': "Hachécateur-V",
		'de-de': "Axantor-V",
		'es-es': "Kleavor V",
		'pt-br': "Kleavor V",
		'it-it': "Kleavor-V",
		'en-us': "Kleavor V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'fr-fr': "Hache Brèche",
			'de-de': "Axtbrecher",
			'es-es': "Golpe de Hacha",
			'pt-br': "Machado Destruidor",
			'it-it': "Frangiscure",
			'en-us': "Axe Break"
		},

		effect: {
			'fr-fr': "Cette attaque inflige aussi 60 dégâts à l'un des Pokémon-V de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Diese Attacke fügt auch 1 Pokémon-V auf der Bank deines Gegners 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'es-es': "Este ataque también hace 60 puntos de daño a 1 de los Pokémon V en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Este ataque também causa 60 pontos de dano a 1 dos Pokémon V no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'it-it': "Questo attacco infligge anche 60 danni a uno dei Pokémon-V nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'en-us': "This attack also does 60 damage to 1 of your opponent's Benched Pokémon V. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		},

		damage: 120
	}, {
		cost: ["Fighting"],

		name: {
			'fr-fr': "Saccage Star",
			'de-de': "Tobender Stern",
			'es-es': "Astro Embestida",
			'pt-br': "Fúria Astral",
			'it-it': "Astro Infuriato",
			'en-us': "Rampaging Star"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 30 dégâts pour chaque Pokémon dans votre pile de défausse. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			'de-de': "Diese Attacke fügt für jedes Pokémon in deinem Ablagestapel 30 Schadenspunkte zu. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)",
			'es-es': "Este ataque hace 30 puntos de daño por cada Pokémon en tu pila de descartes. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			'pt-br': "Este ataque causa 30 pontos de dano para cada Pokémon na sua pilha de descarte (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			'it-it': "Questo attacco infligge 30 danni per ogni Pokémon nella tua pila degli scarti. Non puoi usare più di un Potere V ASTRO a partita.",
			'en-us': "This attack does 30 damage for each Pokémon in your discard pile. (You can't use more than 1 VSTAR Power in a game.)"
		},

		damage: "30×"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 660942
	}
}

export default card
