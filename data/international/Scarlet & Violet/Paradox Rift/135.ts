import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [681],
	set: Set,

	name: {
		'en-us': "Aegislash ex",
		'fr-fr': "Exagide-ex",
		'es-es': "Aegislash ex",
		'it-it': "Aegislash-ex",
		'pt-br': "Aegislash ex",
		'de-de': "Durengard-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 330,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Doublade",
		'fr-fr': "Dimoclès",
		'es-es': "Doublade",
		'it-it': "Doublade",
		'pt-br': "Doublade",
		'de-de': "Duokles"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Peerless Edge",
			'fr-fr': "Lame Incomparable",
			'es-es': "Filo sin Igual",
			'it-it': "Lama Ineguagliabile",
			'pt-br': "Gume Inigualável",
			'de-de': "Unvergleichliche Klinge"
		},

		effect: {
			'en-us': "This attack does 70 damage for each Prize card you have taken.",
			'fr-fr': "Cette attaque inflige 70 dégâts pour chaque carte Récompense que vous avez récupérée.",
			'es-es': "Este ataque hace 70 puntos de daño por cada carta de Premio que hayas cogido.",
			'it-it': "Questo attacco infligge 70 danni per ogni carta Premio che hai preso.",
			'pt-br': "Este ataque causa 70 pontos de dano para cada carta de Prêmio que você pegou.",
			'de-de': "Diese Attacke fügt für jede von dir genommene Preiskarte 70 Schadenspunkte zu."
		},

		damage: "70×"
	}, {
		cost: ["Metal", "Metal"],

		name: {
			'en-us': "Double-Edged Slash",
			'fr-fr': "Double Tranchant",
			'es-es': "Cuchillada Doble Filo",
			'it-it': "Doppio Taglio",
			'pt-br': "Talho de Dois Gumes",
			'de-de': "Zweischneidiger Schlitzer"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 220
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
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740673,
				tcgplayer: 523814,
				cardtrader: 265235
			}
		},
		{
			type: 'holo',
			size: 'jumbo',
			thirdParty: {
				cardmarket: 789468
			}
		},
	],

	suffix: "ex",
	illustrator: "toriyufu",

	
}

export default card
