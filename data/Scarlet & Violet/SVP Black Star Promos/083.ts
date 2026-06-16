import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [913],
	set: Set,

	name: {
		en: "Quaxwell",
		fr: "Canarbello",
		es: "Quaxwell",
		it: "Quaxwell",
		pt: "Quaxwell",
		de: "Fuentente"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	evolveFrom: {
		en: "Quaxly",
		fr: "Coiffeton",
		es: "Quaxly",
		it: "Quaxly",
		pt: "Quaxly",
		de: "Kwaks"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
			es: "Pistola Agua",
			it: "Pistolacqua",
			pt: "Revólver d'Água",
			de: "Aquaknarre"
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless"],

		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
			es: "Chapoteo Ondulante",
			it: "Schizzi d'Onda",
			pt: "Onda Borrifante",
			de: "Wellenplatscher"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
	illustrator: "Atsushi Furusawa",
	description: {
		en: "These Pokémon constantly run through shallow waters to train their legs, then compete with each other to see which of them kicks most gracefully.",
	},
	variants: [
		{
			type: "holo"
		}
	],
}

export default card
