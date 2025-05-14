import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Ditto",
		fr: "Métamorph",
		es: "Ditto",
		it: "Ditto",
		de: "Ditto",
		'pt-br': "Ditto",
		ko: "메타몽"
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Copy Anything"
		},

		effect: {
			en: "CHose 1 of your opponent's Pokémon's attacks and use it as this attack. If this Pokémon doesn't ahve the necessary Energy to use that attack, this attack does nothing"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Star",

	description: {
		en: "Its transformation ability is perfect. However, if made to laugh, it can't maintain its disguise.",
		fr: "Il excelle dans l'art de la métamorphose, mais\nsi on le fait rire, il ne pourra rester déguisé.",
		es: "Su habilidad para transformarse es perfecta,\npero, si se le hace reír, perderá la fuerza\ny no podrá mantenerse transformado.",
		it: "Sa trasformarsi in maniera perfetta, ma se\nlo si fa ridere perde subito il travestimento.",
		de: "Seine Verwandlungskunst ist perfekt. Bringt man\nes jedoch zum Lachen, fliegt seine Tarnung auf.",
		'pt-br': "Sua capacidade de transformação é perfeita.\nNo entanto, se o fizerem rir, ele não poderá\nmanter seu disfarce.",
		ko: "변신은 완벽하지만\n웃는 바람에 힘이 빠지면\n변신이 풀려 버리고 만다."
	}
}

export default card
