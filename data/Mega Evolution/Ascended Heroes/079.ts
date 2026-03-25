import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [150],

	name: {
		en: "Team Rocket's Mewtwo ex",
		fr: "Mewtwo-ex de la Team Rocket",
		es: "Mewtwo ex del Team Rocket",
		'es-mx': "Mewtwo ex del Equipo Rocket",
		de: "Team Rockets Mewtu-ex",
		it: "Mewtwo-ex del Team Rocket",
		pt: "Mewtwo ex da Equipe Rocket"
	},

	illustrator: "aky CG Works",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 280,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Power Saver",
			fr: "Économie de Puissance",
			es: "Ahorro de Poder",
			'es-mx': "Ahorro de Poder",
			de: "Sparpower",
			it: "Serbaforza",
			pt: "Economizador de Energia"
		},

		effect: {
			en: "This Pokémon can't attack unless you have 4 or more Team Rocket's Pokémon in play.",
			fr: "Ce Pokémon ne peut attaquer que si vous avez 4 Pokémon de la Team Rocket ou plus en jeu.",
			es: "Este Pokémon no puede atacar a menos que tengas 4 Pokémon del Team Rocket o más en juego.",
			'es-mx': "Este Pokémon no puede atacar a menos que tengas 4 Pokémon del Equipo Rocket o más en juego.",
			de: "Dieses Pokémon kann nicht angreifen, es sei denn, du hast 4 oder mehr Team Rockets Pokémon im Spiel.",
			it: "Questo Pokémon non può attaccare a meno che tu non abbia quattro o più Pokémon del Team Rocket in gioco.",
			pt: "Este Pokémon não pode atacar a não ser que você tenha 4 ou mais Pokémon da Equipe Rocket em jogo."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Erasure Ball",
			fr: "Boule Effacement",
			es: "Bola Correctora",
			'es-mx': "Bola Aniquiladora",
			de: "Löschball",
			it: "Annientapalla",
			pt: "Bola de Supressão"
		},

		effect: {
			en: "You may discard up to 2 Energy from your Benched Pokémon. This attack does 60 more damage for each card you discarded in this way.",
			fr: "Vous pouvez défausser jusqu'à 2 Énergies de vos Pokémon de Banc. Cette attaque inflige 60 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			es: "Puedes descartar hasta 2 Energías de tus Pokémon en Banca. Este ataque hace 60 puntos de daño más por cada carta que hayas descartado de esta manera.",
			'es-mx': "Puedes descartar hasta 2 Energías de tus Pokémon en Banca. Este ataque hace 60 puntos de daño más por cada carta que descartaste de esta manera.",
			de: "Du kannst bis zu 2 Energien von Pokémon auf deiner Bank auf deinen Ablagestapel legen. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 60 Schadenspunkte mehr zu.",
			it: "Puoi scartare fino a due Energie dai tuoi Pokémon in panchina. Questo attacco infligge 60 danni in più per ogni carta che hai scartato in questo modo.",
			pt: "Você pode descartar até 2 Energias dos seus Pokémon no Banco. Este ataque causa 60 pontos de dano a mais para cada carta descartada desta forma."
		},

		damage: "160+"
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675891,
		cardmarket: 869690
	}
}

export default card