import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "It fires itself up by striking its scales with force as it dances. Its roar is a battle cry."
	},

	name: {
		en: "Hakamo-o",
		fr: "Écaïd",
		de: "Mediras",
		es: "Hakamo-o",
		it: "Hakamo-o",
		'es-mx': "Hakamo-o"
	},

	illustrator: "Jiro Sasumo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [783],
	hp: 90,
	types: ["Dragon"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Sharp Fang",
			fr: "Croc Aiguisé",
			de: "Scharfe Fänge",
			es: "Colmillo Afilado",
			it: "Zannaffilata",
			'es-mx': "Colmillo Afilado"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Dragon Claw",
			fr: "Draco-Griffe",
			de: "Drachenklaue",
			es: "Garra Dragón",
			it: "Dragartigli",
			'es-mx': "Garra Dragón"
		},

		damage: 70,
		cost: ["Lightning", "Fighting"]
	}],

	retreat: 2,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907718,
				tcgplayer: 716504
			}
		}
	],
}

export default card