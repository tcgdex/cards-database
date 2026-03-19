import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Metagross",
		fr: "Metalosse",
		de: "Metagross"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		376,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Metang",
		fr: "Metang"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Super Connectivity",
				fr: "Super connection",
				de: "Super Connectivity"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your discard pile for a Psychic or Metal Energy card and attach it to your Active Pokémon. Then, put 1 damage counter on that Pokémon. This power can't be used if Metagross is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre pile de défausse une carte Énergie  ou  et l'attacher à votre Pokémon Actif. Placez alors un marqueur de dégât sur ce Pokémon. Ce pouvoir ne peut pas être utilisé si Metalosse est affecté par un État Spécial.",
				de: "Once during your turn (before your attack), you may search your discard pile for a  or  Energy card and attach it to your Active Pokémon. Then, put 1 damage counter on that Pokémon. This power can't be used if Metagross is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Link Blast",
				fr: "Explosion en série",
				de: "Link Blast"
			},
			effect: {
				en: "If Metagross and the Defending Pokémon have a different amount of Energy attached to them, this attack's base damage is 40 instead of 70.",
				fr: "Si Metalosse et le Pokémon Défenseur ont un total d'Énergie différent, les dégâts de base de cette attaque sont de 40 et non de 70.",
				de: "If Metagross and the Defending Pokémon have a different amount of Energy attached to them, this attack's base damage is 40 instead of 70."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 2,

	thirdParty: {
		tcgplayer: 87337,
		cardmarket: 276414
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
