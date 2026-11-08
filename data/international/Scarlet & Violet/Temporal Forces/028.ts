import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [218],
	set: Set,

	name: {
		'en-us': "Slugma",
		'fr-fr': "Limagma",
		'es-es': "Slugma",
		'it-it': "Slugma",
		'pt-br': "Slugma",
		'de-de': "Schneckmag"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Roasting Heat",
			'fr-fr': "Rôtissoire",
			'es-es': "Calor Abrasador",
			'it-it': "Calore Rovente",
			'pt-br': "Calor de Lascar",
			'de-de': "Bratende Hitze"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is Burned, this attack does 40 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est Brûlé, cette attaque inflige 40 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival está Quemado, este ataque hace 40 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è bruciato, questo attacco infligge 40 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente estiver Queimado, este ataque causará 40 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners verbrannt ist, fügt diese Attacke 40 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "A common sight in volcanic areas, it slowly slithers around in a constant search for warm places.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760658,
				tcgplayer: 542772
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760658,
				tcgplayer: 542772
			}
		},
	],

	illustrator: "Haru Akasaka",

}

export default card