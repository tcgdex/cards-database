import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Mewtwo ex",
		fr: "Mewtwo-ex de la Team Rocket",
		de: "Team Rockets Mewtu-ex",
		it: "Mewtwo-ex del Team Rocket",
		es: "Mewtwo ex del Team Rocket",
		pt: "Mewtwo ex da Equipe Rocket",
		'es-mx': "Mewtwo ex del Equipo Rocket"
	},

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
			de: "Sparpower",
			it: "Serbaforza",
			es: "Ahorro de Poder",
			pt: "Economizador de Energia",
			'es-mx': "Ahorro de Poder"
		},

		effect: {
			en: "This Pokémon can't attack unless you have 4 or more Team Rocket's Pokémon in play.",
			fr: "Ce Pokémon ne peut attaquer que si vous avez 4 Pokémon de la Team Rocket ou plus en jeu.",
			de: "Dieses Pokémon kann nicht angreifen, es sei denn, du hast 4 oder mehr Team Rockets Pokémon im Spiel.",
			it: "Questo Pokémon non può attaccare a meno che tu non abbia quattro o più Pokémon del Team Rocket in gioco.",
			es: "Este Pokémon no puede atacar a menos que tengas 4 Pokémon del Team Rocket o más en juego.",
			pt: "Este Pokémon não pode atacar a não ser que você tenha 4 ou mais Pokémon da Equipe Rocket em jogo.",
			'es-mx': "Este Pokémon no puede atacar a menos que tengas 4 Pokémon del Equipo Rocket o más en juego."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Erasure Ball",
			fr: "Boule Effacement",
			de: "Löschball",
			it: "Annientapalla",
			es: "Bola Correctora",
			pt: "Bola de Supressão",
			'es-mx': "Bola Aniquiladora"
		},

		effect: {
			en: "You may discard up to 2 Energy from your Benched Pokémon. This attack does 60 more damage for each card you discarded in this way.",
			fr: "Vous pouvez défausser jusqu'à 2 Énergies de vos Pokémon de Banc. Cette attaque inflige 60 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			de: "Du kannst bis zu 2 Energien von Pokémon auf deiner Bank auf deinen Ablagestapel legen. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 60 Schadenspunkte mehr zu.",
			it: "Puoi scartare fino a due Energie dai tuoi Pokémon in panchina. Questo attacco infligge 60 danni in più per ogni carta che hai scartato in questo modo.",
			es: "Puedes descartar hasta 2 Energías de tus Pokémon en Banca. Este ataque hace 60 puntos de daño más por cada carta que hayas descartado de esta manera.",
			pt: "Você pode descartar até 2 Energias dos seus Pokémon no Banco. Este ataque causa 60 pontos de dano a mais para cada carta descartada desta forma.",
			'es-mx': "Puedes descartar hasta 2 Energías de tus Pokémon en Banca. Este ataque hace 60 puntos de daño más por cada carta que descartaste de esta manera."
		},

		damage: "160+"
	}],

	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: 'reverse'
		},
		{
			type: 'holo'
		},
	]
}

export default card
