import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Steelix",
		fr: "Steelix",
		de: "Stahlos",
		it: "Steelix",
		es: "Steelix",
		pt: "Steelix",
		'es-mx': "Steelix"
	},

	illustrator: "Tonji Matsuno",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 200,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Welcoming Tail",
			fr: "Queue Accueillante",
			de: "Willkommensschweif",
			it: "Coda di Benvenuto",
			es: "Cola de Bienvenida",
			pt: "Cauda de Boas-vindas",
			'es-mx': "Cola Cordial"
		},

		effect: {
			en: "If you have exactly 6 Prize cards remaining, this attack does 200 more damage.",
			fr: "S'il vous reste exactement 6 cartes Récompense, cette attaque inflige 200 dégâts supplémentaires.",
			de: "Wenn du genau 6 verbleibende Preiskarten hast, fügt diese Attacke 200 Schadenspunkte mehr zu.",
			it: "Se hai esattamente sei carte Premio rimanenti, questo attacco infligge 200 danni in più.",
			es: "Si te quedan exactamente 6 cartas de Premio, este ataque hace 200 puntos de daño más.",
			pt: "Se você tiver exatamente 6 cartas de Prêmio restantes, este ataque causará 200 pontos de dano a mais.",
			'es-mx': "Si te quedan exactamente 6 cartas de Premio, este ataque hace 200 puntos de daño más."
		},

		damage: "40+"
	}, {
		cost: ["Metal", "Metal", "Colorless", "Colorless"],

		name: {
			en: "Skull Bash",
			fr: "Coud'Krâne",
			de: "Schädelwumme",
			it: "Capocciata",
			es: "Cabezazo",
			pt: "Quebra-crânio",
			'es-mx': "Cabezazo"
		},

		damage: 140
	}],

	retreat: 4,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654489
	}
}

export default card