import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Alolan Geodude",
		'fr-fr': "Racaillou d’Alola",
		'es-es': "Geodude de Alola",
		'it-it': "Geodude di Alola",
		'pt-br': "Geodude de Alola",
		'de-de': "Alola-Kleinstein"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		74,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Rock Polish",
				'fr-fr': "Poliroche",
				'es-es': "Pulimento",
				'it-it': "Lucidatura",
				'pt-br': "Polidor de Rocha",
				'de-de': "Steinpolitur"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon has no Retreat Cost.",
				'fr-fr': "Pendant votre prochain tour, ce Pokémon n’a pas de Coût de Retraite.",
				'es-es': "Durante tu próximo turno, este Pokémon no tiene ningún Coste de Retirada.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non ha costo di ritirata.",
				'pt-br': "Durante a sua próxima vez de jogar, este Pokémon não terá custo de Recuo.",
				'de-de': "Während deines nächsten Zuges hat dieses Pokémon keine Rückzugskosten."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rollout",
				'fr-fr': "Roulade",
				'es-es': "Desenrollar",
				'it-it': "Rotolamento",
				'pt-br': "Rolagem",
				'de-de': "Walzer"
			},

			damage: 40,

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

	retreat: 2,

	description: {
		'en-us': "Its body is a magnetic stone. Iron sand attaches firmly to the portions of its body that are particularly magnetic.",
	},

	thirdParty: {
		cardmarket: 297502,
		tcgplayer: 130942
	}
}

export default card
