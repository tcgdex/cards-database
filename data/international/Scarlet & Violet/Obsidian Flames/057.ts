import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [657],
	set: Set,

	name: {
		'fr-fr': "Croâporal",
		'en-us': "Frogadier",
		'es-es': "Frogadier",
		'it-it': "Frogadier",
		'pt-br': "Frogadier",
		'de-de': "Amphizel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	evolveFrom: {
		'fr-fr': "Grenousse",
		'en-us': "Froakie",
		'es-es': "Froakie",
		'it-it': "Froakie",
		'pt-br': "Froakie",
		'de-de': "Froxy"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			'fr-fr': "Bombarder",
			'en-us': "Strafe",
			'es-es': "Pasada de Ataque",
			'it-it': "Mitragliare",
			'pt-br': "Bombardear",
			'de-de': "Beharken"
		},

		effect: {
			'fr-fr': "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			'en-us': "You may switch this Pokémon with 1 of your Benched Pokémon.",
			'es-es': "Puedes cambiar este Pokémon por uno de tus Pokémon en Banca.",
			'it-it': "Puoi scambiare questo Pokémon con uno della tua panchina.",
			'pt-br': "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			'de-de': "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Its swiftness is unparalleled. It can scale a tower of more than 600 metres in a minute's time.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725137,
				tcgplayer: 509805,
				cardtrader: 255617
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 781858
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725137,
				tcgplayer: 509805,
				cardtrader: 255617
			}
		},
	],

	illustrator: "Tonji Matsuno",

	
}

export default card
