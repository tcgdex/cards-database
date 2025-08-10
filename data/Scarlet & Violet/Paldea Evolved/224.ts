import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [968],
	set: Set,

	name: {
		fr: "Ferdeter",
		en: "Orthworm",
		es: "Orthworm",
		it: "Orthworm",
		pt: "Orthworm",
		de: "Schlurm"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Fer Nutritif",
			en: "Nutritional Iron",
			es: "Hierro Nutritivo",
			it: "Ferro Nutrizionale",
			pt: "Ferro Nutritivo",
			de: "Nahrhaftes Eisen"
		},

		effect: {
			fr: "Si au moins 3 Énergies {M} sont attachées à ce Pokémon, il reçoit +100 PV.",
			en: "If this Pokémon has 3 or more {M} Energy attached, it gets +100 HP.",
			es: "Si este Pokémon tiene 3 Energías {M} o más unidas, obtiene 100 PS más.",
			it: "Se questo Pokémon ha tre o più Energie {M} assegnate, ha 100 PS in più.",
			pt: "Se este Pokémon tiver 3 ou mais Energias {M} ligadas a ele, receberá 100 PS a mais.",
			de: "Wenn an dieses Pokémon 3 oder mehr {M}-Energien angelegt sind, erhält es +100 KP."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Passer à Travers",
			en: "Shoot Through",
			es: "Cruzar Rápido",
			it: "Sparainmezzo",
			pt: "Tiro Vazante",
			de: "Durchschießen"
		},

		effect: {
			fr: "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			en: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			es: "Este ataque también hace 30 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "OKACHEKE"
}

export default card