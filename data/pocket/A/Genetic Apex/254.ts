import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Arcanine ex",
		fr: "Arcanin-ex",
		es: "Arcanine ex",
		it: "Arcanine-ex",
		de: "Arkani-ex",
		'pt-br': "Arcanine ex",
		ko: "윈디 ex"
	},

	illustrator: "PLANETA Saito",
	category: "Pokemon",

	dexId: [59],
	hp: 150,
	types: ["Fire"],
	stage: "Stage1",

	evolveFrom: {
		en: "Growlithe"
	},

	suffix: "EX",

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Inferno Onrush",
			fr: "Torrent d'Enfer",
			es: "Infierno Desatado",
			it: "Assalto Infernale",
			de: "Inferno-Ansturm",
			'pt-br': "Investida Infernal",
			ko: "맹화의돌진"
		},

		effect: {
			en: "This Pokémon also does 20 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 20 dégâts.",
			es: "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 20 danni a se stesso.",
			de: "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu.",
			'pt-br': "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			ko: "이 포켓몬에게도 20데미지를 준다."
		},

		damage: "120"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Star",
	boosters: ["pikachu"]
}

export default card
