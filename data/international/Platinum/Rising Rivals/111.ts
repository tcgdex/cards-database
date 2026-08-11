import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Snorlax LV.X",
		'fr-fr': "Ronflex Niv. X",
		'de-de': "Relaxo"
	},

	illustrator: "Shizurow",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",
	set: Set,

	dexId: [143],

	hp: 130,

	types: [
		"Colorless"
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Big Appetite",
				'fr-fr': "Gros appétit",
				'de-de': "Großer Hunger"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if Snorlax is your Active Pokémon, you may draw cards until you have 6 cards in your hand. If you do, Snorlax is now Asleep. This power can't be used if Snorlax is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), si Ronflex est votre Pokémon Actif, vous pouvez piocher des cartes jusqu'à ce que vous ayez 6 cartes en main. Ronflex est alors maintenant Endormi. Ce pouvoir ne peut pas être utilisé si Ronflex est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn Relaxo dein Aktives Pokémon ist, so viele Karten ziehen, bis du 6 Karten auf der Hand hast. Wenn du das machst, schläft Relaxo jetzt. Diese Poké-Power kann nicht benutzt werden, wenn Relaxo von einem Speziellen Zustand betroffen ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Exercise",
				'fr-fr': "Exercise",
				'de-de': "Leibesübung"
			},
			effect: {
				'en-us': "You may discard as many Energy cards as you like from your hand. If you do, remove that many damage counters from Snorlax.",
				'fr-fr': "Vous pouvez défausser de votre main autant de cartes Énergie que vous le voulez. Retirez alors à Ronflex autant de marqueurs de dégât.",
				'de-de': "Du kannst beliebig viele Energiekarten von deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, entferne die gleiche Anzahl Schadensmarken von Relaxo."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 4,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278685,
				tcgplayer: 89397
			}
		},
	],

}

export default card
