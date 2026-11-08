import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [788],
	set: Set,

	name: {
		'en-us': "Tapu Fini",
		'fr-fr': "Tokopisco",
		'es-es': "Tapu Fini",
		'it-it': "Tapu Fini",
		'pt-br': "Tapu Fini",
		'de-de': "Kapu-Kime"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	attacks: [{
		name: {
			'en-us': "Smash Turn",
			'fr-fr': "Tour Fracassant",
			'es-es': "Golpe Giro",
			'it-it': "Girata Distruttiva",
			'pt-br': "Virada Esmagadora",
			'de-de': "Abdrehender Schmetterer"
		},

		effect: {
			'en-us': "You may switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
			'it-it': "Puoi scambiare questo Pokémon con uno della tua panchina.",
			'pt-br': "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			'de-de': "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
		},

		damage: 30,
		cost: ["Water"]
	}, {
		name: {
			'en-us': "Ocean Loop",
			'fr-fr': "Boucle Océanique",
			'es-es': "Bucle Oceánico",
			'it-it': "Circuito Oceanico",
			'pt-br': "Loop Oceânico",
			'de-de': "Meereskreislauf"
		},

		effect: {
			'en-us': "Put an Energy attached to this Pokémon into your hand.",
			'fr-fr': "Ajoutez à votre main une Énergie attachée à ce Pokémon.",
			'es-es': "Pon 1 Energía unida a este Pokémon en tu mano.",
			'it-it': "Prendi un'Energia assegnata a questo Pokémon e aggiungila alle carte che hai in mano.",
			'pt-br': "Coloque 1 Energia ligada a este Pokémon na sua mão.",
			'de-de': "Nimm 1 an dieses Pokémon angelegte Energie auf deine Hand."
		},

		damage: 120,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "Although it's called a guardian deity, terrible calamities sometimes befall those who recklessly approach Tapu Fini."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567120,
				tcgplayer: 241693
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567120,
				tcgplayer: 241693
			}
		},
	],
}

export default card
