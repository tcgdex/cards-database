import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [815],
	set: Set,

	name: {
		'en-us': "Cinderace V",
		'fr-fr': "Pyrobut V",
		'es-es': "Cinderace V",
		'it-it': "Cinderace V",
		'pt-br': "Cinderace V",
		'de-de': "Liberlo V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",
	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "5ban Graphics",

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Blaze Kick",
			'fr-fr': "Pied Brûleur",
			'de-de': "Feuerfeger",
			'es-es': "Patada Ígnea",
			'pt-br': "Chute Labareda",
			'it-it': "Calciardente"
		},

		damage: 210,

		effect: {
			'en-us': "Discard 2 {R} Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies {R} de ce Pokémon.",
			'de-de': "Lege 2 {R}-Energien von diesem Pokémon auf deinen Ablagestapel.",
			'es-es': "Descarta 2 Energías {R} de este Pokémon.",
			'pt-br': "Descarte 2 Energias {R} deste Pokémon.",
			'it-it': "Scarta due Energie {R} da questo Pokémon."
		}
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582177,
				tcgplayer: 253164
			}
		},
	],
}

export default card
