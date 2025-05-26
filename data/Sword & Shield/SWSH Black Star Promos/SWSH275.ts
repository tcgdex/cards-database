import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Manaphy",
		de: "Manaphy",
		es: "Manaphy",
		pt: "Manaphy",
		it: "Manaphy",
		en: "Manaphy"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Courants Extracteurs",
			de: "Reißende Strömung",
			es: "Corrientes de Tracción",
			pt: "Maré Arrastadora",
			it: "Correnti Trainanti",
			en: "Pulling Currents"
		},

		effect: {
			fr: "Votre adversaire montre sa main. Placez jusqu'à 2 Pokémon de base que vous y trouvez sur le Banc de votre adversaire.",
			de: "Dein Gegner zeigt dir seine Handkarten. Lege bis zu 2 Basis-Pokémon, die du dort findest, auf die Bank deines Gegners.",
			es: "Tu rival enseña las cartas de su mano. Pon hasta 2 Pokémon Básicos que encuentres entre ellas en la Banca de tu rival.",
			pt: "Seu oponente revela a própria mão. Coloque até 2 Pokémon Básicos que encontrar lá no Banco do seu oponente.",
			it: "Il tuo avversario mostra le carte che ha in mano. Prendi fino a due Pokémon Base presenti tra quelle carte e mettili nella sua panchina.",
			en: "Your opponent reveals their hand. Put up to 2 Basic Pokémon you find there onto your opponent's Bench."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			fr: "Aquaballe",
			de: "Aquageschoss",
			es: "Bala Agua",
			pt: "Projétil de Água",
			it: "Idrodardo",
			en: "Aqua Bullet"
		},

		effect: {
			fr: "Cette attaque inflige aussi 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			es: "Este ataque también hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			it: "Questo attacco infligge anche 20 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "F",

	description: {
		en: "It starts its life with a wondrous power that permits it to bond with any kind of Pokémon."
	}
}

export default card