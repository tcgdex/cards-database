import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [596],
	set: Set,

	name: {
		en: "Galvantula",
		fr: "Mygavolt",
		de: "Voltula",
		it: "Galvantula",
		pt: "Galvantula",
		es: "Galvantula",
		'es-mx': "Galvantula"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Discharge",
			fr: "Coup d'Jus",
			de: "Ladungsstoß",
			it: "Scarica",
			pt: "Descarga",
			es: "Chispazo",
			'es-mx': "Chispazo"
		},

		effect: {
			en: "Discard all {L} Energy from this Pokémon. This attack does 50 damage for each card you discarded in this way.",
			fr: "Défaussez toutes les Énergies {L} de ce Pokémon. Cette attaque inflige 50 dégâts pour chaque carte défaussée de cette façon.",
			de: "Lege alle {L}-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 50 Schadenspunkte zu.",
			it: "Scarta tutte le Energie {L} da questo Pokémon. Questo attacco infligge 50 danni per ogni carta che hai scartato in questo modo.",
			pt: "Descarte todas as Energias {L} deste Pokémon. Este ataque causa 50 pontos de dano para cada carta descartada desta forma.",
			es: "Descarta todas las Energías {L} de este Pokémon. Este ataque hace 50 puntos de daño por cada carta que hayas descartado de esta manera.",
			'es-mx': "Descarta todas las Energías {L} de este Pokémon. Este ataque hace 50 puntos de daño por cada carta que descartaste de esta manera."
		},

		damage: "50×"
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835968
	}
}

export default card