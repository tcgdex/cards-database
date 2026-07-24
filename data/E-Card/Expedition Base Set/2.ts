import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Arcanine",
		fr: "Pharamp",
		de: "Ampharos"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [59],

	hp: 90,

	types: [
		"Fire"
	],

	evolveFrom: {
		en: "Flaaffy",
		fr: "Lainergie"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Extreme Speed",
				fr: "Connexion d'énergie",
				de: "Energieverknüpfung"
			},
			effect: {
				en: "You pay Colorless less to retreat Arcanine for each Energy attached to it.",
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
				en: "Fire Blow",
				fr: "Frap'éclair",
				de: "Blitzschlag"
			},

			effect: {
				en: "You may discard any number of Fire Energy cards attached to Arcanine when you use this attack. If you do, flip a number of coins equal to the number of Fire Energy cards you discarded. This attack does 30 damage plus 30 more damage for each heads.",
				fr: "Vous pouvez vous défausser de toutes les cartes Énergie  attachées à Pharamp. Si vous faites ainsi, cette attaque inflige 80 dégâts de base au lieu de 40.",
				de: "Du kannst alle -Energiekarten, die an Ampharos angelegt sind, auf deinen Ablagestapel legen. Falls du dies tust, ist der Basisschaden dieses Angriffs 80 anstatt 40."
			},

			damage: "30+",
		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 3,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83538,
				cardmarket: 274877
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
