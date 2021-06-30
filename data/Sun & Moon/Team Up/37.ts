import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Alolan Golem",
		fr: "Grolem d’Alola",
		es: "Golem de Alola",
		it: "Golem di Alola",
		pt: "Golem de Alola",
		de: "Alola-Geowaz"
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		76,
	],
	hp: 180,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Alolan Graveler",
		fr: "Gravalanch d’Alola",
	},
	stage: "Stage2",


	attacks: [
		{

			name: {
				en: "Electromagnetic Bomb",
				fr: "Bombe Électromagnétique",
				es: "Bomba Electromagnética",
				it: "Bomba Elettromagnetica",
				pt: "Bomba Eletromagnética",
				de: "Elektromagnetische Bombe"
			},
			effect: {
				en: "Move any number of Lightning Energy from your Benched Pokémon to this Pokémon. This attack does 20 damage for each Energy card you moved in this way.",
				fr: "Déplacez autant d’Énergies Lightning que vous voulez de vos Pokémon de Banc vers ce Pokémon. Cette attaque inflige 20 dégâts pour chaque carte Énergie déplacée de cette façon.",
				es: "Mueve cualquier cantidad de Energías Lightning de tus Pokémon en Banca a este Pokémon. Este ataque hace 20 puntos de daño por cada carta de Energía que hayas movido de esta manera.",
				it: "Sposta un numero qualsiasi di Energie Lightning dai tuoi Pokémon in panchina a questo Pokémon. Questo attacco infligge 20 danni per ogni carta Energia che hai spostato in questo modo.",
				pt: "Mova qualquer número de Energia Lightning dos seus Pokémon no Banco para este Pokémon. Este ataque causa 20 pontos de dano para cada carta de Energia movida desta forma.",
				de: "Verschiebe beliebig viele Lightning-Energien von den Pokémon auf deiner Bank auf dieses Pokémon. Diese Attacke fügt 20 Schadenspunkte mal der Anzahl der von dir auf diese Weise verschobenen Energiekarten zu."
			},
		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Super Zap Cannon",
				fr: "Super Élecanon",
				es: "Superelectrocañón",
				it: "Falcecannone Super",
				pt: "Supercanhão Zap",
				de: "Super-Blitzkanone"
			},
			effect: {
				en: "Discard 2 Energy from this Pokémon.",
				fr: "Défaussez 2 Énergies de ce Pokémon.",
				es: "Descarta 2 Energías de este Pokémon.",
				it: "Scarta due Energie assegnate a questo Pokémon.",
				pt: "Descarte 2 Energias deste Pokémon.",
				de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 190,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
