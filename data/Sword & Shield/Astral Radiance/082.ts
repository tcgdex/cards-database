import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Hisuian Decidueye",
		fr: "Archéduc de Hisui",
		es: "Decidueye de Hisui",
		it: "Decidueye di Hisui",
		pt: "Decidueye de Hisui",
		de: "Hisui-Silvarro"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	evolveFrom: {
		en: "Dartrix",
		fr: "Efflèche",
		es: "Dartrix",
		it: "Dartrix",
		pt: "Dartrix",
		de: "Arboretoss"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Piercing Claw",
			fr: "Griffe Perçante",
			es: "Garra Perforadora",
			it: "Artiglio Perforante",
			pt: "Garra Perfurante",
			de: "Durchdringende Kralle"
		},

		effect: {
			en: "This attack does 30 damage for each damage counter on your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 30 dégâts pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 30 puntos de daño por cada contador de daño en el Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 30 danni per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 30 pontos de dano para cada contador de dano no Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 30 Schadenspunkte zu."
		},

		damage: "30×"
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Direct Arrow",
			fr: "Flèche Directe",
			es: "Flecha Directa",
			it: "Freccia Diretta",
			pt: "Flecha Direta",
			de: "Direkter Pfeil"
		},

		effect: {
			en: "This attack does 80 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 80 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 80 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 80 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 80 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 80 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658692,
		tcgplayer: 272283
	}
}

export default card
