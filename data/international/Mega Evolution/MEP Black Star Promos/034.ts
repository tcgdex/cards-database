import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Meganium ex",
		'fr-fr': "Méga-Méganium-ex",
		'es-es': "Mega-Meganium ex",
		'de-de': "Mega-Meganie-ex",
		'it-it': "Mega Meganium-ex",
		'pt-br': "Mega Meganium ex"
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	hp: 360,
	types: ["Grass"],
	stage: "Stage2",
	dexId: [154],

	evolveFrom: {
		'en-us': "Bayleef",
		'de-de': "Lorblatt",
		'es-es': "Bayleef",
		'fr-fr': "Macronium",
		'it-it': "Bayleef",
		'pt-br': "Bayleef",
	},

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Giant Bouquet",
			'fr-fr': "Bouquet Géant",
			'es-es': "Ramo Gigante",
			'de-de': "Gigantisches Bouquet",
			'it-it': "Bouquet Gigante",
			'pt-br': "Buquê Gigante"
		},

		effect: {
			'en-us': "This attack does 50 more damage for each {G} Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 50 dégâts supplémentaires pour chaque Énergie {G} attachée à ce Pokémon.",
			'es-es': "Este ataque hace 50 puntos de daño más por cada Energía {G} unida a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte {G}-Energie 50 Schadenspunkte mehr zu.",
			'it-it': "Questo attacco infligge 50 danni in più per ogni Energia {G} assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 50 pontos de dano a mais para cada Energia {G} ligada a este Pokémon."
		},

		damage: "70+"
	}],

	retreat: 2,
	regulationMark: "J",

	weaknesses: [{
		type: "Fire",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 873717,
				tcgplayer: 692120
			}
		},
		{
        	type: 'lenticular',
        	size: 'jumbo',
        	thirdParty: {
        		cardmarket: 873718,
        		tcgplayer: 692115
        	}
        },
	],
}

export default card
