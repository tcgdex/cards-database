import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [471],
	set: Set,

	name: {
		en: "Glaceon ex",
		fr: "Givrali-ex",
		es: "Glaceon ex",
		pt: "Glaceon ex",
		it: "Glaceon-ex",
		de: "Glaziola-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 270,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Frost Bullet",
			fr: "Kunaï Givré",
			es: "Bala Helada",
			pt: "Projétil Congelado",
			it: "Dardogelo",
			de: "Frostprojektil"
		},

		effect: {
			en: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 30 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			it: "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 110
	}, {
		cost: ["Grass", "Water", "Darkness"],

		name: {
			en: "Euclase",
			fr: "Euclase",
			es: "Euclasa",
			pt: "Euclásio",
			it: "Euclasio",
			de: "Euklas"
		},

		effect: {
			en: "Knock Out 1 of your opponent's Pokémon that has exactly 6 damage counters on it.",
			fr: "Mettez K.O. l'un des Pokémon de votre adversaire ayant exactement 6 marqueurs de dégâts.",
			es: "Deja Fuera de Combate a 1 de los Pokémon de tu rival que tenga exactamente 6 contadores de daño sobre él.",
			pt: "Nocauteie 1 dos Pokémon do seu oponente que tiver exatamente 6 contadores de dano nele.",
			it: "Metti KO uno dei Pokémon del tuo avversario che ha esattamente sei segnalini danno.",
			de: "Mache 1 Pokémon deines Gegners, auf dem genau 6 Schadensmarken liegen, kampfunfähig."
		}
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: true,
		normal: false
	},

	illustrator: "Kamome Shirahama"
}

export default card