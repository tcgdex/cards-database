import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	dexId: [884],

	name: {
		'en-us': "Duraludon V",
		'fr-fr': "Duralugon V",
		'es-es': "Duraludon V",
		'it-it': "Duraludon V",
		'pt-br': "Duraludon V",
		'de-de': "Duraludon V"
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
				'en-us': "Hard Coat",
				'fr-fr': "Strate Dure",
				'es-es': "Capa Resistente",
				'it-it': "Patina Dura",
				'pt-br': "Camada Resistente",
				'de-de': "Schutzschicht"
			},
			effect: {
				'en-us': "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				'it-it': "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
				'de-de': "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
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
			'en-us': "Gatling Slug",
			'fr-fr': "Frappe Répétée",
			'es-es': "Ráfaga de Puñetazos",
			'it-it': "Pugnolashnikov",
			'pt-br': "Chumbo Grosso",
			'de-de': "Repetierschlag"
		},

		effect: {
			'en-us': "This attack does 40 more damage for each Metal Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie Metal attachée à ce Pokémon.",
			'es-es': "Este ataque hace 40 puntos de daño más por cada Energía Metal unida a este Pokémon.",
			'it-it': "Questo attacco infligge 40 danni in più per ogni Energia Metal assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 40 pontos de dano a mais para cada Energia Metal ligada a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte Metal-Energie 40 Schadenspunkte mehr zu."
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
	suffix: "V",

	thirdParty: {
		cardmarket: 500090,
		tcgplayer: 223047
	}
}

export default card
