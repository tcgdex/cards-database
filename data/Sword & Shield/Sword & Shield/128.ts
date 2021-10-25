import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Galarian Perrserker",
		fr: "Berserkatt de Galar",
		es: "Perrserker de Galar",
		it: "Perrserker di Galar",
		pt: "Perrserker de Galar",
		de: "Galar-Mauzinger"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Galarian Meowth",
		fr: "Miaouss de Galar",
		es: "Meowth de Galar",
		it: "Meowth di Galar",
		pt: "Meowth de Galar",
		de: "Galar-Mauzi"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Steely Spirit",
				fr: "Boost Acier",
				es: "Alma Acerada",
				it: "Spiritoferreo",
				pt: "Espírito Férreo",
				de: "Stählerner Wille"
			},
			effect: {
				en: "Your Metal Pokémon's attacks do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
				fr: "Les attaques de vos Pokémon Metal infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				es: "Los ataques de tus Pokémon Metal hacen 20 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
				it: "Gli attacchi dei tuoi Pokémon Metal infliggono 20 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
				pt: "Os ataques dos seus Pokémon Metal causam 20 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
				de: "Die Attacken deiner Metal-Pokémon fügen dem Aktiven Pokémon deines Gegners 20 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
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
				en: "Metal Claw",
				fr: "Griffe Acier",
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
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	description: {
		en: "What appears to be an iron helmet is actually hardened hair. This Pokémon lives for the thrill of battle."
	},

	dexId: [863]
}

export default card
