import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [188],
	set: Set,

	name: {
		fr: "Floravol",
		en: "Skiploom",
		es: "Skiploom",
		it: "Skiploom",
		pt: "Skiploom",
		de: "Hubelupf"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Esquive Dérivante",
			en: "Drifting Dodge",
			es: "Escape a la Deriva",
			it: "Schivata Fluttuante",
			pt: "Evasão à Deriva",
			de: "Ausweichgleiter"
		},

		effect: {
			fr: "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce. Si c'est face, évitez ces dégâts.",
			en: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.",
			es: "Si se inflige cualquier daño a este Pokémon por ataques, lanza 1 moneda. Si sale cara, se evita ese daño.",
			it: "Se questo Pokémon subisce danni da qualsiasi attacco, lancia una moneta. Se esce testa, previeni quei danni.",
			pt: "Se qualquer dano for causado a este Pokémon por ataques, jogue uma moeda. Se sair cara, previna aquele dano.",
			de: "Wenn diesem Pokémon durch Attacken Schaden zugefügt wird, wirf 1 Münze. Verhindere bei Kopf jenen Schaden."
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			fr: "Zéphyr Fleuri",
			en: "Flowery Zephyr",
			es: "Céfiro Floral",
			it: "Zefiro Floreale",
			pt: "Zéfiro Florido",
			de: "Blumiger Zephir"
		},

		effect: {
			fr: "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			en: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			es: "Este ataque también hace 30 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Yoriyuki Ikegami",

	thirdParty: {
		cardmarket: 715474
	}
}

export default card