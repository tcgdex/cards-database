import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	dexId: [884],
	name: {
		en: "Duraludon V",
		fr: "Duralugon V",
		es: "Duraludon V",
		it: "Duraludon V",
		pt: "Duraludon V",
		de: "Duraludon V"
	},

	illustrator: "aky CG Works",
	rarity: "Holo Rare V",
	category: "Pokemon",
	set: Set,
	hp: 220,

	types: [
		"Metal",
	],

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Hard Coat",
				fr: "Strate Dure",
				es: "Capa Resistente",
				it: "Patina Dura",
				pt: "Camada Resistente",
				de: "Schutzschicht"
			},
			effect: {
				en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				es: "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				it: "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				pt: "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
				de: "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
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

	retreat: 3,

	attacks: [{
		name: {
			en: "Gatling Slug",
			fr: "Frappe Répétée",
			es: "Ráfaga de Puñetazos",
			it: "Pugnolashnikov",
			pt: "Chumbo Grosso",
			de: "Repetierschlag"
		},

		effect: {
			en: "This attack does 40 more damage for each Metal Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie Metal attachée à ce Pokémon.",
			es: "Este ataque hace 40 puntos de daño más por cada Energía Metal unida a este Pokémon.",
			it: "Questo attacco infligge 40 danni in più per ogni Energia Metal assegnata a questo Pokémon.",
			pt: "Este ataque causa 40 pontos de dano a mais para cada Energia Metal ligada a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Metal-Energie 40 Schadenspunkte mehr zu."
		},

		damage: "10+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V"
}

export default card
