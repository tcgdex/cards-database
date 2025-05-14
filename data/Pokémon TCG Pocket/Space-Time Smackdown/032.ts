import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Piloswine",
		fr: "Cochignon",
		es: "Piloswine",
		it: "Piloswine",
		de: "Keifel",
		'pt-br': "Piloswine",
		ko: "메꾸리"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		en: "Swinub"
	},

	description: {
		en: "If it charges at an enemy, the hairs on its back stand up straight. It is very sensitive to sound.",
		fr: "S'il charge un ennemi, les poils de son dos\nse dressent. Il est très sensible au bruit.",
		es: "Cuando carga contra un enemigo, se le erizan\nlos pelos del lomo. Es muy sensible al sonido.",
		it: "Quando carica il nemico, i peli gli si\nrizzano sul dorso. È molto sensibile ai suoni.",
		de: "Beim Angriff auf einen Gegner stellen sich seine\nRückenhaare auf. Es hört außergewöhnlich gut.",
		'pt-br': "Quando Piloswine dispara contra um oponente,\nos pelos nas suas costas se arrepiam.\nEste Pokémon é muito sensível ao som.",
		ko: "상대를 목표로 삼고 돌진할 때\n등에 있는 털이 곤두선다.\n소리에 매우 민감하다."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Thick Fat"
		},

		effect: {
			en: "This Pokémon takes −20 damage from attacks from <span class=\"energy-text energy-text--type-fire\"></span> or <span class=\"energy-text energy-text--type-water\"></span> Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Hammer In"
		},

		damage: 60,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 3
}

export default card
