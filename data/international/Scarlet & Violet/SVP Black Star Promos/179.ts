import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [716],
	set: Set,

	name: {
		'en-us': "Xerneas ex",
		'fr-fr': "Xerneas-ex",
		'de-de': "Xerneas-ex",
		'es-es': "Xerneas ex",
		'it-it': "Xerneas-ex",
		'pt-br': "Xerneas ex"
	},

	suffix: "ex",
	illustrator: "PLANETA Igarashi",
	rarity: "Promo",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Aurora Beam",
			'fr-fr': "Onde Boréale",
			'de-de': "Aurorastrahl",
			'es-es': "Rayo Aurora",
			'it-it': "Raggiaurora",
			'pt-br': "Raio Aurora"
		},

		damage: 50
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Rising Horns",
			'fr-fr': "Cornes Ascendantes",
			'de-de': "Erhobene Hörner",
			'es-es': "Cornamenta Ascendente",
			'it-it': "Impennacorna",
			'pt-br': "Chifres Ascendentes"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Pokémon ex, this attack does 100 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-ex, cette attaque inflige 100 dégâts supplémentaires.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex ist, fügt diese Attacke 100 Schadenspunkte mehr zu.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 100 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-ex, questo attacco infligge 100 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon ex, este ataque causará 100 pontos de dano a mais."
		},

		damage: "120+"
	}],

	retreat: 1,
	regulationMark: "H",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 810394,
				tcgplayer: 619584
			},
		}
	],
}

export default card
