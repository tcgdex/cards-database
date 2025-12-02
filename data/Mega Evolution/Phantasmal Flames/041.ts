import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Diancie ex",
		fr: "Méga-Diancie-ex",
		es: "Mega-Diancie ex",
		'es-mx': "Mega-Diancie ex",
		de: "Mega-Diancie-ex",
		it: "Mega Diancie-ex",
		pt: "Mega Diancie ex"
	},

	rarity: "Double rare",
	category: "Pokemon",

	dexId: [719],
	hp: 270,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Diamond Coat",
			fr: "Revêtement Diamant",
			es: "Capa Diamante",
			'es-mx': "Capa de Diamantes",
			de: "Diamanthülle",
			it: "Rivestimento di Diamanti",
			pt: "Camada Diamantina"
		},

		effect: {
			en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'es-mx': "Este Pokémon recibe 30 puntos de daño menos de ataques (después de aplicar Debilidad y Resistencia).",
			de: "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			it: "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência)."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Garland Ray",
			fr: "Rayon Guirlande",
			es: "Rayo Guirnalda",
			'es-mx': "Rayo Guirnalda",
			de: "Strahlenkranz",
			it: "Raggio Ghirlanda",
			pt: "Feixe Grinalda"
		},

		effect: {
			en: "Discard up to 2 Energy cards from this Pokémon, and this attack does 120 damage for each card you discarded in this way.",
			fr: "Défaussez jusqu'à 2 cartes Énergie de ce Pokémon. Cette attaque inflige 120 dégâts pour chaque carte défaussée de cette façon.",
			es: "Descarta hasta 2 cartas de Energía de este Pokémon, y este ataque hace 120 puntos de daño por cada carta que hayas descartado de esta manera.",
			'es-mx': "Descarta hasta 2 cartas de Energía de este Pokémon, y este ataque hace 120 puntos de daño por cada carta que descartaste de esta manera.",
			de: "Lege bis zu 2 Energiekarten von diesem Pokémon auf deinen Ablagestapel, und diese Attacke fügt für jede auf diese Weise abgelegte Karte 120 Schadenspunkte zu.",
			it: "Scarta fino a due carte Energia da questo Pokémon e questo attacco infligge 120 danni per ogni carta che hai scartato in questo modo.",
			pt: "Descarte até 2 cartas de Energia deste Pokémon, e este ataque causa 120 pontos de dano para cada carta descartada desta forma."
		},

		damage: "120×"
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857616
	}
}

export default card