import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [544],
	set: Set,

	name: {
		'en-us': "Whirlipede",
		'fr-fr': "Scobolide",
		'de-de': "Rollum",
		'it-it': "Whirlipede",
		'pt-br': "Whirlipede",
		'es-es': "Whirlipede",
		'es-mx': "Whirlipede"
	},

	illustrator: "okayamatakatoshi",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Venipede",
		'fr-fr': "Venipatte",
		'de-de': "Toxiped",
		'it-it': "Venipede",
		'pt-br': "Venipede",
		'es-es': "Venipede",
		'es-mx': "Venipede"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Venoshock",
			'fr-fr': "Choc Venin",
			'de-de': "Giftschock",
			'it-it': "Velenoshock",
			'pt-br': "Venochoque",
			'es-es': "Carga Tóxica",
			'es-mx': "Carga Tóxica"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is Poisoned, this attack does 60 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 60 dégâts supplémentaires.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt diese Attacke 60 Schadenspunkte mehr zu.",
			'it-it': "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 60 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 60 pontos de dano a mais.",
			'es-es': "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 60 puntos de daño más.",
			'es-mx': "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 60 puntos de daño más."
		},

		damage: "30+"
	}],

	retreat: 3,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836018,
				tcgplayer: 642507
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836018,
				tcgplayer: 642507
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836395,
				tcgplayer: 642749
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836396,
				tcgplayer: 642676
			}
		}
	]
}

export default card
