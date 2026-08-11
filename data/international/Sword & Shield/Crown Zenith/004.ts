import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [114],
	set: Set,

	name: {
		en: "Tangela",
		fr: "Saquedeneu",
		es: "Tangela",
		it: "Tangela",
		pt: "Tangela",
		de: "Tangela"
	},

	illustrator: "kurumitsu",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Beat",
			fr: "Bataille",
			es: "Toque",
			it: "Battuta",
			pt: "Pulso",
			de: "Verprügler"
		},

		damage: 10
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Vine Whip",
			fr: "Fouet Lianes",
			es: "Látigo Cepa",
			it: "Frustata",
			pt: "Chicote de Vinha",
			de: "Rankenhieb"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		en: "Hidden beneath a tangle of vines that grows nonstop even if the vines are torn off, this Pokémon's true appearance remains a mystery.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691721,
				tcgplayer: 478050
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691721,
				tcgplayer: 478050
			}
		},
	],
}

export default card
