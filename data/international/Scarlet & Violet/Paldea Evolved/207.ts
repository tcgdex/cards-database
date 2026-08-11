import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [913],
	set: Set,

	name: {
		fr: "Canarbello",
		en: "Quaxwell",
		es: "Quaxwell",
		it: "Quaxwell",
		pt: "Quaxwell",
		de: "Fuentente"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	evolveFrom: {
		fr: "Coiffeton",
		en: "Quaxly",
		es: "Quaxly",
		it: "Quaxly",
		pt: "Quaxly",
		de: "Kwaks"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Pistolet à O",
			en: "Water Gun",
			es: "Pistola Agua",
			it: "Pistolacqua",
			pt: "Revólver d'Água",
			de: "Aquaknarre"
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless"],

		name: {
			fr: "Grosse Vague",
			en: "Wave Splash",
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

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715682,
				tcgplayer: 497610,
				cardtrader: 248848
			}
		},
	],

	illustrator: "Souichirou Gunjima",

	description: {
		en: "These Pokémon constantly run through shallow waters to train their legs, then compete with each other to see which of them kicks most gracefully.",
	},
}

export default card
