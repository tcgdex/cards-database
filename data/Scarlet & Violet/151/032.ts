import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [32],
	set: Set,

	name: {
		fr: "Nidoran♂",
		en: "Nidoran♂",
		es: "Nidoran♂",
		it: "Nidoran♂",
		pt: "Nidoran♂",
		de: "Nidoran♂"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			fr: "Koud'Korne",
			en: "Horn Attack",
			es: "Cornada",
			it: "Incornata",
			pt: "Ataque de Chifre",
			de: "Hornattacke"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		en: "Small but brave, this Pokémon will hold its ground and even risk its life in battle to protect the female it's friendly with.",
		de: "Trotz seiner geringen Größe ist es sehr mutig. Um ein befreundetes Weibchen zu beschützen, riskiert es sein Leben und kämpft unerschrocken."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733627,
				tcgplayer: 516006,
				cardtrader: 261135
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733627,
				tcgplayer: 516006,
				cardtrader: 261135
			}
		},
	],

	illustrator: "Shiburingaru",

	
}

export default card
