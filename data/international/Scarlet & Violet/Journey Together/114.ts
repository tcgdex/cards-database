import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [373],
	set: Set,

	name: {
		'en-us': "Salamence ex",
		'fr-fr': "Drattak-ex",
		'es-es': "Salamence ex",
		'de-de': "Brutalanda-ex",
		'it-it': "Salamence-ex",
		'pt-br': "Salamence ex",
		'es-mx': "Salamence ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 320,
	types: ["Dragon"],
	evolveFrom: {
		'en-us': "Shelgon",
		'fr-fr': "Drackhaus",
		'es-es': "Shelgon",
		'de-de': "Draschel",
		'it-it': "Shelgon",
		'pt-br': "Shelgon",
		'es-mx': "Shelgon"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Wide Blast",
			'fr-fr': "Large Explosion",
			'es-es': "Estallido Expansivo",
			'de-de': "Rundumexplosion",
			'it-it': "Vastoscoppio",
			'pt-br': "Explodir Geral",
			'es-mx': "Explosión Amplia"
		},

		effect: {
			'en-us': "This attack does 50 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 50 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 50 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'de-de': "Diese Attacke fügt jedem Pokémon auf der Bank deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Questo attacco infligge 50 danni a ciascuno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 50 pontos de dano a cada um dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'es-mx': "Este ataque hace 50 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		}
	}, {
		cost: ["Fire", "Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Dragon Impact",
			'fr-fr': "Impact du Dragon",
			'es-es': "Impacto Dragón",
			'de-de': "Dracheneinschlag",
			'it-it': "Draghimpatto",
			'pt-br': "Impacto do Dragão",
			'es-mx': "Impacto Dracónico"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon.",
			'es-mx': "Descarta 2 Energías de este Pokémon."
		},

		damage: 300
	}],

	retreat: 2,
	regulationMark: "I",
	suffix: "ex",
	illustrator: "toriyufu",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 817266,
				tcgplayer: 623541
			}
		},
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 853515,
			}
		},
		{
			type: "holo",
			stamp: ["set-logo"],
			size: "jumbo",
			thirdParty: {
				cardmarket: 853517,
			}
		},
	],
}

export default card
