import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [411],
	set: Set,

	name: {
		en: "Bastiodon",
		fr: "Bastiodon",
		es: "Bastiodon",
		it: "Bastiodon",
		pt: "Bastiodon",
		de: "Bollterus"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],

	evolveFrom: {
		en: "Shieldon",
		fr: "Dinoclier",
		es: "Shieldon",
		it: "Shieldon",
		pt: "Shieldon",
		de: "Schilterus"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Primal Fortress",
			fr: "Forteresse Primitive",
			es: "Fortaleza Primigenia",
			it: "Fortezza Primordiale",
			pt: "Fortaleza Primitiva",
			de: "Festung der Urzeit"
		},

		effect: {
			en: "Your Pokémon take 30 less damage from attacks from your opponent's Pokémon V (after applying Weakness and Resistance).",
			fr: "Vos Pokémon subissent 30 dégâts de moins provenant des attaques des Pokémon-V de votre adversaire (après application de la Faiblesse et de la Résistance).",
			es: "Los ataques de los Pokémon V de tu rival hacen 30 puntos de daño menos a tus Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "I tuoi Pokémon subiscono 30 danni in meno dagli attacchi dei Pokémon-V del tuo avversario, dopo aver applicato debolezza e resistenza.",
			pt: "Os seus Pokémon recebem 30 pontos de dano a menos de ataques dos Pokémon V do seu oponente (depois de aplicar Fraqueza e Resistência).",
			de: "Deinen Pokémon werden durch Attacken von Pokémon-V deines Gegners 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Iron Tackle",
			fr: "Charge de Fer",
			es: "Bloqueo de Hierro",
			it: "Azione Ferrea",
			pt: "Golpe de Colisão Férreo",
			de: "Eisentackle"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 180
	}],

	retreat: 4,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card
