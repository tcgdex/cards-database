import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Makuhita",
		fr: "Makuhita",
		es: "Makuhita",
		it: "Makuhita",
		de: "Makuhita",
		'pt-br': "Makuhita",
		ko: "마크탕"
	},

	illustrator: "Mina Nakai",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [296],
	hp: 70,
	types: ["Fighting"],

	description: {
		en: "It grows stronger by enduring harsh training. It is a gutsy Pokémon that can withstand any attack.",
		fr: "Il suit un entraînement drastique pour renforcer\nson corps. C'est un Pokémon plein de volonté,\ncapable de faire face à toutes les attaques.",
		es: "A base de duro entrenamiento se hace cada vez más fuerte.\nEs tan resistente que puede soportar cualquier ataque.",
		it: "Si rafforza allenandosi duramente. La sua grande forza\ndi volontà gli permette di resistere a qualsiasi attacco.",
		de: "Sein hartes Training macht es stärker. Es ist ein\nwillensstarkes Pokémon, das jedem Angriff\ntrotzen kann.",
		'pt-br': "Torna-se mais forte ao passar por um treinamento\nintenso. É um Pokémon corajoso, capaz de aguentar\nqualquer ataque.",
		ko: "힘든 수행을 반복하며 강해진다.\n어떤 공격도 참아 내는\n근성의 포켓몬이다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Slap Push",
			fr: "Grande Claque",
			es: "Empujón con Bofetón",
			it: "Spintonata",
			de: "Stoß",
			'pt-br': "Tapa Empurrão",
			ko: "뺨때리기"
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["solgaleo", "lunala"]
}

export default card