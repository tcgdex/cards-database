import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [146],
	set: Set,

	name: {
		fr: "Sulfura",
		en: "Moltres",
		es: "Moltres",
		it: "Moltres",
		pt: "Moltres",
		de: "Lavados"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Flottaison Flamboyante",
			en: "Flare Float",
			es: "Flotación Ígnea",
			it: "Salvagente Fiammeggiante",
			pt: "Chamas à Deriva",
			de: "Flammenfloß"
		},

		effect: {
			fr: "Si au moins une Énergie {R} est attachée à ce Pokémon, il n'a pas de Coût de Retraite.",
			en: "If this Pokémon has any {R} Energy attached, it has no Retreat Cost.",
			es: "Si este Pokémon tiene alguna Energía {R} unida, no tiene ningún Coste de Retirada.",
			it: "Se questo Pokémon ha delle Energie {R} assegnate, non ha costo di ritirata.",
			pt: "Se este Pokémon tiver alguma Energia {R} ligada a ele, não terá custo de Recuo.",
			de: "Wenn an dieses Pokémon mindestens 1 {R}-Energie angelegt ist, hat es keine Rückzugskosten."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Fire"],

		name: {
			fr: "Vol Enflammé",
			en: "Blazing Flight",
			es: "Vuelo Calcinador",
			it: "Volo Rovente",
			pt: "Voo Flamejante",
			de: "Feuriger Flug"
		},

		effect: {
			fr: "Défaussez 2 Énergies {R} de ce Pokémon. Cette attaque inflige 120 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			en: "Discard 2 {R} Energy from this Pokémon. This attack does 120 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			es: "Descarta 2 Energías {R} de este Pokémon. Este ataque hace 120 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Scarta due Energie {R} da questo Pokémon. Questo attacco infligge 120 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Descarte 2 Energias {R} deste Pokémon. Este ataque causa 120 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Lege 2 {R}-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 120 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "KEIICHIRO ITO"
}

export default card