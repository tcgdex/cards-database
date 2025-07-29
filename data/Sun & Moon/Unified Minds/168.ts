import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Slakoth",
		fr: "Parecool",
		es: "Slakoth",
		it: "Slakoth",
		pt: "Slakoth",
		de: "Bummelz"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		287,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				es: "Arañazo",
				it: "Graffio",
				pt: "Arranhão",
				de: "Kratzer"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Boundless Power",
				fr: "Puissance Illimitée",
				es: "Poder Ilimitado",
				it: "Potere Incontenibile",
				pt: "Poder Ilimitado",
				de: "Unbegrenzte Kraft"
			},
			effect: {
				en: "This Pokémon can’t attack during your next turn.",
				fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				es: "Este Pokémon no puede atacar durante tu próximo turno.",
				it: "Questo Pokémon non può attaccare durante il tuo prossimo turno.",
				pt: "Este Pokémon não poderá atacar durante a sua próxima vez de jogar.",
				de: "Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 388622
	}
}

export default card
