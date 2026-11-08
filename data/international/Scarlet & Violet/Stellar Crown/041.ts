import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [658],
	set: Set,

	name: {
		'en-us': "Greninja ex",
		'fr-fr': "Amphinobi-ex",
		'es-es': "Greninja ex",
		'it-it': "Greninja-ex",
		'pt-br': "Greninja ex",
		'de-de': "Quajutsu-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 300,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Frogadier",
		'fr-fr': "Croâporal",
		'es-es': "Frogadier",
		'it-it': "Frogadier",
		'pt-br': "Frogadier",
		'de-de': "Amphizel"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Shifting Shuriken",
			'fr-fr': "Shuriken Changeant",
			'es-es': "Shuriken Cambiante",
			'it-it': "Lame Mutevoli",
			'pt-br': "Estrela Ninja Mutável",
			'de-de': "Wandel-Shuriken"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 100 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 100 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 100 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 100 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 100 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 785895,
				tcgplayer: 567267
			}
		},
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 841269,
			}
		},
		{
			type: "holo",
			size: "jumbo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 841270,
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

}

export default card
