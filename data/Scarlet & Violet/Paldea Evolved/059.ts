import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [997],
	set: Set,

	name: {
		fr: "Cryodo",
		en: "Arctibax",
		es: "Arctibax",
		it: "Arctibax",
		pt: "Arctibax",
		de: "Cryospino"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	evolveFrom: {
		fr: "Frigodo",
		en: "Frigibax",
		es: "Frigibax",
		it: "Frigibax",
		pt: "Frigibax",
		de: "Frospino"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			fr: "Aileron Aiguisé",
			en: "Sharp Fin",
			es: "Cortaleta",
			it: "Pinnaffilata",
			pt: "Barbatana Afiada",
			de: "Schneidige Flosse"
		},

		damage: 40
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			fr: "Impact Glacial",
			en: "Frost Smash",
			es: "Golpe Gélido",
			it: "Gelocolpo",
			pt: "Pancada Congelada",
			de: "Frostschlag"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715534,
				tcgplayer: 497470,
				cardtrader: 248649
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715534,
				tcgplayer: 497470,
				cardtrader: 248649
			}
		},
	],

	illustrator: "Kouki Saitou",

	description: {
		en: "Arctibax freezes the air around it, protecting its face with an ice mask and turning its dorsal fin into a blade of ice.",
	},
}

export default card
