import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Diancie ex",
		'fr-fr': "Méga-Diancie-ex",
		'es-es': "Mega-Diancie ex",
		'es-mx': "Mega-Diancie ex",
		'de-de': "Mega-Diancie-ex",
		'it-it': "Mega Diancie-ex",
		'pt-br': "Mega Diancie ex"
	},

	suffix: "ex",
	illustrator: "Narano",
	rarity: "Special illustration rare",
	category: "Pokemon",
	dexId: [719],
	hp: 270,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Diamond Coat",
			'fr-fr': "Revêtement Diamant",
			'es-es': "Capa Diamante",
			'es-mx': "Capa de Diamantes",
			'de-de': "Diamanthülle",
			'it-it': "Rivestimento di Diamanti",
			'pt-br': "Camada Diamantina"
		},

		effect: {
			'en-us': "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'es-mx': "Este Pokémon recibe 30 puntos de daño menos de ataques (después de aplicar Debilidad y Resistencia).",
			'de-de': "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			'it-it': "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência)."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			'en-us': "Garland Ray",
			'fr-fr': "Rayon Guirlande",
			'es-es': "Rayo Guirnalda",
			'es-mx': "Rayo Guirnalda",
			'de-de': "Strahlenkranz",
			'it-it': "Raggio Ghirlanda",
			'pt-br': "Feixe Grinalda"
		},

		effect: {
			'en-us': "Discard up to 2 Energy cards from this Pokémon, and this attack does 120 damage for each card you discarded in this way.",
			'fr-fr': "Défaussez jusqu'à 2 cartes Énergie de ce Pokémon. Cette attaque inflige 120 dégâts pour chaque carte défaussée de cette façon.",
			'es-es': "Descarta hasta 2 cartas de Energía de este Pokémon, y este ataque hace 120 puntos de daño por cada carta que hayas descartado de esta manera.",
			'es-mx': "Descarta hasta 2 cartas de Energía de este Pokémon, y este ataque hace 120 puntos de daño por cada carta que descartaste de esta manera.",
			'de-de': "Lege bis zu 2 Energiekarten von diesem Pokémon auf deinen Ablagestapel, und diese Attacke fügt für jede auf diese Weise abgelegte Karte 120 Schadenspunkte zu.",
			'it-it': "Scarta fino a due carte Energia da questo Pokémon e questo attacco infligge 120 danni per ogni carta che hai scartato in questo modo.",
			'pt-br': "Descarte até 2 cartas de Energia deste Pokémon, e este ataque causa 120 pontos de dano para cada carta descartada desta forma."
		},

		damage: "120×"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869893,
				tcgplayer: 676094
			}
		}
	],
}

export default card
