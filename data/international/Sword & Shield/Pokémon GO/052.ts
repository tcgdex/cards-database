import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [242],
	set: Set,

	name: {
		'en-us': "Blissey",
		'fr-fr': "Leuphorie",
		'es-es': "Blissey",
		'it-it': "Blissey",
		'pt-br': "Blissey",
		'de-de': "Heiteira"
	},

	illustrator: "Teeziro",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Chansey",
		'fr-fr': "Leveinard",
		'es-es': "Chansey",
		'it-it': "Chansey",
		'pt-br': "Chansey",
		'de-de': "Chaneira"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Enriching Egg",
			'fr-fr': "Œuf Fortifiant",
			'es-es': "Huevo Nutritivo",
			'it-it': "Uovo Nutriente",
			'pt-br': "Ovo Terapêutico",
			'de-de': "Anreicherndes Ei"
		},

		effect: {
			'en-us': "Heal all damage from 1 of your Benched Pokémon.",
			'fr-fr': "Soignez tous les dégâts de l'un de vos Pokémon de Banc.",
			'es-es': "Cura todos los puntos de daño a 1 de tus Pokémon en Banca.",
			'it-it': "Cura uno dei tuoi Pokémon in panchina da tutti i danni.",
			'pt-br': "Cure todo o dano de 1 dos seus Pokémon no Banco.",
			'de-de': "Heile allen Schaden bei 1 Pokémon auf deiner Bank."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Zen Headbutt",
			'fr-fr': "Psykoud'Boul",
			'es-es': "Cabezazo Zen",
			'it-it': "Cozzata Zen",
			'pt-br': "Cabeçada Zen",
			'de-de': "Zen-Kopfstoß"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "F",


	description: {
		'en-us': "Whenever a Blissey finds a weakened Pokémon, it will share its egg and offer its care until the other Pokémon is all better.",
	},



	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 665274,
				tcgplayer: 276967
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665274,
				tcgplayer: 276967
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 669498,
				tcgplayer: 279929
			}
		},
	],
}

export default card
