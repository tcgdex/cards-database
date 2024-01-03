import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Berserkatt de Galar",
		en: "Galarian Perrserker",
		es: "Perrserker de Galar",
		it: "Perrserker di Galar",
		pt: "Perrserker de Galar",
		de: "Galar-Mauzinger"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	evolveFrom: {
		fr: "Miaouss de Galar",
		en: "Galarian Meowth"
	},

	abilities: [{
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
			fr: "Les attaques de vos Pokémon Metal infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			en: "Your Metal Pokémon's attacks do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			es: "Los ataques de tus Pokémon Metal hacen 20 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			it: "Gli attacchi dei tuoi Pokémon Metal infliggono 20 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			pt: "Os ataques dos seus Pokémon Metal causam 20 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			de: "Die Attacken deiner Metal-Pokémon fügen dem Aktiven Pokémon deines Gegners 20 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		name: {
			fr: "Griffe Acier",
			en: "Metal Claw",
			es: "Garra Metal",
			it: "Ferrartigli",
			pt: "Garra de Metal",
			de: "Metallklaue"
		},

		damage: 70,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		en: "What appears to be an iron helmet is actually hardened hair. This Pokémon lives for the thrill of battle."
	}
}

export default card
