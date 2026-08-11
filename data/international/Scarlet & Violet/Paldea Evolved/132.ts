import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [430],
	set: Set,

	name: {
		'fr-fr': "Corboss",
		'en-us': "Honchkrow",
		'es-es': "Honchkrow",
		'it-it': "Honchkrow",
		'pt-br': "Honchkrow",
		'de-de': "Kramshef"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	evolveFrom: {
		'fr-fr': "Cornèbre",
		'en-us': "Murkrow",
		'es-es': "Murkrow",
		'it-it': "Murkrow",
		'pt-br': "Murkrow",
		'de-de': "Kramurx"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'fr-fr': "Battement",
			'en-us': "Flap",
			'es-es': "Aleteo",
			'it-it': "Alabattito",
			'pt-br': "Asa",
			'de-de': "Flattern"
		},

		damage: 30
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Vilain Lancer",
			'en-us': "Dirty Throw",
			'es-es': "Lanzamiento Injusto",
			'it-it': "Brutto Tiro",
			'pt-br': "Jogada Suja",
			'de-de': "Schmutziger Wurf"
		},

		effect: {
			'fr-fr': "Défaussez une carte de votre main. Si vous ne le pouvez pas, cette attaque ne fait rien.",
			'en-us': "Discard a card from your hand. If you can't, this attack does nothing.",
			'es-es': "Descarta 1 carta de tu mano. Si no puedes, este ataque no hace nada.",
			'it-it': "Scarta una delle carte che hai in mano. Se non puoi, questo attacco non ha effetto.",
			'pt-br': "Descarte uma carta da sua mão. Se não puder fazer isto, este ataque não fará nada.",
			'de-de': "Lege 1 Karte aus deiner Hand auf deinen Ablagestapel. Wenn du das nicht machen kannst, hat diese Attacke keine Auswirkungen."
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Lightning",
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
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715607,
				tcgplayer: 497593,
				cardtrader: 248789
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715607,
				tcgplayer: 497593,
				cardtrader: 248789
			}
		},
	],

	illustrator: "Nisota Niso",

	description: {
		'en-us': "It is merciless by nature. It is said that it never forgives the mistakes of its Murkrow followers.",
	},
}

export default card
