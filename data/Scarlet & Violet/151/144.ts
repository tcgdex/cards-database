import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [144],
	set: Set,

	name: {
		fr: "Artikodin",
		en: "Articuno",
		es: "Articuno",
		it: "Articuno",
		pt: "Articuno",
		de: "Arktos"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Flottaison Glaciale",
			en: "Ice Float",
			es: "Flotación Glacial",
			it: "Salvagente Glaciale",
			pt: "Gelo à Deriva",
			de: "Eisfloß"
		},

		effect: {
			fr: "Si au moins une Énergie {W} est attachée à ce Pokémon, il n'a pas de Coût de Retraite.",
			en: "If this Pokémon has any {W} Energy attached, it has no Retreat Cost.",
			es: "Si este Pokémon tiene alguna Energía {W} unida, no tiene ningún Coste de Retirada.",
			it: "Se questo Pokémon ha delle Energie {W} assegnate, non ha costo di ritirata.",
			pt: "Se este Pokémon tiver alguma Energia {W} ligada a ele, não terá custo de Recuo.",
			de: "Wenn an dieses Pokémon mindestens 1 {W}-Energie angelegt ist, hat es keine Rückzugskosten."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Water"],

		name: {
			fr: "Blizzard",
			en: "Blizzard",
			es: "Ventisca",
			it: "Bora",
			pt: "Nevasca",
			de: "Blizzard"
		},

		effect: {
			fr: "Cette attaque inflige aussi 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			en: "This attack also does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			es: "Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 10 pontos de dano a cada um dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 110
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false
	},

	illustrator: "chibi"
}

export default card
