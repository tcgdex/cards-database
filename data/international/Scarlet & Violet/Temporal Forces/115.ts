import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [376],
	set: Set,

	name: {
		'en-us': "Metagross",
		'fr-fr': "Métalosse",
		'es-es': "Metagross",
		'it-it': "Metagross",
		'pt-br': "Metagross",
		'de-de': "Metagross"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Metang",
		'fr-fr': "Métang",
		'es-es': "Metang",
		'it-it': "Metang",
		'pt-br': "Metang",
		'de-de': "Metang"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Meteor Mash",
			'fr-fr': "Poing Météore",
			'es-es': "Puño Meteoro",
			'it-it': "Meteorpugno",
			'pt-br': "Meteoro Esmagador",
			'de-de': "Sternenhieb"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon's Meteor Mash attack does 60 more damage (before applying Weakness and Resistance).",
			'fr-fr': "Pendant votre prochain tour, l'attaque Poing Météore de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Durante tu próximo turno, el ataque Puño Meteoro de este Pokémon hace 60 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il tuo prossimo turno, l'attacco Meteorpugno di questo Pokémon infligge 60 danni in più, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Durante o seu próximo turno, o ataque Meteoro Esmagador deste Pokémon causará 60 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Während deines nächsten Zuges fügt die Attacke Sternenhieb dieses Pokémon 60 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		},

		damage: 60
	}, {
		cost: ["Metal", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Luster Blast",
			'fr-fr': "Explosion Étincelante",
			'es-es': "Explosión Luciente",
			'it-it': "Puliscoppio",
			'pt-br': "Lustre Explosivo",
			'de-de': "Schimmernde Entladung"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 200
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "H",

	description: {
		'en-us': "Because the magnetic powers of these Pokémon get stronger in freezing temperatures, Metagross living on snowy mountains are full of energy.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760745,
				tcgplayer: 542859
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760745,
				tcgplayer: 542859
			}
		},
	],

	illustrator: "Nurikabe",

}

export default card