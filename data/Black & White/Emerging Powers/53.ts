import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Gigalith",
		fr: "Gigalithe",
		es: "Gigalith",
		it: "Gigalith",
		pt: "Gigalith",
		de: "Brockoloss"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		526,
	],

	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Boldore",
		fr: "Géolithe",
		de: "Sedimantur"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Shear",
				fr: "Prospection",
				de: "Scherer"
			},
			effect: {
				en: "Discard the top 5 cards of your deck. If any of those cards are Fighting Energy cards, attach them to this Pokémon.",
				fr: "Défaussez les 5 cartes du dessus de votre deck. Si vous y trouvez des cartes Énergie Fighting, attachez-les à ce Pokémon.",
				de: "Lege die obersten 5 Karten deines Decks auf deinen Ablagestapel. Wenn darunter {F}-Energiekarten sind, lege sie an dieses Pokémon an."
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
				en: "Rock Bullet",
				fr: "Fronde",
				de: "Steinkugel"
			},
			effect: {
				en: "Does 20 more damage for each Fighting Energy attached to this Pokémon.",
				fr: "Inflige 20 dégâts supplémentaires pour chaque Énergie Fighting attachée à ce Pokémon.",
				de: "Dieser Angriff fügt 20 weitere Schadenspunkte für jede an dieses Pokémon angelegte {F}-Energie zu."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		en: "The solar energy absorbed by its body's orange crystals is magnified internally and fired from its mouth.",
		de: "Es absorbiert über seine orangefarbenen Kristalle das Sonnenlicht und schießt die so gewonnene Energie aus seinem Maul."
	},

	thirdParty: {
		cardmarket: 280018,
		tcgplayer: 85705
	}
}

export default card
