import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Eelektross ex",
		'fr-fr': "Méga-Ohmassacre-ex",
		'es-es': "Mega-Eelektross ex",
		'es-mx': "Mega-Eelektross ex",
		'de-de': "Mega-Zapplarang-ex",
		'it-it': "Mega Eelektross-ex",
		'pt-br': "Mega Eelektross ex"
	},
	evolveFrom: {
		'en-us': "Eelektrik",
		'de-de': "Zapplalek",
		'es-es': "Eelektrik",
		'es-mx': "Eelektrik",
		'fr-fr': "Lampéroie",
		'it-it': "Eelektrik",
		'pt-br': "Eelektrik",
	},

	suffix: "ex",
	illustrator: "akagi",
	rarity: "Special illustration rare",
	category: "Pokemon",
	dexId: [604],
	hp: 350,
	types: ["Lightning"],
	stage: "Stage2",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			'en-us': "Split Bomb",
			'fr-fr': "Bombe Fendante",
			'es-es': "Bomba Separada",
			'es-mx': "Bomba Dividida",
			'de-de': "Splitterbombe",
			'it-it': "Squarciabomba",
			'pt-br': "Bomba Dividida"
		},

		effect: {
			'en-us': "This attack does 60 damage to each of 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige à 2 des Pokémon de votre adversaire 60 dégâts chacun. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 60 puntos de daño a cada uno de los 2 Pokémon de tu rival que elijas. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Este ataque hace 60 puntos de daño a cada uno de 2 Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'de-de': "Diese Attacke fügt 2 Pokémon deines Gegners jeweils 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Questo attacco infligge 60 danni ciascuno a due dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 60 pontos de dano a cada um de 2 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		}
	}, {
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			'en-us': "Disaster Shock",
			'fr-fr': "Choc Désastre",
			'es-es': "Descarga Catastrófica",
			'es-mx': "Descarga Catastrófica",
			'de-de': "Desasterschock",
			'it-it': "Shock Disastroso",
			'pt-br': "Choque Catastrófico"
		},

		effect: {
			'en-us': "You may discard 2 {L} Energy from this Pokémon and make your opponent's Active Pokémon Paralyzed.",
			'fr-fr': "Vous pouvez défausser 2 Énergies {L} de ce Pokémon et rendre le Pokémon Actif de votre adversaire Paralysé.",
			'es-es': "Puedes descartar 2 Energías {L} de este Pokémon y dejar al Pokémon Activo de tu rival Paralizado.",
			'es-mx': "Puedes descartar 2 Energías {L} de este Pokémon y dejar Paralizado al Pokémon Activo de tu rival.",
			'de-de': "Du kannst 2 {L}-Energien von diesem Pokémon auf deinen Ablagestapel legen und das Aktive Pokémon deines Gegners paralysieren.",
			'it-it': "Puoi scartare due Energie {L} da questo Pokémon e lasciare il Pokémon attivo del tuo avversario paralizzato.",
			'pt-br': "Você pode descartar 2 Energias {L} deste Pokémon e deixar o Pokémon Ativo do seu oponente Paralisado."
		},

		damage: 190
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869889,
				tcgplayer: 676090
			}
		}
	],
}

export default card
