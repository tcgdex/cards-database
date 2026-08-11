import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Arcanine ex",
		'fr-fr': "Arcanin-ex",
		'es-es': "Arcanine ex",
		'it-it': "Arcanine-ex",
		'de-de': "Arkani-ex",
		'pt-br': "Arcanine ex",
		'ko-kr': "윈디 ex"
	},

	illustrator: "PLANETA Saito",
	category: "Pokemon",

	dexId: [59],
	hp: 150,
	types: ["Fire"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Growlithe"
	},

	suffix: "EX",

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Inferno Onrush",
			'fr-fr': "Torrent d'Enfer",
			'es-es': "Infierno Desatado",
			'it-it': "Assalto Infernale",
			'de-de': "Inferno-Ansturm",
			'pt-br': "Investida Infernal",
			'ko-kr': "맹화의돌진"
		},

		effect: {
			'en-us': "This Pokémon also does 20 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 20 dégâts.",
			'es-es': "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 20 danni a se stesso.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu.",
			'pt-br': "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			'ko-kr': "이 포켓몬에게도 20데미지를 준다."
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
