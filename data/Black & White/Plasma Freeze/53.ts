import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Deoxys-EX",
		fr: "Deoxys-EX",
		es: "Deoxys-EX",
		it: "Deoxys-EX",
		pt: "Deoxys-EX",
		de: "Deoxys-EX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		386,
	],
	hp: 170,
	types: [
		"Psychic",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Power Connect",
				fr: "Connexion Renforcée",
				es: "Conectar Poder",
				it: "Collegaforza",
				pt: "Conexão de Poder",
				de: "Volltreffer"
			},
			effect: {
				en: "Your Team Plasma Pokémon’s attacks (excluding Deoxys-EX) do 10 more damage to the Active Pokémon (before applying Weakness and Resistance).",
				fr: "Les attaques de vos Pokémon de la Team Plasma (excepté Deoxys-EX) infligent 10 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance).",
				es: "Los ataques de tus Pokémon del Equipo Plasma (excepto Deoxys-EX) hacen 10 puntos de daño más a los Pokémon Activos (antes de aplicar Debilidad y Resistencia).",
				it: "Gli attacchi dei tuoi Pokémon Team Plasma (eccetto Deoxys-EX) infliggono 10 danni in più al Pokémon attivo, prima di aver applicato debolezza e resistenza.",
				pt: "Os ataques dos seus Pokémon da Equipe Plasma (exceto Deoxys-EX) causam 10 de danos adicionais ao Pokémon Ativo (antes da aplicação de Fraqueza e Resistência).",
				de: "Die Angriffe deiner Team-Plasma-Pokémon (mit Ausnahme von Deoxys-EX) fügen den Aktiven Pokémon 10 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Helix Force",
				fr: "Force Spirale",
			},
			effect: {
				en: "If this Pokémon has any Plasma Energy attached to it, this attack does 30 more damage for each Energy attached to the Defending Pokémon.",
				fr: "Si de l'Énergie Plasma est attachée à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
