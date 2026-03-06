import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Porygon2",
		fr: "Porygon2",
		de: "Porygon2"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		233,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Porygon",
		fr: "Porygon"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Backup",
				fr: "Sauvegarde",
				de: "Unterstützung"
			},
			effect: {
				en: "Once during your turn (before your attack), if you have 2 or fewer cards in your hand, you may draw cards until you have exactly 3 cards in your hand. This power can't be used if Porygon2 is affected by a Special Condition.",
				fr: "Une seule fois pendant chacun de vos tours (avant votre attaque), si vous avez au maximum 2 cartes dans votre main, vous pouvez piocher des cartes de votre deck jusqu'à ce que vous ayez 3 cartes dans votre main. Ce pouvoir ne peut pas être utilisé si Porygon2 est affecté par un État spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn du 2 oder weniger Karten auf deiner Hand hast, so viele Karten von deinem Deck ziehen, bis du 3 Karten auf deiner Hand hast. Diese Fähigkeit kann nicht verwendet werden, falls Porygon2 von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hypnotic Ray",
				fr: "Onde hypnotique",
				de: "Hypnotischer Strahl"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275100,
		tcgplayer: 88323
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card
