import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	set: Set,

	name: {
		en: "Pupitar",
		fr: "Ymphect",
		es: "Pupitar",
		it: "Pupitar",
		pt: "Pupitar",
		de: "Pupitar"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		en: "Larvitar",
		fr: "Embrylex",
		es: "Larvitar",
		it: "Larvitar",
		pt: "Larvitar",
		de: "Larvitar"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Crashing Bullet",
			fr: "Projectile Percutant",
			es: "Bala Demoledora",
			it: "Schiantadardo",
			pt: "Projétil Estrondoso",
			de: "Kugelhagel"
		},

		effect: {
			en: "This attack also does 20 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 20 dégâts à chacun des Pokémon de Banc (les vôtres et ceux de votre adversaire). (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 20 puntos de daño a cada Pokémon en Banca (tanto tuyos como de tu rival). (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 20 danni a ciascun Pokémon in panchina, sia tuo che del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 20 pontos de dano a cada um dos Pokémon no Banco (seus e do seu oponente). (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt auch jedem Pokémon auf der Bank (deiner und der deines Gegners) 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 20
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card