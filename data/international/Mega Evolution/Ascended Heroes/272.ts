import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Meganium ex",
		'fr-fr': "Méga-Méganium-ex",
		'es-es': "Mega-Meganium ex",
		'es-mx': "Mega-Meganium ex",
		'de-de': "Mega-Meganie-ex",
		'it-it': "Mega Meganium-ex",
		'pt-br': "Mega Meganium ex"
	},
	evolveFrom: {
		'en-us': "Bayleef",
		'de-de': "Lorblatt",
		'es-es': "Bayleef",
		'es-mx': "Bayleef",
		'fr-fr': "Macronium",
		'it-it': "Bayleef",
		'pt-br': "Bayleef",
	},

	suffix: "ex",
	illustrator: "Tika Matsuno",
	rarity: "Special illustration rare",
	category: "Pokemon",
	dexId: [154],
	hp: 360,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Giant Bouquet",
			'fr-fr': "Bouquet Géant",
			'es-es': "Ramo Gigante",
			'es-mx': "Ramo Gigante",
			'de-de': "Gigantisches Bouquet",
			'it-it': "Bouquet Gigante",
			'pt-br': "Buquê Gigante"
		},

		effect: {
			'en-us': "This attack does 50 more damage for each {G} Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 50 dégâts supplémentaires pour chaque Énergie {G} attachée à ce Pokémon.",
			'es-es': "Este ataque hace 50 puntos de daño más por cada Energía {G} unida a este Pokémon.",
			'es-mx': "Este ataque hace 50 puntos de daño más por cada Energía {G} unida a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte {G}-Energie 50 Schadenspunkte mehr zu.",
			'it-it': "Questo attacco infligge 50 danni in più per ogni Energia {G} assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 50 pontos de dano a mais para cada Energia {G} ligada a este Pokémon."
		},

		damage: "70+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869883,
				tcgplayer: 676084
			}
		}
	],
}

export default card
