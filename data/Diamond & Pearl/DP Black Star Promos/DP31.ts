import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Heatran",
		fr: "Heatran",
		de: "Heatran"
	},
	illustrator: "Shizurow",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		485,
	],
	hp: 120,
	types: [
		"Fire",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Heat Metal",
				fr: "Métal chauffant",
				de: "Hitzewelle"
			},
			effect: {
				en: "Your opponent can't remove the Special Condition Burned by evolving or devolving his or her Burned Pokémon. (This also includes putting a Pokémon Level-Up card onto the Burned Pokémon.) Whenever your opponent flips a coin for the Special Condition Burned between turns, treat it as tails.",
				fr: "Votre adversaire ne peut pas retirer l'État Spécial Brûlé en évoluant ou dés-évoluant son Pokémon Brûlé. (Placer une carte Pokémon Niveau Sup sur votre Pokémon Brûlé inclus). Lorsque votre adversaire lance une pièce pour l'État Spécial Brûlé entre deux tours, considérez que c'est une pile.",
				de: "Einmal am Ende deines Zuges kannst du, wenn Heatran auf deiner Bank ist, diese Poké-Power benutzen. Wenn du in diesem Zug als Ergebnis eines Angriffs von deinem Aktiven - oder -Pokémon Basis-Energiekarten von diesem entfernt und auf deinen Ablagestapel gelegt hast, lege bis zu 2 dieser Energiekarten an dieses Pokémon an."
			},
		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	variants: [
		{
			type: "holo",
		}
	],
}

export default card
