import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Slurpuff",
		'fr-fr': "Cupcanaille",
		'es-es': "Slurpuff",
		'it-it': "Slurpuff",
		'pt-br': "Slurpuff",
		'de-de': "Sabbaione"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		685,
	],

	hp: 110,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Swirlix",
		'fr-fr': "Sucroquin",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Olfactory Enchantment",
				'fr-fr': "Enchantement Olfactif",
				'es-es': "Hechizo Olfativo",
				'it-it': "Incanto Olfattivo",
				'pt-br': "Encantamento Olfativo",
				'de-de': "Zauberduft"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Sweet Panic",
				'fr-fr': "Douce Panique",
				'es-es': "Dulce Pánico",
				'it-it': "Dolce Panico",
				'pt-br': "Doce Desespero",
				'de-de': "Süße Panik"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon isn’t Confused, this attack does nothing.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire n’est pas Confus, cette attaque ne fait rien.",
				'es-es': "Si el Pokémon Activo de tu rival no está Confundido, este ataque no hace nada.",
				'it-it': "Se il Pokémon attivo del tuo avversario non è confuso, questo attacco non ha effetto.",
				'pt-br': "Se o Pokémon Ativo do seu oponente não estiver Confuso, este ataque não fará nada.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners nicht verwirrt ist, hat diese Attacke keine Auswirkungen."
			},
			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It can distinguish the faintest of scents. It puts its sensitive sense of smell to use by helping pastry chefs in their work.",
	},

	thirdParty: {
		cardmarket: 408414,
		tcgplayer: 201202
	}
}

export default card
