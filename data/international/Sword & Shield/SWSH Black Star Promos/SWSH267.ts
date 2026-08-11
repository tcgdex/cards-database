import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [386],
	set: Set,

	name: {
		'fr-fr': "Deoxys VMAX",
		'de-de': "Deoxys VMAX",
		'es-es': "Deoxys VMAX",
		'pt-br': "Deoxys VMAX",
		'it-it': "Deoxys VMAX",
		'en-us': "Deoxys VMAX"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 330,
	types: ["Psychic"],

	evolveFrom: {
		'fr-fr': "Deoxys-V",
		'de-de': "Deoxys-V",
		'es-es': "Deoxys V",
		'pt-br': "Deoxys V",
		'it-it': "Deoxys-V",
		'en-us': "Deoxys V"
	},

	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "ADN Proctecteur",
			'de-de': "Schützende DNA",
			'es-es': "Protección ADN",
			'pt-br': "DNA Protetor",
			'it-it': "DNA Protettivo",
			'en-us': "Protective DNA"
		},

		effect: {
			'fr-fr': "Tous vos Pokémon subissent 30 dégâts de moins provenant des attaques des Pokémon-VSTAR de votre adversaire (après application de la Faiblesse et de la Résistance).",
			'de-de': "Allen deinen Pokémon werden durch Attacken von Pokémon-VSTAR deines Gegners 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			'es-es': "Los ataques de los Pokémon V-ASTRO de tu rival hacen 30 puntos de daño menos a todos tus Pokémon (después de aplicar Debilidad y Resistencia).",
			'pt-br': "Todos os seus Pokémon recebem 30 pontos de dano a menos de ataques dos Pokémon V-ASTRO do seu oponente (depois de aplicar Fraqueza e Resistência).",
			'it-it': "I tuoi Pokémon subiscono 30 danni in meno dagli attacchi dei Pokémon-{ASTRO} del tuo avversario, dopo aver applicato debolezza e resistenza.",
			'en-us': "All of your Pokémon take 30 less damage from attacks from your opponent's Pokémon VSTAR (after applying Weakness and Resistance)."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Aspiromax",
			'de-de': "Dyna-Sauger",
			'es-es': "Maxidrenaje",
			'pt-br': "Dreno Max",
			'it-it': "Dynassorbimento",
			'en-us': "Max Drain"
		},

		effect: {
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'en-us': "Heal 30 damage from this Pokémon."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 669843
	}
}

export default card
