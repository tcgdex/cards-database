import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Exploud",
		fr: "Brouhabam",
		es: "Exploud",
		it: "Exploud",
		pt: "Exploud",
		de: "Krawumms"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		295,
	],

	hp: 140,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Loudred",
		fr: "Ramboum",
		de: "Krakeelo"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Destructive Sound",
				fr: "Son Destructeur",
				de: "Trümmerton"
			},
			effect: {
				en: "Your opponent reveals his or her hand. Discard all Item cards you find there.",
				fr: "Votre adversaire montre sa main. Défaussez toutes les cartes Objet que vous y trouvez.",
				de: "Dein Gegner deckt seine Handkarten auf. Lege alle Itemkarten, die du dort findest, auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Round",
				fr: "Chant Canon",
				de: "Kanon"
			},
			effect: {
				en: "Does 50 damage times the number of your Pokémon that have the Round attack.",
				fr: "Inflige 50 dégâts multipliés par le nombre de vos Pokémon possédant l'attaque Chant Canon.",
				de: "Dieser Angriff fügt 50 Schadenspunkte für jedes deiner Pokémon zu, das Kanon beherrscht."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		en: "Its howls can be heard over six miles away. It emits all sorts of noises from the ports on its body.",
		de: "Sein Heulen hört man in 10 km Entfernung. Es gibt alle Arten von Geräuschen von sich."
	},

	thirdParty: {
		cardmarket: 280847,
		tcgplayer: 85374
	}
}

export default card
