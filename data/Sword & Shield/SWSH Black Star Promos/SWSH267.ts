import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [386],
	set: Set,

	name: {
		fr: "Deoxys VMAX",
		de: "Deoxys VMAX",
		es: "Deoxys VMAX",
		pt: "Deoxys VMAX",
		it: "Deoxys VMAX",
		en: "Deoxys VMAX"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 330,
	types: ["Psychic"],

	evolveFrom: {
		fr: "Deoxys-V",
		de: "Deoxys-V",
		es: "Deoxys V",
		pt: "Deoxys V",
		it: "Deoxys-V",
		en: "Deoxys V"
	},

	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			fr: "ADN Proctecteur",
			de: "Schützende DNA",
			es: "Protección ADN",
			pt: "DNA Protetor",
			it: "DNA Protettivo",
			en: "Protective DNA"
		},

		effect: {
			fr: "Tous vos Pokémon subissent 30 dégâts de moins provenant des attaques des Pokémon-VSTAR de votre adversaire (après application de la Faiblesse et de la Résistance).",
			de: "Allen deinen Pokémon werden durch Attacken von Pokémon-VSTAR deines Gegners 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			es: "Los ataques de los Pokémon V-ASTRO de tu rival hacen 30 puntos de daño menos a todos tus Pokémon (después de aplicar Debilidad y Resistencia).",
			pt: "Todos os seus Pokémon recebem 30 pontos de dano a menos de ataques dos Pokémon V-ASTRO do seu oponente (depois de aplicar Fraqueza e Resistência).",
			it: "I tuoi Pokémon subiscono 30 danni in meno dagli attacchi dei Pokémon-{ASTRO} del tuo avversario, dopo aver applicato debolezza e resistenza.",
			en: "All of your Pokémon take 30 less damage from attacks from your opponent's Pokémon VSTAR (after applying Weakness and Resistance)."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			fr: "Aspiromax",
			de: "Dyna-Sauger",
			es: "Maxidrenaje",
			pt: "Dreno Max",
			it: "Dynassorbimento",
			en: "Max Drain"
		},

		effect: {
			fr: "Soignez 30 dégâts de ce Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			en: "Heal 30 damage from this Pokémon."
		},

		damage: 160
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card