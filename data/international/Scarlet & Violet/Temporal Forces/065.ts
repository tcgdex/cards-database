import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [184],
	set: Set,

	name: {
		'en-us': "Azumarill",
		'fr-fr': "Azumarill",
		'es-es': "Azumarill",
		'it-it': "Azumarill",
		'pt-br': "Azumarill",
		'de-de': "Azumarill"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Marill",
		'fr-fr': "Marill",
		'es-es': "Marill",
		'it-it': "Marill",
		'pt-br': "Marill",
		'de-de': "Marill"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Play Rough",
			'fr-fr': "Câlinerie",
			'es-es': "Carantoña",
			'it-it': "Carineria",
			'pt-br': "Jogo Duro",
			'de-de': "Knuddler"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Power Tackle",
			'fr-fr': "Tacle Puissant",
			'es-es': "Placaje Poderoso",
			'it-it': "Forzazione",
			'pt-br': "Investida Poderosa",
			'de-de': "Kraft-Tackle"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "Its long ears are superb sensors. It can distinguish the movements of things in water and tell what they are.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760695,
				tcgplayer: 542809
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760695,
				tcgplayer: 542809
			}
		},
	],

	illustrator: "Makura Tami",

}

export default card