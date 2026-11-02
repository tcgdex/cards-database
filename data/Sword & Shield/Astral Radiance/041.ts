import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [501],
	set: Set,

	name: {
		en: "Oshawott",
		fr: "Moustillon",
		es: "Oshawott",
		it: "Oshawott",
		pt: "Oshawott",
		de: "Ottaro"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
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
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		en: "This Pokémon from the Unova region uses the shell on its belly as a weapon to cut down its foes. Thus, I've conferred upon this shell the name \"scalchop.\".",
		de: "Es stammt aus Einall und setzt die Muschel an seinem Bauch ein um Feinde im Kampf damit aufzuschlitzen. Ich würde diese Waffe folglich auf den Namen \"Muschelklinge\" taufen."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658578,
				tcgplayer: 272241
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658578,
				tcgplayer: 272241
			}
		},
	],
}

export default card
