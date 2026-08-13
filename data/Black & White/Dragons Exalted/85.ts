import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Rayquaza-EX",
		fr: "Rayquaza-EX",
		es: "Rayquaza-EX",
		it: "Rayquaza-EX",
		pt: "Rayquaza-EX",
		de: "Rayquaza-EX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		384,
	],
	hp: 170,
	types: [
		"Dragon",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Celestial Roar",
				fr: "Cri du Ciel",
				de: "Himmelsgrollen"
			},
			effect: {
				en: "Discard the top 3 cards of your deck. If any of those cards are Energy cards, attach them to this Pokémon.",
				fr: "Défaussez les 3 cartes du dessus de votre deck. Si vous y trouvez des cartes Énergie, attachez-les à ce Pokémon.",
				de: "Lege die obersten 3 Karten deines Decks auf deinen Ablagestapel. Wenn darunter Energiekarten sind, lege sie an dieses Pokémon an."
			},

		},
		{
			cost: [
				"Fire",
				"Lightning",
			],
			name: {
				en: "Dragon Burst",
				fr: "Fureur du Dragon",
				de: "Drachensalve"
			},
			effect: {
				en: "Discard all basic Fire Energy or all basic Lightning Energy attached to this Pokémon. This attack does 60 damage times the number of Energy cards you discarded.",
				fr: "Défaussez toutes les Énergies Fire de base ou toutes les Énergies Lightning de base attachées à ce Pokémon. Cette attaque inflige 60 dégâts multipliés par le nombre de cartes Énergie que vous avez défaussées.",
				de: "Lege alle an dieses Pokémon angelegten {R}-Basis-Energien oder {L}-Basis-Energien auf deinen Ablagestapel. Dieser Angriff fügt 60 Schadenspunkte mal der Anzahl abgelegter Energiekarten zu."
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
