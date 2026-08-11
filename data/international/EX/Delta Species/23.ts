import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Hypno",
		fr: "Hypnomade",
		de: "Hypno"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		97,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Drowzee",
		fr: "Soporifik"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Binding Aura",
				fr: "Aura enveloppante",
				de: "Fesselnde Aura"
			},
			effect: {
				en: "Your opponent can't play any Basic Pokémon or Evolution cards from his or her hand to evolve an Asleep Pokémon and can't attach any Energy cards from his or her hand to an Asleep Pokémon.",
				fr: "Votre adversaire ne peut pas jouer de Pokémon de base ou de cartes Évolution de sa main pour faire évoluer un Pokémon Endormi et ne peut pas attacher de cartes Énergie de sa main à un Pokémon Endormi.",
				de: "Dein Gegner kann keine Basis-Pokémon oder Entwicklungskarten von seiner Hand spielen, um ein schlafendes Pokémon zu entwickeln. Außerdem kann er keine Energiekarten von seiner Hand an ein schlafendes Pokémon anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sleep Inducer",
				fr: "Poussododo",
				de: "Schlafeinflößer"
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch. The new Defending Pokémon is now Asleep.",
				fr: "Échangez 1 des Pokémon de Banc de votre adversaire avec 1 des Pokémon Défenseurs. Votre adversaire choisit le Pokémon Défenseur à échanger. Le nouveau Pokémon Défenseur est maintenant Endormi.",
				de: "Tausche 1 Verteidigendes Pokémon gegen 1 der Pokémon auf der Bank deines Gegners aus. Dein Gegner wählt aus, welches Verteidigende Pokémon getauscht wird. Das neue Verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psyshot",
				fr: "Piqûre psy",
				de: "Psychoschuss"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 276786,
		tcgplayer: 86253
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

