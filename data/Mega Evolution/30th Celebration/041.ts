import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "It has small electric sacs on both its cheeks. When in a tough spot, this Pokémon discharges electricity."
	},

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		de: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		'es-mx': "Pikachu",
		pt: "Pikachu"
	},

	illustrator: "Rianti Hidayat",
	rarity: "Pikachu Rare",
	category: "Pokemon",
	dexId: [25],
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Hang Down",
			fr: "Suspension",
			de: "Herunterhängen",
			es: "Prender",
			it: "Tirar Giù",
			'es-mx': "Colgadera",
			pt: "Dependurar"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Zap Kick",
			fr: "Coup de Pied Ravageur",
			de: "Stromtritt",
			es: "Electropatada",
			it: "Dinamocalcio",
			'es-mx': "Electropatada",
			pt: "Chute Zap"
		},

		damage: 40,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "holo",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907648,
				tcgplayer: 712945
			}
		}
	],
}

export default card
