import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Simisear",
		fr: "Flamoutan",
		es: "Simisear",
		it: "Simisear",
		pt: "Simisear",
		de: "Grillchita"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		514,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Pansear",
		fr: "Flamajou",
		de: "Grillmak"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Collect",
				fr: "Collecte",
				de: "Sammeln"
			},
			effect: {
				en: "Draw 3 cards.",
				fr: "Piochez 3 cartes.",
				de: "Ziehe 3 Karten."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Stadium Burn",
				fr: "Stade en Flammes",
				de: "Stadionbrand"
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 30 more damage and the Defending Pokémon is now Burned.",
				fr: "S'il y a une carte Stade en jeu, cette attaque inflige 30 dégâts supplémentaires et le Pokémon Défenseur est maintenant Brûlé.",
				de: "Wenn eine Stadionkarte im Spiel ist, fügt dieser Angriff 30 weitere Schadenspunkte zu und das Verteidigende Pokémon ist jetzt verbrannt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It loves sweets because they become energy for the fire burning inside its body.",
		de: "Am liebsten isst es Süßigkeiten. Es wandelt sie in Energie um, mit der es das Feuer in seinem Körper schürt."
	},

	thirdParty: {
		cardmarket: 280241,
		tcgplayer: 89228
	}
}

export default card
