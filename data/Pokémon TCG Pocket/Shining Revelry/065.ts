import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Bibarel ex",
		fr: "Castorno-ex",
		es: "Bibarel ex",
		it: "Bibarel-ex",
		de: "Bidifas-ex",
		'pt-br': "Bibarel ex",
		ko: "비버통 ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",

	dexId: [400],
	hp: 160,
	types: ["Colorless"],

	evolveFrom: {
		en: "Bidoof"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Carefree Press",
			fr: "Pression Insouciante",
			es: "Presión Despreocupada",
			it: "Pressa Spensierata",
			de: "Entspannter Druck",
			'pt-br': "Aperto Despreocupado",
			ko: "유유자적 프레스"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			ko: "이 포켓몬의 HP를 30회복."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card