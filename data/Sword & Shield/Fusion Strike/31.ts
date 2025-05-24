import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [38],
	set: Set,

	name: {
		en: "Ninetales",
		fr: "Feunard",
		es: "Ninetales",
		it: "Ninetales",
		pt: "Ninetales",
		de: "Vulnona"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	evolveFrom: {
		en: "Vulpix",
		fr: "Goupix",
		es: "Vulpix",
		it: "Vulpix",
		pt: "Vulpix",
		de: "Vulpix"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Tika Matsuno",

	description: {
		en: "Very smart and very vengeful. Grabbing one of its many tails could result in a 1,000-year curse."
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Byway of the Nine-Tailed Fox",
			fr: "Sentier du Renard à Neuf Queues",
			de: "Weg des neunschweifigen Fuchses",
			es: "Senda del Zorro de Nueve Colas",
			pt: "Atalho da Raposa de Nove Caudas",
			it: "Scorciatoia della Volpe a Nove Code"
		},

		effect: {
			en: "The Retreat Cost of each of your Pokémon that has any {R} Energy attached is {C}{C} less.",
			fr: "Le Coût de Retraite de chacun de vos Pokémon auquel de l'Énergie {R} est attachée est diminué de {C}{C}.",
			de: "Die Rückzugskosten jedes deiner Pokémon, an das mindestens 1 {R}-Energie angelegt ist, verringern sich um {C}{C}.",
			es: "El Coste de Retirada de cada uno de tus Pokémon que tenga alguna Energía {R} unida a él es de {C}{C} menos.",
			pt: "O custo de Recuo de cada um dos seus Pokémon que tiver alguma Energia {R} ligada a ele é {C}{C} a menos.",
			it: "Il costo di ritirata di ciascuno dei tuoi Pokémon che ha delle Energie {R} assegnate è ridotto di {C}{C}."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Flame Tail",
			fr: "Queue de Flammes",
			de: "Flammenschweif",
			es: "Cola de Fuego",
			pt: "Cauda de Chamas",
			it: "Codafiamma"
		},

		damage: 60
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card