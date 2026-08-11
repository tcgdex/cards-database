import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [26],
	set: Set,

	name: {
		'en-us': "Raichu",
		'fr-fr': "Raichu",
		'es-es': "Raichu",
		'it-it': "Raichu",
		'pt-br': "Raichu",
		'de-de': "Raichu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'es-es': "Pikachu",
		'it-it': "Pikachu",
		'pt-br': "Pikachu",
		'de-de': "Pikachu"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Collateral Bolts",
			'fr-fr': "Éclairs Collatéraux",
			'es-es': "Rayos Colaterales",
			'it-it': "Fulmini Collaterali",
			'pt-br': "Raios Colaterais",
			'de-de': "Kollateralblitze"
		},

		effect: {
			'en-us': "This attack does 50 damage to each Pokémon that has any damage counters on it (both yours and your opponent's), except for this Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 50 dégâts à chacun des Pokémon ayant au moins un marqueur de dégâts (les vôtres et ceux de votre adversaire) à l'exception de ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 50 puntos de daño a cada Pokémon (tanto tuyos como de tu rival) que tenga algún contador de daño sobre él, excepto a este Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 50 danni a ciascuno dei Pokémon che ha dei segnalini danno, sia tuo che del tuo avversario, a eccezione di questo Pokémon. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 50 pontos de dano a cada Pokémon que tiver algum contador de dano nele (seus e do seu oponente), exceto por este Pokémon. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt jedem Pokémon (deinen und denen deines Gegners), auf dem mindestens 1 Schadensmarke liegt, 50 Schadenspunkte zu, außer diesem Pokémon. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Electric Ball",
			'fr-fr': "Boule de Foudre",
			'es-es': "Bola Eléctrica",
			'it-it': "Lamposfera",
			'pt-br': "Bola de Eletricidade",
			'de-de': "Stromball"
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "If the electric pouches in its cheeks become fully charged, both ears will stand straight up.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760682,
				tcgplayer: 542796
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760682,
				tcgplayer: 542796
			}
		},
	],

	illustrator: "cochi8i",

}

export default card