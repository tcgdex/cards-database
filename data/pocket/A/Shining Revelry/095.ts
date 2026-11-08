import { Card } from "models/database/card"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Bibarel ex",
		'fr-fr': "Castorno-ex",
		'es-es': "Bibarel ex",
		'it-it': "Bibarel-ex",
		'de-de': "Bidifas-ex",
		'pt-br': "Bibarel ex",
		'ko-kr': "비버통 ex"
	},

	illustrator: "USGMEN",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [400],
	hp: 160,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Bidoof"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Carefree Press",
			'fr-fr': "Pression Insouciante",
			'es-es': "Presión Despreocupada",
			'it-it': "Pressa Spensierata",
			'de-de': "Entspannter Druck",
			'pt-br': "Aperto Despreocupado",
			'ko-kr': "유유자적 프레스"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'ko-kr': "이 포켓몬의 HP를 30회복."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card