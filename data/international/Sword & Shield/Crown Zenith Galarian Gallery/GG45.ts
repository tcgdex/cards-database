import { Card } from "models/database/card"
import Set from "../Crown Zenith Galarian Gallery"

const card: Card = {
	dexId: [386],
	set: Set,

	name: {
		'en-us': "Deoxys VMAX",
		'fr-fr': "Deoxys VMAX",
		'es-es': "Deoxys VMAX",
		'it-it': "Deoxys VMAX",
		'pt-br': "Deoxys VMAX",
		'de-de': "Deoxys VMAX"
	},

	illustrator: "Akira Komayama",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Deoxys V",
		'fr-fr': "Deoxys-V",
		'es-es': "Deoxys V",
		'it-it': "Deoxys-V",
		'pt-br': "Deoxys V",
		'de-de': "Deoxys-V"
	},

	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Protective DNA",
			'fr-fr': "ADN Proctecteur",
			'es-es': "Protección ADN",
			'it-it': "DNA Protettivo",
			'pt-br': "DNA Protetor",
			'de-de': "Schützende DNA"
		},

		effect: {
			'en-us': "All of your Pokémon take 30 less damage from attacks from your opponent's Pokémon VSTAR (after applying Weakness and Resistance).",
			'fr-fr': "Tous vos Pokémon subissent 30 dégâts de moins provenant des attaques des Pokémon-VSTAR de votre adversaire (après application de la Faiblesse et de la Résistance).",
			'es-es': "Los ataques de los Pokémon V-ASTRO de tu rival hacen 30 puntos de daño menos a todos tus Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "I tuoi Pokémon subiscono 30 danni in meno dagli attacchi dei Pokémon-{ASTRO} del tuo avversario, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Todos os seus Pokémon recebem 30 pontos de dano a menos de ataques dos Pokémon V-ASTRO do seu oponente (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Allen deinen Pokémon werden durch Attacken von Pokémon-VSTAR deines Gegners 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Max Drain",
			'fr-fr': "Aspiromax",
			'es-es': "Maxidrenaje",
			'it-it': "Dynassorbimento",
			'pt-br': "Dreno Max",
			'de-de': "Dyna-Sauger"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
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


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691925,
				tcgplayer: 477354
			}
		},
	],
}

export default card
