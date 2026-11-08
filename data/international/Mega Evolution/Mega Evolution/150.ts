import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Steelix",
		'fr-fr': "Steelix",
		'de-de': "Stahlos",
		'it-it': "Steelix",
		'es-es': "Steelix",
		'pt-br': "Steelix",
		'es-mx': "Steelix"
	},

	illustrator: "Tonji Matsuno",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 200,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Onix",
		'fr-fr': "Onix",
		'de-de': "Onix",
		'it-it': "Onix",
		'es-es': "Onix",
		'pt-br': "Onix",
		'es-mx': "Onix"
	},
	stage: "Stage1",
	dexId: [208],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Welcoming Tail",
			'fr-fr': "Queue Accueillante",
			'de-de': "Willkommensschweif",
			'it-it': "Coda di Benvenuto",
			'es-es': "Cola de Bienvenida",
			'pt-br': "Cauda de Boas-vindas",
			'es-mx': "Cola Cordial"
		},

		effect: {
			'en-us': "If you have exactly 6 Prize cards remaining, this attack does 200 more damage.",
			'fr-fr': "S'il vous reste exactement 6 cartes Récompense, cette attaque inflige 200 dégâts supplémentaires.",
			'de-de': "Wenn du genau 6 verbleibende Preiskarten hast, fügt diese Attacke 200 Schadenspunkte mehr zu.",
			'it-it': "Se hai esattamente sei carte Premio rimanenti, questo attacco infligge 200 danni in più.",
			'es-es': "Si te quedan exactamente 6 cartas de Premio, este ataque hace 200 puntos de daño más.",
			'pt-br': "Se você tiver exatamente 6 cartas de Prêmio restantes, este ataque causará 200 pontos de dano a mais.",
			'es-mx': "Si te quedan exactamente 6 cartas de Premio, este ataque hace 200 puntos de daño más."
		},

		damage: "40+"
	}, {
		cost: ["Metal", "Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Skull Bash",
			'fr-fr': "Coud'Krâne",
			'de-de': "Schädelwumme",
			'it-it': "Capocciata",
			'es-es': "Cabezazo",
			'pt-br': "Quebra-crânio",
			'es-mx': "Cabezazo"
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 4,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 851221,
				tcgplayer: 654489
			}
		},
	],
}

export default card
