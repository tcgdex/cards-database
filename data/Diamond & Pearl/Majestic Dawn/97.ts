import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Garchomp",
		fr: "Carchacrok",
		de: "Knakrack"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",
	set: Set,

	dexId: [
		445,
	],

	hp: 140,

	types: [
		"Colorless",
	],

	evolveFrom: {
		fr: "Level-Up",
	},

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Dragon Pulse",
				fr: "Dracochoc",
				de: "Drachenpuls"
			},
			effect: {
				en: "Once during your turn (before your attack), when you put Garchomp LV.X from your hand onto your Active Garchomp, you may flip 3 coins. For each heads, put 1 damage counter on each of your opponent's Benched Pokémon.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous placez Carchacrok LV.X  de votre main sur votre Carchacrok Actif, vous pouvez lancer 3 pièces. Pour chaque face, placez 1 marqueur de dégât sur chacun des Pokémon de Banc de votre adversaire.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn du Knakrack LV.X von deiner Hand auf dein aktives Knakrack legst, 3 Münzen werfen. Lege pro \"Kopf\" 1 Schadensmarke auf jedes Pokémon auf der Bank deines Gegners."
			},
		},
	],

	attacks: [
		{

			name: {
				en: "Restore",
				fr: "Restituer",
				de: "Wiederherstellen"
			},
			effect: {
				en: "Search your discard pile for a Pokémon (excluding Pokémon LV.X) and put it onto your Bench as a Basic Pokémon. Then, you may search your discard pile for up to 3 basic Energy cards and attach them to that Pokémon.",
				fr: "Choisissez un Pokémon dans votre pile de défausse (Pokémon LV.X exclus) et placez-le sur votre Banc comme un Pokémon de base. Ensuite, vous pouvez choisir dans votre pile de défausse jusqu'à 3 cartes Énergie de base et les attacher à ce Pokémon.",
				de: "Durchsuche deinen Ablagestapel nach einer Pokémon-Karte (außer Pokémon LV.X) und lege sie als ein Basis-Pokémon auf deine Bank. Danach kannst du deinen Ablagestapel nach bis zu 3 Basis-Energiekarten durchsuchen und sie an dieses Pokémon anlegen."
			},

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 278146,
		tcgplayer: 85631
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
