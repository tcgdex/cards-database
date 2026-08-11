import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Beedrill",
		'fr-fr': "Dardargnan",
		'es-es': "Beedrill",
		'it-it': "Beedrill",
		'de-de': "Bibor",
		'pt-br': "Beedrill",
		'ko-kr': "독침붕"
	},

	illustrator: "You Iribi",
	category: "Pokemon",

	dexId: [15],
	hp: 120,
	types: ["Grass"],
	stage: "Stage2",

	evolveFrom: {
		'en-us': "Kakuna"
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Sharp Sting",
			'fr-fr': "Piqûre Pointue",
			'es-es': "Aguijón Afilado",
			'it-it': "Tagliospina",
			'de-de': "Scharfer Stich",
			'pt-br': "Ferroada Afiada",
			'ko-kr': "날카로운침"
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
		'en-us': "It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.",
		'fr-fr': "Il se sert de ses trois aiguillons empoisonnés\npour attaquer sans relâche ses adversaires.",
		'es-es': "Tiene 3 aguijones venenosos en sus patas y cola.\nSuelen pinchar a sus enemigos repetidas veces.",
		'it-it': "Possiede tre aculei velenosi sulle zampe anteriori\ne sull'addome con cui punge i nemici ripetutamente.",
		'de-de': "Dieses Pokémon verfügt über drei Giftstachel.\nEs kann seine Gegner damit wiederholt stechen.",
		'pt-br': "Ele possui três ferrões venenosos nas patas\ndianteiras e na cauda. Eles são usados para\npicar repetidamente o inimigo.",
		'ko-kr': "양손과 엉덩이에 있는 3개의\n독침으로 상대를 찌르고 찌르고\n또 찌르며 공격한다."
	},

	boosters: ["mewtwo"]
}

export default card
