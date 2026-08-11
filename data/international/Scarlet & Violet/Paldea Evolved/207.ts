import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [913],
	set: Set,

	name: {
		'fr-fr': "Canarbello",
		'en-us': "Quaxwell",
		'es-es': "Quaxwell",
		'it-it': "Quaxwell",
		'pt-br': "Quaxwell",
		'de-de': "Fuentente"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	evolveFrom: {
		'fr-fr': "Coiffeton",
		'en-us': "Quaxly",
		'es-es': "Quaxly",
		'it-it': "Quaxly",
		'pt-br': "Quaxly",
		'de-de': "Kwaks"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Pistolet à O",
			'en-us': "Water Gun",
			'es-es': "Pistola Agua",
			'it-it': "Pistolacqua",
			'pt-br': "Revólver d'Água",
			'de-de': "Aquaknarre"
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'fr-fr': "Grosse Vague",
			'en-us': "Wave Splash",
			'es-es': "Chapoteo Ondulante",
			'it-it': "Schizzi d'Onda",
			'pt-br': "Onda Borrifante",
			'de-de': "Wellenplatscher"
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
		'en-us': "These Pokémon constantly run through shallow waters to train their legs, then compete with each other to see which of them kicks most gracefully.",
	},
}

export default card
