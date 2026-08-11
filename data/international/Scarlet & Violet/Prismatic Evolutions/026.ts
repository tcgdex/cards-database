import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [471],
	set: Set,

	name: {
		'en-us': "Glaceon ex",
		'fr-fr': "Givrali-ex",
		'es-es': "Glaceon ex",
		'pt-br': "Glaceon ex",
		'it-it': "Glaceon-ex",
		'de-de': "Glaziola-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'pt-br': "Eevee",
		'it-it': "Eevee",
		'de-de': "Evoli"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Frost Bullet",
			'fr-fr': "Kunaï Givré",
			'es-es': "Bala Helada",
			'pt-br': "Projétil Congelado",
			'it-it': "Dardogelo",
			'de-de': "Frostprojektil"
		},

		effect: {
			'en-us': "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 30 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'it-it': "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 110
	}, {
		cost: ["Grass", "Water", "Darkness"],

		name: {
			'en-us': "Euclase",
			'fr-fr': "Euclase",
			'es-es': "Euclasa",
			'pt-br': "Euclásio",
			'it-it': "Euclasio",
			'de-de': "Euklas"
		},

		effect: {
			'en-us': "Knock Out 1 of your opponent's Pokémon that has exactly 6 damage counters on it.",
			'fr-fr': "Mettez K.O. l'un des Pokémon de votre adversaire ayant exactement 6 marqueurs de dégâts.",
			'es-es': "Deja Fuera de Combate a 1 de los Pokémon de tu rival que tenga exactamente 6 contadores de daño sobre él.",
			'pt-br': "Nocauteie 1 dos Pokémon do seu oponente que tiver exatamente 6 contadores de dano nele.",
			'it-it': "Metti KO uno dei Pokémon del tuo avversario che ha esattamente sei segnalini danno.",
			'de-de': "Mache 1 Pokémon deines Gegners, auf dem genau 6 Schadensmarken liegen, kampfunfähig."
		}
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	suffix: "ex",
	illustrator: "aky CG Works",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805415,
				tcgplayer: 610381
			}
		},
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 810425,
			}
		},
		{
			type: "holo",
			stamp: ["snowflake"],
			thirdParty: {
				cardmarket: 845410,
			}
		},
	],
}

export default card
