import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [10],
	set: Set,

	name: {
		'fr-fr': "Chenipan",
		'en-us': "Caterpie",
		'es-es': "Caterpie",
		'it-it': "Caterpie",
		'pt-br': "Caterpie",
		'de-de': "Raupy"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'fr-fr': "Mange-Feuille",
			'en-us': "Leaf Munch",
			'es-es': "Mascahojas",
			'it-it': "Mangifoglia",
			'pt-br': "Mastigar Folhas",
			'de-de': "Laubmampfer"
		},

		effect: {
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon {G}, cette attaque inflige 30 dégâts supplémentaires.",
			'en-us': "If your opponent's Active Pokémon is a {G} Pokémon, this attack does 30 more damage.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon {G}, este ataque hace 30 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon {G}, questo attacco infligge 30 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon {G}, este ataque causará 30 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein {G}-Pokémon ist, fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733605,
				tcgplayer: 502559,
				cardtrader: 261067
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733605,
				tcgplayer: 502559,
				cardtrader: 261067
			}
		},
	],

	illustrator: "Tika Matsuno",

	
}

export default card
