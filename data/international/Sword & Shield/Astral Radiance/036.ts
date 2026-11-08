import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [340],
	set: Set,

	name: {
		'en-us': "Whiscash",
		'fr-fr': "Barbicha",
		'es-es': "Whiscash",
		'it-it': "Whiscash",
		'pt-br': "Whiscash",
		'de-de': "Welsar"
	},

	illustrator: "Shinji Kanda",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Barboach",
		'fr-fr': "Barloche",
		'es-es': "Barboach",
		'it-it': "Barboach",
		'pt-br': "Barboach",
		'de-de': "Schmerbe"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Mud Shot",
			'fr-fr': "Tir de Boue",
			'es-es': "Disparo Lodo",
			'it-it': "Colpodifango",
			'pt-br': "Tiro de Lama",
			'de-de': "Lehmschuss"
		},

		damage: 80
	}, {
		cost: ["Water", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Thrash",
			'fr-fr': "Mania",
			'es-es': "Golpe",
			'it-it': "Colpo",
			'pt-br': "Castigar",
			'de-de': "Fuchtler"
		},

		effect: {
			'en-us': "Flip a coin. If tails, this Pokémon also does 60 damage to itself. If heads, this attack does 60 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige aussi 60 dégâts. Si c'est face, cette attaque inflige 60 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este Pokémon también se hace 60 puntos de daño a sí mismo. Si sale cara, este ataque hace 60 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce croce, questo Pokémon infligge anche 60 danni a se stesso. Se esce testa, questo attacco infligge 60 danni in più.",
			'pt-br': "Jogue 1 moeda. Se sair coroa, este Pokémon também causará 60 pontos de dano a si mesmo. Se sair cara, este ataque causará 60 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Zahl fügt dieses Pokémon auch sich selbst 60 Schadenspunkte zu. Bei Kopf fügt diese Attacke 60 Schadenspunkte mehr zu."
		},

		damage: "120+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "It makes its nest at the bottom of swamps. It will eat anything—if it is alive, Whiscash will eat it.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658544,
				tcgplayer: 272236
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658544,
				tcgplayer: 272236
			}
		},
	],
}

export default card
