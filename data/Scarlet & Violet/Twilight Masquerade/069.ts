import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [587],
	set: Set,

	name: {
		en: "Emolga",
		fr: "Emolga",
		es: "Emolga",
		it: "Emolga",
		pt: "Emolga",
		de: "Emolga"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Sky Wave",
			fr: "Vague Céleste",
			es: "Onda Voladora",
			it: "Aeronda",
			pt: "Onda Celeste",
			de: "Himmelswelle"
		},

		effect: {
			en: "This attack also does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 10 dégâts à chacun des Pokémon de Banc (les vôtres et ceux de votre adversaire). (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 10 puntos de daño a cada Pokémon en Banca (tanto tuyos como de tu rival). (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 10 danni a ciascun Pokémon in panchina, sia tuo che del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 10 pontos de dano a cada um dos Pokémon no Banco (seus e do seu oponente). (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt auch jedem Pokémon auf der Bank (deiner und der deines Gegners) 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 10
	}],

	retreat: 0,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Shimaris Yukichi",

	thirdParty: {
		cardmarket: 769243
	}
}

export default card