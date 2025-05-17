import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Solrock",
		fr: "Solaroc",
		es: "Solrock",
		it: "Solrock",
		de: "Sonnfel",
		'pt-br': "Solrock",
		ko: "솔록"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		en: "When it rotates itself, it gives off light similar to the sun, thus blinding its foes.",
		fr: "Il produit une lumière aussi aveuglante\nque le soleil quand il se met à tournoyer.",
		es: "Al girar emite una luz como la del sol, con la\nque consigue deslumbrar a sus enemigos.",
		it: "Ruota vorticosamente su se stesso per emanare\nuna luce abbagliante che acceca il nemico.",
		de: "Es rotiert um die eigene Achse und strahlt dabei\nsonnengleiches Licht aus, mit dem es den Gegner blendet.",
		'pt-br': "Quando começa a girar, emite uma luz semelhante\nà do sol, cegando seus inimigos.",
		ko: "몸을 회전시키면\n태양과 같은 빛을 발산해\n적의 눈을 멀게 한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Solar Beam",
			fr: "Lance-Soleil",
			es: "Rayo Solar",
			it: "Solarraggio",
			de: "Solarstrahl",
			'pt-br': "Raio Solar",
			ko: "솔라빔"
		},

		damage: 60,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["solgaleo"]
}

export default card