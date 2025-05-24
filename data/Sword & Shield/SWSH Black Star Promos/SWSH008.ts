import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	name: {
		fr: "Berserkatt de Galar",
		en: "Galarian Perrserker",
		es: "Perrserker de Galar",
		it: "Perrserker di Galar",
		pt: "Perrserker de Galar",
		de: "Galar-Mauzinger"
	},

	illustrator: "Akira Komayama",
	rarity: "None",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Metal",
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Boost Acier",
				en: "Steely Spirit",
				es: "Alma Acerada",
				it: "Spiritoferreo",
				pt: "Espírito Férreo",
				de: "Stählerner Wille"
			},
			effect: {
				fr: "Les attaques de vos Pokémon {M} infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				en: "Your {M} Pokémon's attacks do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
				es: "Los ataques de tus Pokémon {M} hacen 20 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
				it: "Gli attacchi dei tuoi Pokémon {M} infliggono 20 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
				pt: "Os ataques dos seus Pokémon {M} causam 20 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
				de: "Die Attacken deiner {M}-Pokémon fügen dem Aktiven Pokémon deines Gegners 20 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				fr: "Griffe Acier",
				en: "Metal Claw",
				es: "Garra Metal",
				it: "Ferrartigli",
				pt: "Garra de Metal",
				de: "Metallklaue"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 2,

	evolveFrom: {
		en: "Galarian Meowth",
		fr: "Miaouss de Galar",
		de: "Galar-Mauzi",
		es: "Meowth de Galar",
		pt: "Meowth de Galar",
		it: "Meowth di Galar"
	},

	description: {
		en: "What appears to be an iron helmet is actually hardened hair. This Pokémon lives for the thrill of battle."
	},

	dexId: [863],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D"
}

export default card
