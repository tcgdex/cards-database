import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [620],
	set: Set,

	name: {
		'en-us': "Mienshao",
		'fr-fr': "Shaofouine",
		'es-es': "Mienshao",
		'it-it': "Mienshao",
		'pt-br': "Mienshao",
		'de-de': "Wie-Shu"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Mienfoo",
		'fr-fr': "Kungfouine",
		'es-es': "Mienfoo",
		'it-it': "Mienfoo",
		'pt-br': "Mienfoo",
		'de-de': "Lin-Fu"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Gale Roundhouse",
			'fr-fr': "Coup Circulaire Bourrasque",
			'es-es': "Gancho Vendaval",
			'it-it': "Calcioraffica",
			'pt-br': "Chute Vendaval",
			'de-de': "Rundumwirbel"
		},

		effect: {
			'en-us': "If your opponent has 5 or fewer cards in their hand, this attack does 60 more damage.",
			'fr-fr': "Si votre adversaire a 5 cartes ou moins dans sa main, cette attaque inflige 60 dégâts supplémentaires.",
			'es-es': "Si tu rival tiene 5 cartas o menos en su mano, este ataque hace 60 puntos de daño más.",
			'it-it': "Se il tuo avversario ha cinque o meno carte in mano, questo attacco infligge 60 danni in più.",
			'pt-br': "Se o seu oponente tiver 5 ou menos cartas na mão dele, este ataque causará 60 pontos de dano a mais.",
			'de-de': "Wenn dein Gegner 5 oder weniger Karten auf seiner Hand hat, fügt diese Attacke 60 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785938,
				tcgplayer: 567310
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785938,
				tcgplayer: 567310
			}
		},
	],

	illustrator: "MINAMINAMI Take",

}

export default card
