import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [624],
	set: Set,

	name: {
		en: "Pawniard",
		fr: "Scalpion",
		es: "Pawniard",
		it: "Pawniard",
		pt: "Pawniard",
		de: "Gladiantri"
	},

	illustrator: "otumami",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	attacks: [{
		name: {
			en: "Swords Dance",
			fr: "Danse Lames",
			es: "Danza Espada",
			it: "Danzaspada",
			pt: "Dança das Espadas",
			de: "Schwerttanz"
		},

		effect: {
			en: "During your next turn, this Pokémon's Slash attack does 70 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, l'attaque Tranche de ce Pokémon inflige 70 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			es: "Durante tu próximo turno, el ataque Cuchillada de este Pokémon hace 70 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
			it: "Durante il tuo prossimo turno, l'attacco Lacerazione di questo Pokémon infligge 70 danni in più, prima di aver applicato debolezza e resistenza.",
			pt: "Durante o seu próximo turno, o ataque Talho deste Pokémon causará 70 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
			de: "Während deines nächsten Zuges fügt die Attacke Schlitzer dieses Pokémon 70 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Slash",
			fr: "Tranche",
			es: "Cuchillada",
			it: "Lacerazione",
			pt: "Talho",
			de: "Schlitzer"
		},

		damage: 10,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "A pack of these Pokémon forms to serve a Bisharp boss. Each Pawniard trains diligently, dreaming of one day taking the lead."
	},

	thirdParty: {
		cardmarket: 545596
	}
}

export default card