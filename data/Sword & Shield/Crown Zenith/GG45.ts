import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Deoxys VMAX",
		fr: "Deoxys VMAX",
		es: "Deoxys VMAX",
		it: "Deoxys VMAX",
		pt: "Deoxys VMAX",
		de: "Deoxys VMAX"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Psychic"],

	evolveFrom: {
		en: "Deoxys V",
		fr: "Deoxys-V",
		es: "Deoxys V",
		it: "Deoxys-V",
		pt: "Deoxys V",
		de: "Deoxys-V"
	},

	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Protective DNA",
			fr: "ADN Proctecteur",
			es: "Protección ADN",
			it: "DNA Protettivo",
			pt: "DNA Protetor",
			de: "Schützende DNA"
		},

		effect: {
			en: "All of your Pokémon take 30 less damage from attacks from your opponent's Pokémon VSTAR (after applying Weakness and Resistance).",
			fr: "Tous vos Pokémon subissent 30 dégâts de moins provenant des attaques des Pokémon-VSTAR de votre adversaire (après application de la Faiblesse et de la Résistance).",
			es: "Los ataques de los Pokémon V-ASTRO de tu rival hacen 30 puntos de daño menos a todos tus Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "I tuoi Pokémon subiscono 30 danni in meno dagli attacchi dei Pokémon-{ASTRO} del tuo avversario, dopo aver applicato debolezza e resistenza.",
			pt: "Todos os seus Pokémon recebem 30 pontos de dano a menos de ataques dos Pokémon V-ASTRO do seu oponente (depois de aplicar Fraqueza e Resistência).",
			de: "Allen deinen Pokémon werden durch Attacken von Pokémon-VSTAR deines Gegners 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Max Drain",
			fr: "Aspiromax",
			es: "Maxidrenaje",
			it: "Dynassorbimento",
			pt: "Dreno Max",
			de: "Dyna-Sauger"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 160
	}],

	retreat: 3,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card