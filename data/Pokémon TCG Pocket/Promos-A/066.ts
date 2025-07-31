import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Mimikyu",
		fr: "Mimiqui",
		es: "Mimikyu",
		it: "Mimikyu",
		de: "Mimigma",
		'pt-br': "Mimikyu",
		ko: "따라큐"
	},

	illustrator: "Amelicart",
	rarity: "One Star",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		en: "This Pokémon lives in dark places untouched by\nsunlight. When it appears before humans, it hides\nitself under a cloth that resembles a Pikachu.",
		fr: "Il vit dans les lieux sombres, à l'abri du soleil.\nLorsqu'il se montre, il dissimule tout son corps\nsous un déguisement qui rappelle Pikachu.",
		es: "Vive en lugares oscuros donde no llega el sol.\nCuando se deja ver por la gente, oculta todo\nsu cuerpo bajo un saco con aspecto de Pikachu.",
		it: "Vive nell'ombra, lontano dalla luce del sole. Quando appare davanti\nalle persone si nasconde sotto un panno che somiglia a un Pikachu.",
		de: "Es lebt an dunklen Orten ohne Sonnenlicht.\nMenschen zeigt es sich nur, wenn es mit einem\nLumpen bedeckt ist, der aussieht wie ein Pikachu.",
		'pt-br': "Este Pokémon vive em lugares escuros livres da luz do sol.\nQuando aparece diante de humanos, esconde-se sob\num pano parecido com Pikachu.",
		ko: "볕이 들지 않는 어두운 곳에 산다.\n사람들 앞에 나타날 때는\n피카츄를 본뜬 천으로 온몸을 가린다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Shadow Hit",
			fr: "Frappe Ombre",
			es: "Impacto Umbrío",
			it: "Botta Spettrale",
			de: "Schattenschlag",
			'pt-br': "Batida Sombria",
			ko: "섀도히트"
		},

		damage: 60,
		cost: ["Psychic", "Colorless"],

		effect: {
			en: "This attack also does 20 damage to 1 of your Pokémon.",
			fr: "Cette attaque inflige aussi 20 dégâts à un de vos Pokémon.",
			es: "Este ataque también hace 20 puntos de daño a 1 de tus Pokémon.",
			it: "Questo attacco infligge anche 20 danni a uno dei tuoi Pokémon.",
			de: "Diese Attacke fügt auch 1 deiner Pokémon 20 Schadenspunkte zu.",
			'pt-br': "Este ataque também causa 20 pontos de dano a 1 dos seus Pokémon.",
			ko: "자신의 포켓몬 1마리에게도 20데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	boosters: []
}

export default card