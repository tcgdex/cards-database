import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Shaymin",
		fr: "Shaymin",
		es: "Shaymin",
		it: "Shaymin",
		de: "Shaymin",
		'pt-br': "Shaymin",
		ko: "쉐이미"
	},

	illustrator: "Mizue",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		en: "It can dissolve toxins in the air to instantly transform ruined land into a lush field of flowers.",
		fr: "Il peut dissoudre les toxines dans l'air pour transformer\nun désert en un champ de fleurs luxuriantes.",
		es: "Puede disolver las toxinas del aire para\ntransformar tierra yerma en campos de flores.",
		it: "Può dissolvere le tossine nell'aria per mutare\nall'istante una terra arida in un rigoglioso campo fiorito.",
		de: "Es kann die Luft von Giften reinigen und Ödland\nin ein üppig blühendes Blumenfeld verwandeln.",
		'pt-br': "Pode dissolver toxinas no ar para instantaneamente\ntransformar terras arruinadas em campos\nde flores deslumbrantes.",
		ko: "대기의 독소를 분해해서\n거칠어진 대지를 일순간에\n꽃밭으로 만드는 힘을 가지고 있다."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Sky Support"
		},

		effect: {
			en: "As long as this Pokémon is on your Bench, your Active Basic Pokémon's Retreat Cost is 1 less."
		}
	}],

	attacks: [{
		name: {
			en: "Flap"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card
