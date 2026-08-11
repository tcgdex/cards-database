import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Zebstrika",
		'fr-fr': "Zéblitz",
		'es-es': "Zebstrika",
		'it-it': "Zebstrika",
		'de-de': "Zebritz",
		'pt-br': "Zebstrika",
		'ko-kr': "제브라이카"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",

	dexId: [523],
	hp: 90,
	types: ["Lightning"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Blitzle"
	},

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Thunder Spear",
			'fr-fr': "Lance-Éclair",
			'es-es': "Lanza del Trueno",
			'it-it': "Tuonolancia",
			'de-de': "Donnerspeer",
			'pt-br': "Lança do Trovão",
			'ko-kr': "썬더애로"
		},

		effect: {
			'en-us': "This attack does 30 damage to 1 of your opponent's Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire.",
			'es-es': "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival.",
			'it-it': "Questo attacco infligge 30 danni a uno dei Pokémon\ndel tuo avversario.",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 30 Schadenspunkte zu.",
			'pt-br': "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente.",
			'ko-kr': "상대의 포켓몬 1마리에게 30데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		'en-us': "When this ill-tempered Pokémon runs wild, it shoots lightning from its mane in all directions.",
		'fr-fr': "De caractère violent, il envoie avec sa crinière des arcs\nélectriques de tous les côtés lorsqu'il se sent provoqué.",
		'es-es': "Es un Pokémon con mucho temperamento. Cuando\nse enoja, lanza rayos desde su crin en todas direcciones.",
		'it-it': "Ha un temperamento sanguigno.\nQuando si arrabbia dalla criniera\nlancia saette in ogni direzione.",
		'de-de': "Ein stürmischer Geselle. Wenn es\nwütend ist, feuert es über seine Mähne\nin alle Richtungen Stromsalven ab.",
		'pt-br': "Quando esse Pokémon mal-humorado fica\nnervoso, dispara raios de sua crina em\ntodas as direções.",
		'ko-kr': "격렬한 기질의 소유자.\n날뛰면 갈기에서 번개를\n사방팔방으로 방전한다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
