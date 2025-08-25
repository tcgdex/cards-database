import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Alolan Geodude",
		fr: "Racaillou d’Alola",
		es: "Geodude de Alola",
		it: "Geodude di Alola",
		pt: "Geodude de Alola",
		de: "Alola-Kleinstein"
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
				en: "Rock Polish",
				fr: "Poliroche",
				es: "Pulimento",
				it: "Lucidatura",
				pt: "Polidor de Rocha",
				de: "Steinpolitur"
			},
			effect: {
				en: "During your next turn, this Pokémon has no Retreat Cost.",
				fr: "Pendant votre prochain tour, ce Pokémon n’a pas de Coût de Retraite.",
				es: "Durante tu próximo turno, este Pokémon no tiene ningún Coste de Retirada.",
				it: "Durante il tuo prossimo turno, questo Pokémon non ha costo di ritirata.",
				pt: "Durante a sua próxima vez de jogar, este Pokémon não terá custo de Recuo.",
				de: "Während deines nächsten Zuges hat dieses Pokémon keine Rückzugskosten."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
				es: "Desenrollar",
				it: "Rotolamento",
				pt: "Rolagem",
				de: "Walzer"
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

	thirdParty: {
		cardmarket: 297502,
		tcgplayer: 130942
	}
}

export default card
