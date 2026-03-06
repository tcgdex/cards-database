import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Electabuzz",
		fr: "Élektek",
		es: "Electabuzz",
		it: "Electabuzz",
		de: "Elektek",
		'pt-br': "Electabuzz",
		ko: "에레브"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",

	dexId: [125],
	hp: 70,
	types: ["Lightning"],

	description: {
		en: "Many power plants keep Ground-type Pokémon around as a defense against Electabuzz that come seeking electricity.",
		fr: "De nombreuses centrales électriques gardent\ndes Pokémon Sol à proximité afin d'empêcher\nles Élektek de leur voler de l'électricité.",
		es: "Es habitual que las centrales eléctricas cuenten\ncon Pokémon de tipo Tierra para hacer frente\na los Electabuzz ávidos de electricidad.",
		it: "Molte centrali elettriche utilizzano\nPokémon di tipo Terra per difendersi\ndagli Electabuzz a caccia di elettricità.",
		de: "In vielen Elektrizitätswerken werden Pokémon\nvom Typ Boden eingesetzt, um Elektek davon\nabzuhalten, den dortigen Strom anzuzapfen.",
		'pt-br': "Muitas usinas mantêm Pokémon de tipo Terrestre\npor perto. Fazem isso para protegê-las de Electabuzz\nque aparecem em busca de eletricidade.",
		ko: "전기를 노리는 에레브를\n퇴치하고자 땅포켓몬을 두는\n발전소도 많다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Thunder Spear",
			fr: "Lance-Éclair",
			es: "Lanza del Trueno",
			it: "Tuonolancia",
			de: "Donnerspeer",
			'pt-br': "Lança do Trovão",
			ko: "썬더애로"
		},

		cost: ["Lightning", "Lightning"],

		effect: {
			en: "This attack does 40 damage to 1 of your opponent's Pokémon.",
			fr: "Cette attaque inflige 40 dégâts à l'un des Pokémon de votre adversaire.",
			es: "Este ataque hace 40 puntos de daño a 1 de los Pokémon de tu rival.",
			it: "Questo attacco infligge 40 danni a uno dei Pokémon\ndel tuo avversario.",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 40 Schadenspunkte zu.",
			'pt-br': "Este ataque causa 40 pontos de dano a 1 dos Pokémon do seu oponente.",
			ko: "상대의 포켓몬 1마리에게 40데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond"
}

export default card
