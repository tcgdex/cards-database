import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Manaphy",
		fr: "Manaphy",
		es: "Manaphy",
		it: "Manaphy",
		de: "Manaphy",
		'pt-br': "Manaphy",
		ko: "마나피"
	},

	illustrator: "MINAMINAMI Take",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		en: "It is born with a wondrous power that lets it bond with any kind of Pokémon.",
		fr: "Il est né avec le pouvoir incroyable de créer\ndes liens avec n'importe quel Pokémon.",
		es: "Nace con un maravilloso poder que le permite\nestablecer vínculos con cualquier tipo de Pokémon.",
		it: "Dispone di un potere innato che lo fa\nlegare con qualsiasi specie di Pokémon.",
		de: "Es wird mit einer wundersamen Kraft geboren,\ndie eine Bindung zu jedem anderen Pokémon\nmöglich macht.",
		'pt-br': "Ele nasce com um poder extraordinário\nque o permite se ligar a qualquer tipo de Pokémon.",
		ko: "태어났을 때부터 가지고 있는\n이상한 힘을 쓰면 어떤 포켓몬과도\n마음이 서로 통하게 된다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Oceanic Gift"
		},

		cost: ["Water"],

		effect: {
			en: "Choose 2 of your Benched Pokémon. For each of those Pokémon, take a <span class=\"energy-text energy-text--type-water\"></span> Energy from your Energy Zone and attach it to that Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card
