import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Feraligatr",
		fr: "Aligatueur",
		de: "Impergator"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Rare PRIME",
	category: "Pokemon",
	set: Set,

	dexId: [
		160,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Croconaw",
		fr: "Crocodil",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Rain Dance",
				fr: "Danse pluie",
				de: "Regentanz"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may attach a Water Energy card from your hand to 1 of your Water Pokémon. This power can’t be used if Feraligatr is affected by a Special Condition.",
				fr: "Autant de fois que vous le souhaitez pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Water de votre main à l’un de vos Pokémon Water. Ce pouvoir ne peut pas être utilisé si Aligatueur est affecté par un État spécial.",
				de: "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 -Energiekarte von deiner Hand an 1 deiner -Pokémon anlegen. Diese Poké-Power kann nicht benutzt werden, wenn Impergator von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Hydro Crunch",
				fr: "Hydro-machouille",
				de: "Hydroknirscher"
			},
			effect: {
				en: "Does 60 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
				fr: "Inflige 60 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Défenseur.",
				de: "Dieser Angriff fügt 60 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf dem Verteidigenden Pokémon zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	suffix: "Prime",

	variants: [
		{
			type: "holo"
		}
	],

	thirdParty: {
		cardmarket: 278992,
		tcgplayer: 85420
	}
}

export default card
