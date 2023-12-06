import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Typhlosion",
		fr: "Typhlosion",
		de: "Tornupto"
	},

	illustrator: "Wataru Kawahara",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		157,
	],

	hp: 140,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Quilava",
		fr: "Fleurisson",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Afterburner",
				fr: "Combustion",
				de: "Schubverstärker"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your discard pile for a Fire Energy card and attach it to 1 of your Pokémon. If you do, put 1 damage counter on that Pokémon. This power can’t be used if Typhlosion is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher dans votre pile de défausse une carte Énergie Fire et l’attacher à l’un de vos Pokémon. Dans ce cas, ajoutez un marqueur de dégâts sur ce Pokémon. Ce pouvoir ne peut pas être utilisé si Typhlosion est affecté par un État spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du deinen Ablagestapel nach 1 -Energiekarte durchsuchen und sie an 1 deiner Pokémon anlegen. Wenn du das machst, lege 1 Schadensmarke auf dieses Pokémon. Diese Poké-Power kann nicht benutzt werden, wenn Tornupto von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flare Destroy",
				fr: "Éclatodestruction",
				de: "Flammenhacker"
			},
			effect: {
				en: "Discard an Energy card attached to Typhlosion and discard an Energy card attached to the Defending Pokémon.",
				fr: "Défaussez-vous d’une carte Énergie attachée à Typhlosion et d’une carte Énergie attachée au Pokémon Défenseur.",
				de: "Lege 1 an Tornupto angelegte Energiekarte und 1 an das Verteidigende Pokémon angelegte Energiekarte auf den jeweiligen Ablagestapel."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,
	suffix: "Prime",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
