import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Houndoom",
		fr: "Démolosse",
		es: "Houndoom",
		it: "Houndoom",
		pt: "Houndoom",
		de: "Hundemon"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		229,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Houndour",
		fr: "Malosse",
		de: "Hunduster"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dark Clamp",
				fr: "Pince des Ténèbres",
				de: "Dunkler Klammergriff"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Blazing Claws",
				fr: "Griffes Ardentes",
				de: "Sengende Pranken"
			},
			effect: {
				en: "If the Defending Pokémon is a Team Plasma Pokémon, this attack does 60 more damage, and the Defending Pokémon is now Burned.",
				fr: "Si le Pokémon Défenseur est un Pokémon de la Team Plasma, cette attaque inflige 60 dégâts supplémentaires et le Pokémon Défenseur est maintenant Brûlé.",
				de: "Wenn das Verteidigende Pokémon ein Team Plasma-Pokémon ist, fügt dieser Angriff 60 weitere Schadenspunkte zu und das Verteidigende Pokémon ist jetzt verbrannt."
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

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "The flames it breathes when angry contain toxins. If they cause a burn, it will hurt forever.",
		de: "Ist es wütend, spuckt es giftige Flammen. Die Schmerzen der Verbrennungen dauern ewig an."
	},

	thirdParty: {
		cardmarket: 281077,
		tcgplayer: 86213
	}
}

export default card
