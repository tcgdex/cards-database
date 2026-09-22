import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "Delicious fruits grew out from around its neck because it always ate the same kind of fruit."
	},

	name: {
		en: "Tropius",
		fr: "Tropius",
		de: "Tropius",
		es: "Tropius",
		it: "Tropius",
		'es-mx': "Tropius"
	},

	illustrator: "Minahamu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [357],
	hp: 120,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Rally Back",
			fr: "Répercussions",
			de: "Aufholjagd",
			es: "Apoyo Vengativo",
			it: "Radunata Rinforzi",
			'es-mx': "Venganza Solidaria"
		},

		effect: {
			en: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 90 more damage.",
			fr: "Si au moins l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
			de: "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 90 Schadenspunkte mehr zu.",
			es: "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 90 puntos de daño más.",
			it: "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 90 danni in più.",
			'es-mx': "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 90 puntos de daño más."
		},

		damage: "30+",
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			en: "Cutting Wind",
			fr: "Vent Glacial",
			de: "Schneidender Wind",
			es: "Viento Helado",
			it: "Vento Tagliente",
			'es-mx': "Viento Tajante"
		},

		damage: 90,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907611,
				tcgplayer: 716439
			}
		}
	],
}

export default card
