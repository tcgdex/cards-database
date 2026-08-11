import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [709],
	set: Set,

	name: {
		'en-us': "Trevenant",
		'fr-fr': "Desséliande",
		'es-es': "Trevenant",
		'it-it': "Trevenant",
		'pt-br': "Trevenant",
		'de-de': "Trombork"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Phantump",
		'fr-fr': "Brocélôme",
		'es-es': "Phantump",
		'it-it': "Phantump",
		'pt-br': "Phantump",
		'de-de': "Paragoni"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Giga Drain",
			'fr-fr': "Giga-Sangsue",
			'es-es': "Gigadrenado",
			'it-it': "Gigassorbimento",
			'pt-br': "Gigadreno",
			'de-de': "Gigasauger"
		},

		effect: {
			'en-us': "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
			'fr-fr': "Soignez ce Pokémon du nombre de dégâts que vous avez infligés au Pokémon Actif de votre adversaire.",
			'es-es': "Cura a este Pokémon la misma cantidad de puntos de daño que hayas infligido al Pokémon Activo de tu rival.",
			'it-it': "Cura questo Pokémon da una quantità di danni pari a quelli che hai inflitto al Pokémon attivo del tuo avversario.",
			'pt-br': "Cure deste Pokémon a mesma quantidade de dano que você causou ao Pokémon Ativo do seu oponente.",
			'de-de': "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast."
		},

		damage: 50
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Forest Dump",
			'fr-fr': "Rejet Forestier",
			'es-es': "Descarga Forestal",
			'it-it': "Impatto Forestale",
			'pt-br': "Floresta Entulhada",
			'de-de': "Waldhieb"
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	description: {
		'en-us': "Trevenant is very kind to Pokémon living in the forest. It doesn't even care if these Pokémon take up residence in the greenery on its head.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769187,
				tcgplayer: 550057
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769187,
				tcgplayer: 550057
			}
		},
	],

	illustrator: "Oswaldo KATO",

}

export default card