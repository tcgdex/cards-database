import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [426],
	set: Set,

	name: {
		en: "Drifblim",
		fr: "Grodrive",
		es: "Drifblim",
		it: "Drifblim",
		pt: "Drifblim",
		de: "Drifzepeli"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	evolveFrom: {
		en: "Drifloon",
		fr: "Baudrive",
		es: "Drifloon",
		it: "Drifloon",
		pt: "Drifloon",
		de: "Driftlon"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Everyone Explode Now",
			fr: "Explosion Générale",
			es: "Que Explote Todo el Mundo",
			it: "Esplosione Generale",
			pt: "Todos Explodem Agora",
			de: "Alle explodieren – jetzt!"
		},

		effect: {
			en: "This attack does 50 damage for each of your Drifloon and Drifblim in play. This attack also does 30 damage to each of your Drifloon and Drifblim. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 50 dégâts pour chacun de vos Baudrive et Grodrive en jeu. Cette attaque inflige aussi 30 dégâts à chacun de vos Baudrive et Grodrive. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 50 puntos de daño por cada uno de tus Drifloon y Drifblim en juego. Este ataque también hace 30 puntos de daño a cada uno de tus Drifloon y Drifblim. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 50 danni per ogni tuo Drifloon e Drifblim in gioco. Questo attacco infligge anche 30 danni a ciascuno dei tuoi Drifloon e Drifblim. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 50 pontos de dano para cada um dos seus Drifloon e Drifblim em jogo. Este ataque também causa 30 pontos de dano a cada um dos seus Drifloon e Drifblim. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt für jedes deiner Driftlon und Drifzepeli im Spiel 50 Schadenspunkte zu. Diese Attacke fügt auch jedem deiner Driftlon und Drifzepeli 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: "50×"
	}],

	retreat: 2,
	regulationMark: "H",
	illustrator: "Keisin"
}

export default card