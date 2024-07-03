import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [26],
	set: Set,

	name: {
		en: "Raichu",
		fr: "Raichu",
		es: "Raichu",
		it: "Raichu",
		pt: "Raichu",
		de: "Raichu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Collateral Bolts",
			fr: "Éclairs Collatéraux",
			es: "Rayos Colaterales",
			it: "Fulmini Collaterali",
			pt: "Raios Colaterais",
			de: "Kollateralblitze"
		},

		effect: {
			en: "This attack does 50 damage to each Pokémon that has any damage counters on it (both yours and your opponent's), except for this Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 50 dégâts à chacun des Pokémon ayant au moins un marqueur de dégâts (les vôtres et ceux de votre adversaire) à l'exception de ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 50 puntos de daño a cada Pokémon (tanto tuyos como de tu rival) que tenga algún contador de daño sobre él, excepto a este Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 50 danni a ciascuno dei Pokémon che ha dei segnalini danno, sia tuo che del tuo avversario, a eccezione di questo Pokémon. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 50 pontos de dano a cada Pokémon que tiver algum contador de dano nele (seus e do seu oponente), exceto por este Pokémon. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt jedem Pokémon (deinen und denen deines Gegners), auf dem mindestens 1 Schadensmarke liegt, 50 Schadenspunkte zu, außer diesem Pokémon. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Electric Ball",
			fr: "Boule de Foudre",
			es: "Bola Eléctrica",
			it: "Lamposfera",
			pt: "Bola de Eletricidade",
			de: "Stromball"
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card