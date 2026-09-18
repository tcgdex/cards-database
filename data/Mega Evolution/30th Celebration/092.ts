import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Umbreon ex",
		fr: "Noctali-ex",
		de: "Nachtara-ex",
		es: "Umbreon ex",
		it: "Umbreon-ex",
		'es-mx': "Umbreon ex"
	},

	illustrator: "Keisuke Azuma",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [197],
	hp: 270,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Lunatic Claw",
			fr: "Griffe Lunatique",
			de: "Irre Kralle",
			es: "Garra Lunática",
			it: "Artiglio Siderale",
			'es-mx': "Garra Lunática"
		},

		effect: {
			en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 140 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 140 dégâts supplémentaires.",
			de: "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 140 Schadenspunkte mehr zu.",
			es: "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 140 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 140 danni in più.",
			'es-mx': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 140 puntos de daño más."
		},

		damage: "100+",
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907699,
				tcgplayer: 696835
			}
		}
	],
}

export default card