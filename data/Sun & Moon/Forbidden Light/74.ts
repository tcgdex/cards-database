import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Diancie ◇",
		fr: "Diancie ◇",
		es: "Diancie ◇",
		it: "Diancie ◇",
		pt: "Diancie ◇",
		de: "Diancie ◇"
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		719,
	],
	hp: 120,
	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Princess’s Cheers",
				fr: "Vivats de Princesse",
				es: "Ovación de la Princesa",
				it: "Incitamento della Principessa",
				pt: "Torcida da Princesa",
				de: "Zuspruch der Prinzessin"
			},
			effect: {
				en: "As long as this Pokémon is on your Bench, your Fighting Pokémon’s attacks do 20 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance).",
				fr: "Tant que ce Pokémon est sur votre Banc, les attaques de vos Pokémon Fighting infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				es: "Mientras este Pokémon esté en tu Banca, los ataques de tus Pokémon Fighting hacen 20 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
				it: "Fintanto che questo Pokémon è nella tua panchina, gli attacchi dei tuoi Pokémon Fighting infliggono 20 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
				pt: "Enquanto este Pokémon estiver no seu Banco, os ataques dos seus Pokémon Fighting causam 20 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
				de: "Solang sich dieses Pokémon auf deiner Bank befindet, fügen die Attacken deiner Fighting-Pokémon dem Aktiven Pokémon deines Gegners 20 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Diamond Rain",
				fr: "Pluie de Diamants",
				es: "Lluvia de Diamantes",
				it: "Pioggia di Diamanti",
				pt: "Chuva de Diamantes",
				de: "Diamantregen"
			},
			effect: {
				en: "Heal 30 damage from each of your Benched Pokémon.",
				fr: "Soignez 30 dégâts à chacun de vos Pokémon de Banc.",
				es: "Cura 30 puntos de daño a cada uno de tus Pokémon en Banca.",
				it: "Cura ciascuno dei tuoi Pokémon in panchina da 30 danni.",
				pt: "Cure 30 pontos de dano de cada um dos seus Pokémon no Banco.",
				de: "Heile 30 Schadenspunkte bei jedem Pokémon auf deiner Bank."
			},
			damage: 90,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				fr: "Pluie de Diamants",
			},
			effect: {
				fr: "Soignez 30 dégâts à chacun de vos Pokémon de Banc.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
