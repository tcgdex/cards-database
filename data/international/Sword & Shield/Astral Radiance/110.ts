import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [411],
	set: Set,

	name: {
		'en-us': "Bastiodon",
		'fr-fr': "Bastiodon",
		'es-es': "Bastiodon",
		'it-it': "Bastiodon",
		'pt-br': "Bastiodon",
		'de-de': "Bollterus"
	},

	illustrator: "Yuya Oka",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Shieldon",
		'fr-fr': "Dinoclier",
		'es-es': "Shieldon",
		'it-it': "Shieldon",
		'pt-br': "Shieldon",
		'de-de': "Schilterus"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Primal Fortress",
			'fr-fr': "Forteresse Primitive",
			'es-es': "Fortaleza Primigenia",
			'it-it': "Fortezza Primordiale",
			'pt-br': "Fortaleza Primitiva",
			'de-de': "Festung der Urzeit"
		},

		effect: {
			'en-us': "Your Pokémon take 30 less damage from attacks from your opponent's Pokémon V (after applying Weakness and Resistance).",
			'fr-fr': "Vos Pokémon subissent 30 dégâts de moins provenant des attaques des Pokémon-V de votre adversaire (après application de la Faiblesse et de la Résistance).",
			'es-es': "Los ataques de los Pokémon V de tu rival hacen 30 puntos de daño menos a tus Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "I tuoi Pokémon subiscono 30 danni in meno dagli attacchi dei Pokémon-V del tuo avversario, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Os seus Pokémon recebem 30 pontos de dano a menos de ataques dos Pokémon V do seu oponente (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Deinen Pokémon werden durch Attacken von Pokémon-V deines Gegners 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Iron Tackle",
			'fr-fr': "Charge de Fer",
			'es-es': "Bloqueo de Hierro",
			'it-it': "Azione Ferrea",
			'pt-br': "Golpe de Colisão Férreo",
			'de-de': "Eisentackle"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 4,
	regulationMark: "F",


	description: {
		'en-us': "This Pokémon is from roughly 100 million years ago. Its terrifyingly tough face is harder than steel.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658771,
				tcgplayer: 272325
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658771,
				tcgplayer: 272325
			}
		},
	],
}

export default card
