import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Sigilyph",
		fr: "Cryptéro",
		es: "Sigilyph",
		it: "Sigilyph",
		de: "Symvolara",
		'pt-br': "Sigilyph",
		ko: "심보러"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",

	dexId: [561],
	hp: 80,
	types: ["Psychic"],

	description: {
		en: "Psychic power allows these Pokémon to fly. Some say they were the guardians of an ancient city. Others say they were the guardians' emissaries.",
		fr: "Il vole grâce à ses pouvoirs psychiques. Certains disent qu'il était\nle dieu protecteur d'une ville antique, d'autres, son messager.",
		es: "Vuela gracias a sus poderes psíquicos. Dicen que\nhabía sido la deidad protectora de una antigua\nciudad, si bien otros creen que era su mensajero.",
		it: "Vola grazie ai suoi poteri psichici. Si dice che fosse lo\nspirito custode di un'antica città o il suo messaggero.",
		de: "Es fliegt mithilfe seiner Psycho-Kräfte. Einige\nsagen, es war einst der Wächter einer Stadt aus\nuralten Zeiten. Andere sagen, es war sein Bote.",
		'pt-br': "O poder psíquico destes Pokémon permite que voem. Há quem diga que eles\neram os guardiões de uma cidade antiga. Outros dizem que, na verdade, eram\nos emissários dos guardiões.",
		ko: "사이코 파워로 하늘을 난다.\n고대 도시의 수호신 또는\n수호신의 사자로 일컬어진다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Spike Draw",
			fr: "Pique-Pioche",
			es: "Robo Pico",
			it: "Battipesca",
			de: "Stachelzug",
			'pt-br': "Comprada Espinhosa",
			ko: "스파이크드로"
		},

		damage: 10,
		cost: ["Psychic"],

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			es: "Roba 1 carta.",
			it: "Pesca una carta.",
			de: "Ziehe 1 Karte.",
			'pt-br': "Compre 1 carta.",
			ko: "자신의 덱을 1장 뽑는다."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond"
}

export default card
