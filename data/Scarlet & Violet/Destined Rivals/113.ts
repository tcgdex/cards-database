import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Arbok",
		fr: "Arbok de la Team Rocket",
		de: "Team Rockets Arbok",
		it: "Arbok del Team Rocket",
		es: "Arbok del Team Rocket",
		pt: "Arbok da Equipe Rocket",
		'es-mx': "Arbok del Equipo Rocket"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Potent Glare",
			fr: "Regard Puissant",
			de: "Starker Blick",
			it: "Sguardo Potente",
			es: "Mirada Potente",
			pt: "Olhar Imponente",
			'es-mx': "Mirada Imponente"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, your opponent can't play any Pokémon that has an Ability from their hand, except for Team Rocket's Pokémon.",
			fr: "Tant que ce Pokémon est sur le Poste Actif, votre adversaire ne peut pas jouer de Pokémon ayant un talent de sa main, à l'exception des Pokémon de la Team Rocket.",
			de: "Solange dieses Pokémon in der Aktiven Position ist, kann dein Gegner kein Pokémon, das eine Fähigkeit hat, aus seiner Hand spielen, außer Team Rockets Pokémon.",
			it: "Fintanto che questo Pokémon è in posizione attiva, il tuo avversario non può giocare nessun Pokémon che ha un'abilità dalla sua mano, a eccezione dei Pokémon del Team Rocket.",
			es: "Mientras este Pokémon esté en el Puesto Activo, tu rival no puede jugar ningún Pokémon de su mano que tenga una habilidad, excepto los Pokémon del Team Rocket.",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, seu oponente não poderá jogar nenhum Pokémon que tem uma Habilidade da mão dele, exceto por Pokémon da Equipe Rocket.",
			'es-mx': "Mientras este Pokémon esté en el Puesto Activo, tu rival no puede jugar ningún Pokémon de su mano que tenga una Habilidad, excepto los Pokémon del Equipo Rocket."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			en: "Spinning Tail",
			fr: "Queue Tournante",
			de: "Kreisender Schweif",
			it: "Coda Rotante",
			es: "Cola Giratoria",
			pt: "Cauda Giratória",
			'es-mx': "Cola Giratoria"
		},

		effect: {
			en: "This attack does 30 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt jedem Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge 30 danni a ciascuno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			es: "Este ataque hace 30 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Este ataque causa 30 pontos de dano a cada um dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'es-mx': "Este ataque hace 30 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		}
	}],

	retreat: 2,
	regulationMark: "I",

	variants_detailed: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
