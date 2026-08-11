import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [596],
	set: Set,

	name: {
		'en-us': "Galvantula",
		'fr-fr': "Mygavolt",
		'de-de': "Voltula",
		'it-it': "Galvantula",
		'pt-br': "Galvantula",
		'es-es': "Galvantula",
		'es-mx': "Galvantula"
	},

	illustrator: "Akira Komayama",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Joltik",
		'fr-fr': "Statitik",
		'de-de': "Wattzapf",
		'it-it': "Joltik",
		'pt-br': "Joltik",
		'es-es': "Joltik",
		'es-mx': "Joltik"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Discharge",
			'fr-fr': "Coup d'Jus",
			'de-de': "Ladungsstoß",
			'it-it': "Scarica",
			'pt-br': "Descarga",
			'es-es': "Chispazo",
			'es-mx': "Chispazo"
		},

		effect: {
			'en-us': "Discard all {L} Energy from this Pokémon. This attack does 50 damage for each card you discarded in this way.",
			'fr-fr': "Défaussez toutes les Énergies {L} de ce Pokémon. Cette attaque inflige 50 dégâts pour chaque carte défaussée de cette façon.",
			'de-de': "Lege alle {L}-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 50 Schadenspunkte zu.",
			'it-it': "Scarta tutte le Energie {L} da questo Pokémon. Questo attacco infligge 50 danni per ogni carta che hai scartato in questo modo.",
			'pt-br': "Descarte todas as Energias {L} deste Pokémon. Este ataque causa 50 pontos de dano para cada carta descartada desta forma.",
			'es-es': "Descarta todas las Energías {L} de este Pokémon. Este ataque hace 50 puntos de daño por cada carta que hayas descartado de esta manera.",
			'es-mx': "Descarta todas las Energías {L} de este Pokémon. Este ataque hace 50 puntos de daño por cada carta que descartaste de esta manera."
		},

		damage: "50×"
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
	{
		type: "holo",
		thirdParty: {
			cardmarket: 836128,
			tcgplayer: 642229
		}
	},
],
}

export default card
