import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Victreebel",
		fr: "Empiflor",
		de: "Sarzenia"
	},

	illustrator: "Midori Harada",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		71,
	],

	hp: 110,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Weepinbell",
		fr: "Boustiflor",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Tangling Tendrils",
				fr: "Enchevêtrement végétal",
				de: "Wirrranken"
			},
			effect: {
				en: "As long as Victreebel is your Active Pokémon, your opponent’s Active Pokémon’s Retreat Cost is ColorlessColorless more.",
				fr: "Tant qu’Empiflor est votre Pokémon Actif, le Coût de retraite du Pokémon Actif de votre adversaire est augmenté de ColorlessColorless.",
				de: "Solange Sarzenia dein Aktives Pokémon ist, betragen die Rückzugskosten für das Aktive Pokémon deines Gegners 2  mehr."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Acidic Drain",
				fr: "Ponction acide",
				de: "Säuresauger"
			},
			effect: {
				en: "The Defending Pokémon is now Burned and Poisoned. Remove 3 damage counters from Victreebel.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé et Empoisonné. Retirez 3 marqueurs de dégât à Empiflor.",
				de: "Das Verteidigende Pokémon ist jetzt verbrannt und vergiftet. Entferne 3 Schadensmarken von Sarzenia."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "Acid that has dissolved many prey becomes sweeter, making it even more effective at attracting prey."
	},

	variants: [
		{ type: 'holo', size: 'standard' }
	],

	thirdParty: {
		cardmarket: 279542,
		tcgplayer: 90365
	}
}

export default card
