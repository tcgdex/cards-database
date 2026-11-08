import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Team Rocket's Mewtwo ex",
		'fr-fr': "Mewtwo-ex de la Team Rocket",
		'de-de': "Team Rockets Mewtu-ex",
		'it-it': "Mewtwo-ex del Team Rocket",
		'es-es': "Mewtwo ex del Team Rocket",
		'pt-br': "Mewtwo ex da Equipe Rocket"
	},

	suffix: "ex",
	illustrator: "aky CG Works",
	rarity: "Promo",
	category: "Pokemon",
	dexId: [150],
	hp: 280,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Power Saver",
			'fr-fr': "Économie de Puissance",
			'de-de': "Sparpower",
			'it-it': "Serbaforza",
			'es-es': "Ahorro de Poder",
			'pt-br': "Economizador de Energia"
	},

		effect: {
			'en-us': "This Pokémon can't attack unless you have 4 or more Team Rocket's Pokémon in play.",
			'fr-fr': "Ce Pokémon ne peut attaquer que si vous avez 4 Pokémon de la Team Rocket ou plus en jeu.",
			'de-de': "Dieses Pokémon kann nicht angreifen, es sei denn, du hast 4 oder mehr Team Rockets Pokémon im Spiel.",
			'it-it': "Questo Pokémon non può attaccare a meno che tu non abbia quattro o più Pokémon del Team Rocket in gioco.",
			'es-es': "Este Pokémon no puede atacar a menos que tengas 4 Pokémon del Team Rocket o más en juego.",
			'pt-br': "Este Pokémon não pode atacar a não ser que você tenha 4 ou mais Pokémon da Equipe Rocket em jogo."
	}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Erasure Ball",
			'fr-fr': "Boule Effacement",
			'de-de': "Löschball",
			'it-it': "Annientapalla",
			'es-es': "Bola Correctora",
			'pt-br': "Bola de Supressão"
	},

		effect: {
			'en-us': "You may discard up to 2 Energy from your Benched Pokémon. This attack does 60 more damage for each card you discarded in this way.",
			'fr-fr': "Vous pouvez défausser jusqu'à 2 Énergies de vos Pokémon de Banc. Cette attaque inflige 60 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			'de-de': "Du kannst bis zu 2 Energien von Pokémon auf deiner Bank auf deinen Ablagestapel legen. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 60 Schadenspunkte mehr zu.",
			'it-it': "Puoi scartare fino a due Energie dai tuoi Pokémon in panchina. Questo attacco infligge 60 danni in più per ogni carta che hai scartato in questo modo.",
			'es-es': "Puedes descartar hasta 2 Energías de tus Pokémon en Banca. Este ataque hace 60 puntos de daño más por cada carta que hayas descartado de esta manera.",
			'pt-br': "Você pode descartar até 2 Energias dos seus Pokémon no Banco. Este ataque causa 60 pontos de dano a mais para cada carta descartada desta forma."
	},

		damage: "160+"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "x2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 832225,
				tcgplayer: 653257
			},
		}
	]
}

export default card
