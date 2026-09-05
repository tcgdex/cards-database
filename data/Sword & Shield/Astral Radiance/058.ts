import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [200],
	set: Set,
	cameoDexIds: [110],

	name: {
		en: "Misdreavus",
		fr: "Feuforêve",
		es: "Misdreavus",
		it: "Misdreavus",
		pt: "Misdreavus",
		de: "Traunfugil"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Mumble",
			fr: "Murmure",
			es: "Farfullar",
			it: "Borbottio",
			pt: "Resmungo",
			de: "Grummeln"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		en: "It conceals itself in darkness, sending chills up travelers' spines with its childlike weeping. As it observes the frightened travelers with glee, the red orbs upon its chest let off an eerie light.",
		de: "Es versteckt sich im Dunkeln und erschreckt Reisende mit seinem kindlichen Geheul. Deren verängstigtes Antlitz bringt ihm Freude und lässt die roten Kugeln an seinem Hals unheilvoll aufleuchten."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658625,
				tcgplayer: 272259
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658625,
				tcgplayer: 272259
			}
		},
	],
}

export default card
