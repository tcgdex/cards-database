import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [604],

	name: {
		en: "Mega Eelektross ex",
		fr: "Méga-Ohmassacre-ex",
		es: "Mega-Eelektross ex",
		'es-mx': "Mega-Eelektross ex",
		de: "Mega-Zapplarang-ex",
		it: "Mega Eelektross-ex",
		pt: "Mega Eelektross ex"
	},

	illustrator: "takuyoa",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 350,
	types: ["Lightning"],
	stage: "Stage2",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Split Bomb",
			fr: "Bombe Fendante",
			es: "Bomba Separada",
			'es-mx': "Bomba Dividida",
			de: "Splitterbombe",
			it: "Squarciabomba",
			pt: "Bomba Dividida"
		},

		effect: {
			en: "This attack does 60 damage to each of 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige à 2 des Pokémon de votre adversaire 60 dégâts chacun. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 60 puntos de daño a cada uno de los 2 Pokémon de tu rival que elijas. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Este ataque hace 60 puntos de daño a cada uno de 2 Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			de: "Diese Attacke fügt 2 Pokémon deines Gegners jeweils 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge 60 danni ciascuno a due dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 60 pontos de dano a cada um de 2 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		}
	}, {
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			en: "Disaster Shock",
			fr: "Choc Désastre",
			es: "Descarga Catastrófica",
			'es-mx': "Descarga Catastrófica",
			de: "Desasterschock",
			it: "Shock Disastroso",
			pt: "Choque Catastrófico"
		},

		effect: {
			en: "You may discard 2 {L} Energy from this Pokémon and make your opponent's Active Pokémon Paralyzed.",
			fr: "Vous pouvez défausser 2 Énergies {L} de ce Pokémon et rendre le Pokémon Actif de votre adversaire Paralysé.",
			es: "Puedes descartar 2 Energías {L} de este Pokémon y dejar al Pokémon Activo de tu rival Paralizado.",
			'es-mx': "Puedes descartar 2 Energías {L} de este Pokémon y dejar Paralizado al Pokémon Activo de tu rival.",
			de: "Du kannst 2 {L}-Energien von diesem Pokémon auf deinen Ablagestapel legen und das Aktive Pokémon deines Gegners paralysieren.",
			it: "Puoi scartare due Energie {L} da questo Pokémon e lasciare il Pokémon attivo del tuo avversario paralizzato.",
			pt: "Você pode descartar 2 Energias {L} deste Pokémon e deixar o Pokémon Ativo do seu oponente Paralisado."
		},

		damage: 190
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675873,
		cardmarket: 869672
	}
}

export default card