import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Conkeldurr",
		fr: "Bétochef",
		es: "Conkeldurr",
		it: "Conkeldurr",
		pt: "Conkeldurr",
		de: "Meistagrif"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		534,
	],

	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Gurdurr",
		fr: "Ouvrifier",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Craftsmanship",
				fr: "Maître d’Œuvre",
				es: "Maestro de Obras",
				it: "Maestria",
				pt: "Manufatura",
				de: "Handwerkskunst"
			},
			effect: {
				en: "This Pokémon gets +20 HP for each Fighting Energy attached to it.",
				fr: "Chaque Énergie Fighting attachée à ce Pokémon lui ajoute 20 PV.",
				es: "Este Pokémon obtiene 20 PV más por cada Energía Fighting unida a él.",
				it: "Questo Pokémon ha 20 PV in più per ogni Energia Fighting assegnatagli.",
				pt: "Este Pokémon recebe mais 20 PS para cada Energia Fighting ligada a ele.",
				de: "Dieses Pokémon erhält +20 KP für jede an es angelegte Fighting-Energie."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Top Down",
				fr: "Écras'Montagne",
			},
			effect: {
				en: "Flip a coin until you get tails. For each heads, discard the top card of your opponent's deck.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Pour chaque côté face, défaussez la carte du dessus du deck de votre adversaire.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 280187,
		tcgplayer: 84418
	}
}

export default card
