import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Zebstrika",
		fr: "Zéblitz",
		es: "Zebstrika",
		it: "Zebstrika",
		de: "Zebritz",
		'pt-br': "Zebstrika",
		ko: "제브라이카"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",

	dexId: [523],
	hp: 90,
	types: ["Lightning"],
	stage: "Stage1",

	evolveFrom: {
		en: "Blitzle"
	},

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Thunder Spear",
			fr: "Lance-Éclair",
			es: "Lanza del Trueno",
			it: "Tuonolancia",
			de: "Donnerspeer",
			'pt-br': "Lança do Trovão",
			ko: "썬더애로"
		},

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Pokémon.",
			fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire.",
			es: "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival.",
			it: "Questo attacco infligge 30 danni a uno dei Pokémon\ndel tuo avversario.",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 30 Schadenspunkte zu.",
			'pt-br': "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente.",
			ko: "상대의 포켓몬 1마리에게 30데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "When this ill-tempered Pokémon runs wild, it shoots lightning from its mane in all directions.",
		fr: "De caractère violent, il envoie avec sa crinière des arcs\nélectriques de tous les côtés lorsqu'il se sent provoqué.",
		es: "Es un Pokémon con mucho temperamento. Cuando\nse enoja, lanza rayos desde su crin en todas direcciones.",
		it: "Ha un temperamento sanguigno.\nQuando si arrabbia dalla criniera\nlancia saette in ogni direzione.",
		de: "Ein stürmischer Geselle. Wenn es\nwütend ist, feuert es über seine Mähne\nin alle Richtungen Stromsalven ab.",
		'pt-br': "Quando esse Pokémon mal-humorado fica\nnervoso, dispara raios de sua crina em\ntodas as direções.",
		ko: "격렬한 기질의 소유자.\n날뛰면 갈기에서 번개를\n사방팔방으로 방전한다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
