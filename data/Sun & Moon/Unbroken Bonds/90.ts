import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Cubone",
		fr: "Osselait",
		es: "Cubone",
		it: "Cubone",
		pt: "Cubone",
		de: "Tragosso"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		104,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Focus Energy",
				fr: "Puissance",
				es: "Foco Energía",
				it: "Focalenergia",
				pt: "Focalizar Energia",
				de: "Energiefokus"
			},
			effect: {
				en: "During your next turn, this Pokémon’s Beat attack’s base damage is 80.",
				fr: "Pendant votre prochain tour, les dégâts de base de l’attaque Bataille de ce Pokémon sont de 80.",
				es: "Durante tu próximo turno, el daño básico del ataque Toque de este Pokémon es de 80.",
				it: "Durante il tuo prossimo turno, i danni base dell’attacco Battuta di questo Pokémon sono 80.",
				pt: "Durante a sua próxima vez de jogar, o dano base do ataque Pulso deste Pokémon será 80.",
				de: "Während deines nächsten Zuges beträgt der Grundschaden der Attacke Verprügler dieses Pokémon 80 Schadenspunkte."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Beat",
				fr: "Bataille",
				es: "Toque",
				it: "Battuta",
				pt: "Pulso",
				de: "Verprügler"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 372381,
		tcgplayer: 189189
	}
}

export default card
