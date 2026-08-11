import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Arcanine",
		'fr-fr': "Arcanin",
		'es-es': "Arcanine",
		'it-it': "Arcanine",
		'de-de': "Arkani",
		'pt-br': "Arcanine",
		'ko-kr': "윈디"
	},

	illustrator: "kodama",
	category: "Pokemon",

	dexId: [59],
	hp: 130,
	types: ["Fire"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Growlithe"
	},

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Heat Tackle",
			'fr-fr': "Charge Énergétique",
			'es-es': "Placaje Ardiente",
			'it-it': "Calorazione",
			'de-de': "Hitze-Tackle",
			'pt-br': "Golpe de Colisão Aquecido",
			'ko-kr': "히트태클"
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

		damage: "100"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond",

	description: {
		'en-us': "An ancient picture scroll shows that people were captivated by its movement as it ran through prairies.",
		'fr-fr': "Une vieille estampe montre que les êtres\nhumains étaient fascinés par ses mouvements\nlorsqu'il courait dans les champs.",
		'es-es': "Cuenta un antiguo pergamino que la gente se\nquedaba fascinada al verlo correr por las praderas.",
		'it-it': "Dal disegno su un'antica pergamena si vede come\nle sue corse sui prati incantassero le persone.",
		'de-de': "Eine alte Bildrolle zeigt, dass die Menschen\nvon dem Anblick über Wiesen rennender\nArkani verzaubert waren.",
		'pt-br': "Um antigo pergaminho mostra que pessoas eram\ncativadas por seu movimento enquanto este\nPokémon corria pelas pradarias.",
		'ko-kr': "초원을 내달리는 모습은\n사람들의 마음을 사로잡았다고\n옛날 그림에 묘사되어 있다."
	},

	boosters: ["pikachu"]
}

export default card
