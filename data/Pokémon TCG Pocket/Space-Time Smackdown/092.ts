import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Lucario",
		fr: "Lucario",
		es: "Lucario",
		it: "Lucario",
		de: "Lucario",
		'pt-br': "Lucario",
		ko: "루카리오"
	},

	illustrator: "nagimiso",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		en: "Riolu"
	},

	description: {
		en: "It's said that no foe can remain invisible to Lucario, since it can detect auras—even those of foes it could not otherwise see.",
		fr: "On dit qu'il peut repérer ses ennemis, même\nlorsqu'ils sont invisibles, car il ressent leur aura.",
		es: "Dicen que, como es capaz de detectar auras,\npuede percibir a sus rivales aunque no los vea.",
		it: "Si dice che riesca a individuare anche\ngli avversari invisibili percependone l'aura.",
		de: "Man sagt, es könne sogar unsichtbare Gegner ausmachen,\nweil es dazu fähig ist, Auren wahrzunehmen.",
		'pt-br': "Como Lucario pode detectar auras, acredita-se\nque nenhum inimigo é invisível a seus olhos.\nAté mesmo aqueles que ele não consegue ver.",
		ko: "파동을 포착하여\n보이지 않는 상대의 모습도\n볼 수 있다고 전해진다."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fighting Coach"
		},

		effect: {
			en: "Attacks used by your <span class=\"energy-text energy-text--type-fighting\"></span> Pokémon do +20 damage to your opponent's Active Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Submarine Blow"
		},

		damage: 40,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2
}

export default card
