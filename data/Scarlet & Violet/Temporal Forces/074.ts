import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [606],
	set: Set,

	name: {
		en: "Beheeyem",
		fr: "Neitram",
		es: "Beheeyem",
		it: "Beheeyem",
		pt: "Beheeyem",
		de: "Megalon"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Cosmic Beatdown",
			fr: "Dérouillée Cosmique",
			es: "Porrazo Cósmico",
			it: "Cosmobatosta",
			pt: "Abater Cósmico",
			de: "Kosmischer Niederprügler"
		},

		effect: {
			en: "This attack does 20 damage for each of your Pokémon in play.",
			fr: "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon en jeu.",
			es: "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon en juego.",
			it: "Questo attacco infligge 20 danni per ogni tuo Pokémon in gioco.",
			pt: "Este ataque causa 20 pontos de dano para cada um dos seus Pokémon em jogo.",
			de: "Diese Attacke fügt für jedes deiner Pokémon im Spiel 20 Schadenspunkte zu."
		},

		damage: "20×"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Shinya Komatsu"
}

export default card