import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Jumpluff",
		fr: "Cotovol",
		es: "Jumpluff",
		it: "Jumpluff",
		pt: "Jumpluff",
		de: "Papungha"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Drifting Dodge",
			fr: "Esquive Dérivante",
			es: "Escape a la Deriva",
			it: "Schivata Fluttuante",
			pt: "Evasão à Deriva",
			de: "Ausweichgleiter"
		},

		effect: {
			en: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.",
			fr: "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce. Si c'est face, évitez ces dégâts.",
			es: "Si se inflige cualquier daño a este Pokémon por ataques, lanza 1 moneda. Si sale cara, se evita ese daño.",
			it: "Se questo Pokémon subisce danni da qualsiasi attacco, lancia una moneta. Se esce testa, previeni quei danni.",
			pt: "Se qualquer dano for causado a este Pokémon por ataques, jogue uma moeda. Se sair cara, previna aquele dano.",
			de: "Wenn diesem Pokémon durch Attacken Schaden zugefügt wird, wirf 1 Münze. Verhindere bei Kopf jenen Schaden."
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Fluffy Breeze",
			fr: "Brise Duveteuse",
			es: "Brisa Esponjosa",
			it: "Brezza Morbidezza",
			pt: "Brisa Felpuda",
			de: "Flauschige Brise"
		},

		effect: {
			en: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 30 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card