import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [976],
	set: Set,

	name: {
		'en-us': "Veluza ex",
		'fr-fr': "Délestin-ex",
		'es-es': "Veluza ex",
		'de-de': "Agiluza-ex",
		'it-it': "Veluza-ex",
		'pt-br': "Veluza ex",
		'es-mx': "Veluza ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Razor Fin",
			'fr-fr': "Aileron-Rasoir",
			'es-es': "Aleta Afilada",
			'de-de': "Rasierflosse",
			'it-it': "Pinnalama",
			'pt-br': "Barbatana Cortante",
			'es-mx': "Aleta Cortante"
		},

		damage: 30
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Purging Strike",
			'fr-fr': "Frappe Nettoyage",
			'es-es': "Golpe Purgador",
			'de-de': "Abwurftreffer",
			'it-it': "Attacco Liberante",
			'pt-br': "Golpe do Desapego",
			'es-mx': "Golpe Liberante"
		},

		effect: {
			'en-us': "You may discard your hand. If you discarded any cards in this way, this attack does 120 more damage.",
			'fr-fr': "Vous pouvez défausser votre main. Si vous avez défaussé au moins une carte de cette façon, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Puedes descartar las cartas de tu mano. Si has descartado alguna carta de esta manera, este ataque hace 120 puntos de daño más.",
			'de-de': "Du kannst deine Handkarten auf deinen Ablagestapel legen. Wenn du auf diese Weise mindestens 1 Karte auf deinen Ablagestapel gelegt hast, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			'it-it': "Puoi scartare le carte che hai in mano. Se hai scartato delle carte in questo modo, questo attacco infligge 120 danni in più.",
			'pt-br': "Você pode descartar a sua mão. Se você descartou qualquer carta desta forma, este ataque causará 120 pontos de dano a mais.",
			'es-mx': "Puedes descartar las cartas de tu mano. Si descartaste alguna carta de esta manera, este ataque hace 120 puntos de daño más."
		},

		damage: "120+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	suffix: "ex",
	illustrator: "5ban Graphics",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 817195,
				tcgplayer: 623470
			}
		},
	],
}

export default card
