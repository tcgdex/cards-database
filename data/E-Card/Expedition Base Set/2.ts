import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Ampharos",
		fr: "Pharamp",
		de: "Ampharos"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		181,
	],

	hp: 100,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Flaaffy",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energy Connect",
				fr: "Connexion d'énergie",
				de: "Energieverknüpfung"
			},
			effect: {
				en: "Once during your turn (before you attack), you make take one basic Energy cards attached to one of your Benched Pokémon and attach it to your Active Pokémon. This power can't be used if Ampharos is affected by a Special Condition.",
				fr: "Aussi souvent que vous le désirez pendant votre tour (avant votre attaque), vous pouvez prendre une carte Énergie de base attachée à l'un des Pokémon de votre Banc et l'attacher à votre Pokémon Actif. Ce pouvoir ne peut pas être utilisé si Pharamp est affecté par un État spécial.",
				de: "Du darft in deinem Zug so oft, wie du willst (vor deinem Angriff), eine Basis-Energiekarte, die an 1 deiner Pokémon auf der Bank angelegt ist, nehmen und an dein Aktives Pokémon anlegen. Diese Fähigkeit kann nicht verwendet werden, falls Ampharos von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Lightning Strike",
				fr: "Frap'éclair",
				de: "Blitzschlag"
			},

			effect: {
				en: "You may discard all Energy cards attached to Ampharos. If you do, this attack's base damage is 80 instead of 40.",
				fr: "Vous pouvez vous défausser de toutes les cartes Énergie  attachées à Pharamp. Si vous faites ainsi, cette attaque inflige 80 dégâts de base au lieu de 40.",
				de: "Du kannst alle -Energiekarten, die an Ampharos angelegt sind, auf deinen Ablagestapel legen. Falls du dies tust, ist der Basisschaden dieses Angriffs 80 anstatt 40."
			},

			damage: 40
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274877,
		tcgplayer: 83538
	}
}

export default card
