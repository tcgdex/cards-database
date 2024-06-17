import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [516],
	set: Set,

	name: {
		en: "Simipour",
		fr: "Flotoutan",
		es: "Simipour",
		it: "Simipour",
		pt: "Simipour",
		de: "Sodachita"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Monkey Trio",
			fr: "Trio Simiesque",
			es: "Trío de Monos",
			it: "Trio delle Scimmie",
			pt: "Trio Primata",
			de: "Affentrio"
		},

		effect: {
			en: "If you have Simisage, Simisear, and Simipour in play, ignore all Colorless Energy in the costs of attacks used by this Pokémon.",
			fr: "Si vous avez Feuiloutan, Flamoutan et Flotoutan en jeu, ignorez toutes les Énergies Colorless dans le coût des attaques utilisées par ce Pokémon.",
			es: "Si tienes a Simisage, Simisear y Simipour en juego, ignora todas las Energías Colorless en los costes de los ataques usados por este Pokémon.",
			it: "Se hai in gioco Simisage, Simisear e Simipour, ignora tutte le Energie Colorless necessarie per gli attacchi usati da questo Pokémon.",
			pt: "Se você tiver Simisage, Simisear e Simipour em jogo, ignore todas as Energias Colorless nos custos dos ataques usados por este Pokémon.",
			de: "Wenn du Vegichita, Grillchita und Sodachita im Spiel hast, ignoriere alle Colorless-Energien in den Kosten der von diesem Pokémon eingesetzten Attacken."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Liquid Lashing",
			fr: "Projection de Liquide",
			es: "Azote Líquido",
			it: "Liquisferza",
			pt: "Chicotada Líquida",
			de: "Peitschenfluss"
		},

		effect: {
			en: "This attack also does 30 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 30 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 30 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 30 danni a ciascuno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 30 pontos de dano a cada um dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card