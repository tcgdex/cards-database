import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Veluza ex",
		fr: "Délestin-ex",
		es: "Veluza ex",
		de: "Agiluza-ex",
		it: "Veluza-ex",
		pt: "Veluza ex",
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
			en: "Razor Fin",
			fr: "Aileron-Rasoir",
			es: "Aleta Afilada",
			de: "Rasierflosse",
			it: "Pinnalama",
			pt: "Barbatana Cortante",
			'es-mx': "Aleta Cortante"
		},

		damage: 30
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Purging Strike",
			fr: "Frappe Nettoyage",
			es: "Golpe Purgador",
			de: "Abwurftreffer",
			it: "Attacco Liberante",
			pt: "Golpe do Desapego",
			'es-mx': "Golpe Liberante"
		},

		effect: {
			en: "You may discard your hand. If you discarded any cards in this way, this attack does 120 more damage.",
			fr: "Vous pouvez défausser votre main. Si vous avez défaussé au moins une carte de cette façon, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Puedes descartar las cartas de tu mano. Si has descartado alguna carta de esta manera, este ataque hace 120 puntos de daño más.",
			de: "Du kannst deine Handkarten auf deinen Ablagestapel legen. Wenn du auf diese Weise mindestens 1 Karte auf deinen Ablagestapel gelegt hast, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			it: "Puoi scartare le carte che hai in mano. Se hai scartato delle carte in questo modo, questo attacco infligge 120 danni in più.",
			pt: "Você pode descartar a sua mão. Se você descartou qualquer carta desta forma, este ataque causará 120 pontos de dano a mais.",
			'es-mx': "Puedes descartar las cartas de tu mano. Si descartaste alguna carta de esta manera, este ataque hace 120 puntos de daño más."
		},

		damage: "120+"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		"firstEdition": false,
		"holo": true,
		"normal": false
		"reverse": false,
		"wPromo": false,
		}
}

export default card
