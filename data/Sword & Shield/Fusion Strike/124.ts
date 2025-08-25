import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [648],
	set: Set,

	name: {
		en: "Meloetta",
		fr: "Meloetta",
		es: "Meloetta",
		it: "Meloetta",
		pt: "Meloetta",
		de: "Meloetta"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "kirisAki",

	description: {
		en: "Its melodies are sung with a special vocalization method that can control the feelings of those who hear it."
	},

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Melodious Echo",
			fr: "Écho Mélodieux",
			de: "Melodisches Echo",
			es: "Eco Melodioso",
			pt: "Eco Melodioso",
			it: "Eco Melodiosa"
		},

		damage: "70×",

		effect: {
			en: "This attack does 70 damage for each Fusion Strike Energy attached to all of your Pokémon.",
			fr: "Cette attaque inflige 70 dégâts pour chaque Énergie Poing de Fusion attachée à tous vos Pokémon.",
			de: "Diese Attacke fügt für jede an alle deine Pokémon angelegte Fusionsangriff-Energie 70 Schadenspunkte zu.",
			es: "Este ataque hace 70 puntos de daño por cada Energía Golpe Fusión unida a todos tus Pokémon.",
			pt: "Este ataque causa 70 pontos de dano para cada Energia Golpe Fusão ligada a todos os seus Pokémon.",
			it: "Questo attacco infligge 70 danni per ogni Energia Colpo Fusione assegnata ai tuoi Pokémon."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582652,
		tcgplayer: 253308
	}
}

export default card