import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [964],
	set: Set,

	name: {
		fr: "Superdofin",
		en: "Palafin",
		es: "Palafin",
		it: "Palafin",
		pt: "Palafin",
		de: "Delfinator"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Poing Sonique",
			en: "Jet Punch",
			es: "Puño Jet",
			it: "Pugnojet",
			pt: "Soco Jato",
			de: "Düsenhieb"
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
	}, {
		cost: ["Water", "Water"],

		name: {
			fr: "Coup Juste",
			en: "Justice Kick",
			es: "Patada Justiciera",
			it: "Calcio Eroico",
			pt: "Chute Justiceiro",
			de: "Gerechtigkeitskick"
		},

		effect: {
			fr: "Si ce Pokémon n'a pas été déplacé du Banc vers le Poste Actif pendant ce tour, cette attaque ne fait rien.",
			en: "If this Pokémon didn't move from the Bench to the Active Spot this turn, this attack does nothing.",
			es: "Si este Pokémon no se ha movido de la Banca al Puesto Activo en este turno, este ataque no hace nada.",
			it: "Se questo Pokémon non si è spostato dalla panchina in posizione attiva nel turno in corso, questo attacco non ha effetto.",
			pt: "Se este Pokémon não foi movido do Banco para o Campo Ativo durante este turno, este ataque não fará nada.",
			de: "Wenn dieses Pokémon während dieses Zuges nicht von deiner Bank in die Aktive Position gewechselt ist, hat diese Attacke keine Auswirkungen."
		},

		damage: 210
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: true,
		holo: true,
		reverse: true,
	},

	illustrator: "Souichirou Gunjima",

	thirdParty: {
		cardmarket: 725142
	}
}

export default card
