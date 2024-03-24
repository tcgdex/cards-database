import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Palafin",
		fr: "Superdofin",
		es: "Palafin",
		it: "Palafin"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Jet Punch",
			fr: "Poing Sonique",
			es: "Puño Jet",
			it: "Pugnojet"
		},

		effect: {
			en: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 30 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina."
		},

		damage: 30
	}, {
		cost: ["Water", "Water"],

		name: {
			en: "Justice Kick",
			fr: "Coup Juste",
			es: "Patada Justiciera",
			it: "Calcio Eroico"
		},

		effect: {
			en: "If this Pokémon didn't move from the Bench to the Active Spot this turn, this attack does nothing.",
			fr: "Si ce Pokémon n'a pas été déplacé du Banc vers le Poste Actif pendant ce tour, cette attaque ne fait rien.",
			es: "Si este Pokémon no se ha movido de la Banca al Puesto Activo en este turno, este ataque no hace nada.",
			it: "Se questo Pokémon non si è spostato dalla panchina in posizione attiva nel turno in corso, questo attacco non ha effetto."
		},

		damage: 210
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card