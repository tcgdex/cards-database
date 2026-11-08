import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [900],
	set: Set,

	name: {
		'en-us': "Kleavor V",
		'fr-fr': "Hachécateur V",
		'es-es': "Kleavor V",
		'it-it': "Kleavor V",
		'pt-br': "Kleavor V",
		'de-de': "Axantor V"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Cut",
			'fr-fr': "Coupe",
			'es-es': "Corte",
			'it-it': "Taglio",
			'pt-br': "Cortar",
			'de-de': "Zerschneider"
		},

		damage: 40
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Axe Slash",
			'fr-fr': "Hache Tranchante",
			'es-es': "Tajo Hacha",
			'it-it': "Lacerascure",
			'pt-br': "Machadada",
			'de-de': "Axthieb"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon. If you do, discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon. Dans ce cas, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'es-es': "Descarta 1 Energía de este Pokémon. Si lo haces, descarta 1 Energía del Pokémon Activo de tu rival.",
			'it-it': "Scarta un'Energia da questo Pokémon. Se lo fai, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Descarte 1 Energia deste Pokémon. Se fizer isto, descarte 1 Energia do Pokémon Ativo do seu oponente.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel. Wenn du das machst, lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658707,
				tcgplayer: 272288
			}
		},
	],
}

export default card
