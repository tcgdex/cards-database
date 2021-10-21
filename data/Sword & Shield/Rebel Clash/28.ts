import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Arcanine",
		fr: "Arcanin",
		es: "Arcanine",
		it: "Arcanine",
		pt: "Arcanine",
		de: "Arkani"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Growlithe",
		fr: "Caninos",
		es: "Growlithe",
		it: "Growlithe",
		pt: "Growlithe",
		de: "Fukano"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Warming Up",
				fr: "Réchauffement",
				es: "Calentamiento",
				it: "Scaldarsi",
				pt: "Aquecimento",
				de: "Aufwärmen"
			},
			effect: {
				en: "If this Pokémon has a Burning Scarf attached, it gets +100 HP.",
				fr: "Si un Bandana Brûlant est attaché à ce Pokémon, il reçoit +100 PV.",
				es: "Si este Pokémon tiene 1 Bandana Ardiente unida a él, obtiene 100 PS más.",
				it: "Se questo Pokémon ha una carta Bandana Ardente assegnata, ha 100 PS in più.",
				pt: "Se este Pokémon tiver 1 Cachecol em Chamas ligado a ele, receberá 100 PS a mais.",
				de: "Wenn an dieses Pokémon ein Flammenhalstuch angelegt ist, erhält es +100 KP."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Mane",
				fr: "Crinière de Feu",
				es: "Crin de Fuego",
				it: "Criniera di Fuoco",
				pt: "Crina de Fogo",
				de: "Flammenmähne"
			},

			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 130,
	types: ["Fire"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "The sight of it running over 6,200 miles in a single day and night has captivated many people."
	}
}

export default card
