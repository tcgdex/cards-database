import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Sylveon ex",
		fr: "Nymphali-ex",
		de: "Feelinara-ex",
		es: "Sylveon ex",
		it: "Sylveon-ex",
		'es-mx': "Sylveon ex"
	},

	illustrator: "You Iribi",
	rarity: "Special illustration rare",
	category: "Pokemon",
	dexId: [700],
	hp: 270,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Colorful Harmony",
			fr: "Harmonie Colorée",
			de: "Bunte Harmonie",
			es: "Armonía Colorida",
			it: "Armonia Variopinta",
			'es-mx': "Armonía Colorida"
		},

		effect: {
			en: "This attack does 50 damage for each type of Basic Energy attached to all of your Pokémon.",
			fr: "Cette attaque inflige 50 dégâts pour chaque type d'Énergie de base attachée à tous vos Pokémon.",
			de: "Diese Attacke fügt für jeden an alle deine Pokémon angelegten Basis-Energietyp 50 Schadenspunkte zu.",
			es: "Este ataque hace 50 puntos de daño por cada tipo de Energía Básica unida a todos tus Pokémon.",
			it: "Questo attacco infligge 50 danni per ogni tipo di Energia base assegnata ai tuoi Pokémon.",
			'es-mx': "Este ataque hace 50 puntos de daño por cada tipo de Energía Básica unida a todos tus Pokémon."
		},

		damage: "50×",
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907758,
				tcgplayer: 716231
			}
		}
	],
}

export default card