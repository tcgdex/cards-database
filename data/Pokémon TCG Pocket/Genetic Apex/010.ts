import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Beedrill",
		fr: "Dardargnan",
		es: "Beedrill",
		it: "Beedrill",
		de: "Bibor",
		'pt-br': "Beedrill",
		ko: "독침붕"
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Stage2",

	evolveFrom: {
		en: "Kakuna",
		fr: "Coconfort",
		es: "Kakuna",
		it: "Kakuna",
		pt: "Kakuna",
		de: "Kokuna"
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Sharp Sting",
			fr: "Piqûre Pointue",
			es: "Aguijón Afilado",
			it: "Tagliospina",
			de: "Scharfer Stich",
			'pt-br': "Ferroada Afiada",
			ko: "날카로운침"
		},

		damage: "70"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Three Diamond",

	description: {
		en: "It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.",
		fr: "Il se sert de ses trois aiguillons empoisonnés\npour attaquer sans relâche ses adversaires.",
		es: "Tiene 3 aguijones venenosos en sus patas y cola.\nSuelen pinchar a sus enemigos repetidas veces.",
		it: "Possiede tre aculei velenosi sulle zampe anteriori\ne sull'addome con cui punge i nemici ripetutamente.",
		de: "Dieses Pokémon verfügt über drei Giftstachel.\nEs kann seine Gegner damit wiederholt stechen.",
		'pt-br': "Ele possui três ferrões venenosos nas patas\ndianteiras e na cauda. Eles são usados para\npicar repetidamente o inimigo.",
		ko: "양손과 엉덩이에 있는 3개의\n독침으로 상대를 찌르고 찌르고\n또 찌르며 공격한다."
	},

	boosters: ["mewtwo"]
}

export default card
