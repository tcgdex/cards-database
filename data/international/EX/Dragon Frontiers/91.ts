import { Card } from 'models/database/card'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		'en-us': "Dragonite ex δ",
		'fr-fr': "Dracolosse ex δ",
		'de-de': "Dragoran ex"
	},

	suffix: "ex",
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		149,
	],

	hp: 150,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Dragonair",
		'fr-fr': "Draco"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Deafen",
				'fr-fr': "Rendre sourd",
				'de-de': "Ohren betäuben"
			},
			effect: {
				'en-us': "Your opponent can't play any Trainer cards (except for Supporter cards) from his or her hand during your opponent's next turn.",
				'fr-fr': "Votre adversaire ne peut pas jouer de cartes Dresseur (cartes Supporter exceptées) de sa main lors de son prochain tour.",
				'de-de': "Im nächsten Zug deines Gegners kann dein Gegner keine Trainerkarten (außer Unterstützer-Karten) von der Hand spielen."
			},
			damage: 40,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Roar",
				'fr-fr': "Rugissement de dragon",
				'de-de': "Drachengebrüll"
			},
			effect: {
				'en-us': "Put 8 damage counters on the Defending Pokémon. If that Pokémon would be Knocked Out by this attack, you may put any damage counters not necessary to Knocked Out the Defending Pokémon on your opponent's Benched Pokémon in any way you like.",
				'fr-fr': "Placez 8 marqueurs de dégât sur le Pokémon Défenseur. Si ce Pokémon est mis K.O par cette attaque, placez les marqueurs de dégât restants sur les Pokémon de Banc de votre adversaire de la façon que vous voulez.",
				'de-de': "Lege 8 Schadensmarken auf das Verteidigende Pokémon. Wenn das Verteidigende Pokémon durch diesen Angriff kampfunfähig wird, lege die Schadensmarken, die nicht dazu benötigt wurden, das Verteidigende Pokémon kampfunfähig zu machen, in beliebiger Verteilung auf die Pokémon auf der Bank deines Gegners."
			},

		},
	],


	retreat: 2,

	thirdParty: {
		cardmarket: 277296
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
