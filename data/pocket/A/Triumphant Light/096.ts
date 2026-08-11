import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Arceus ex",
		fr: "Arceus-ex",
		es: "Arceus ex",
		it: "Arceus-ex",
		de: "Arceus-ex",
		'pt-br': "Arceus ex",
		ko: "아르세우스 ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Crown",
	category: "Pokemon",

	dexId: [493],
	hp: 140,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fabled Luster",
			fr: "Éclat de Légende",
			es: "Lustre Mítico",
			it: "Lustro Mitologico",
			de: "Sagenhafter Glanz",
			'pt-br': "Esplendor Mitológico",
			ko: "신화의 반짝임"
		},

		effect: {
			en: "This Pokémon can't be affected by any Special Conditions.",
			fr: "Ce Pokémon ne peut être affecté par aucun État Spécial.",
			es: "Este Pokémon no puede verse afectado por ninguna Condición Especial.",
			it: "Questo Pokémon non può essere influenzato da condizioni speciali.",
			de: "Dieses Pokémon kann nicht von Speziellen Zuständen betroffen werden.",
			'pt-br': "Este Pokémon não pode ser afetado por quaisquer Condições Especiais.",
			ko: "이 포켓몬은 특수 상태가 되지 않는다."
		}
	}],

	attacks: [{
		name: {
			en: "Ultimate Force",
			fr: "Pouvoir Ultime",
			es: "Fuerza Definitiva",
			it: "Forza Suprema",
			de: "Ultimative Macht",
			'pt-br': "Força Suprema",
			ko: "얼티메이트 포스"
		},

		damage: "70+",
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "This attack does 20 more damage for each of your Benched Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chacun de vos Pokémon de Banc.",
			es: "Este ataque hace 20 puntos de daño más por cada uno de tus Pokémon en Banca.",
			it: "Questo attacco infligge 20 danni in più per ogni Pokémon nella tua panchina.",
			de: "Diese Attacke fügt für jedes Pokémon auf deiner Bank 20 Schadenspunkte mehr zu.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada um dos seus Pokémon no Banco.",
			ko: "자신의 벤치 포켓몬의 수 × 20데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card
