import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Garganacl",
		fr: "Gigansel",
		de: "Saltigant",
		it: "Garganacl",
		es: "Garganacl",
		pt: "Garganacl",
		'es-mx': "Garganacl"
	},

	illustrator: "Yano Keiji",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],
	stage: "Stage2",
	dexId: [934],

	abilities: [{
		type: "Ability",

		name: {
			en: "Powerful a-Salt",
			fr: "Puissance Univer-Sel",
			de: "Kräftig versalzen",
			it: "Sale Portentoso",
			es: "A-Sal-to Poderoso",
			pt: "Agressal Potente",
			'es-mx': "A-sal-to Poderoso"
		},

		effect: {
			en: "Attacks used by your {F} Pokémon do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Les attaques utilisées par vos Pokémon {F} infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			de: "Die von deinen {F}-Pokémon eingesetzten Attacken fügen dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden).",
			it: "Gli attacchi usati dai tuoi Pokémon {F} infliggono 30 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			es: "Los ataques usados por tus Pokémon {F} hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			pt: "Os ataques usados pelos seus Pokémon {F} causam 30 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			'es-mx': "Los ataques usados por tus Pokémon {F} hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia)."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			de: "Einhämmern",
			it: "Martello",
			es: "Martillear",
			pt: "Martelada",
			'es-mx': "Martillar"
		},

		damage: 130
	}],

	retreat: 4,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654486
	}
}

export default card