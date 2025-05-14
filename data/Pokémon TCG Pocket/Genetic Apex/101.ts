import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

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

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Thunder Punch",
			fr: "Poing Éclair"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 40 more damage. If tails, this Pokémon also does 20 damage to itself.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts de plus. Si c'est pile, ce Pokémon s'inflige aussi 20 dégâts."
		},

		damage: "40+"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],


	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "Many power plants keep Ground-type Pokémon around as a defense against Electabuzz that come seeking electricity.",
		fr: "De nombreuses centrales électriques gardent\ndes Pokémon Sol à proximité afin d'empêcher\nles Élektek de leur voler de l'électricité.",
		es: "Es habitual que las centrales eléctricas cuenten\ncon Pokémon de tipo Tierra para hacer frente\na los Electabuzz ávidos de electricidad.",
		it: "Molte centrali elettriche utilizzano\nPokémon di tipo Terra per difendersi\ndagli Electabuzz a caccia di elettricità.",
		de: "In vielen Elektrizitätswerken werden Pokémon\nvom Typ Boden eingesetzt, um Elektek davon\nabzuhalten, den dortigen Strom anzuzapfen.",
		'pt-br': "Muitas usinas mantêm Pokémon de tipo Terrestre\npor perto. Fazem isso para protegê-las de Electabuzz\nque aparecem em busca de eletricidade.",
		ko: "전기를 노리는 에레브를\n퇴치하고자 땅포켓몬을 두는\n발전소도 많다."
	}
}

export default card
