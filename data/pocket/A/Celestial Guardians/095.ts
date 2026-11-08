import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gurdurr",
		'fr-fr': "Ouvrifier",
		'es-es': "Gurdurr",
		'it-it': "Gurdurr",
		'de-de': "Strepoli",
		'pt-br': "Gurdurr",
		'ko-kr': "토쇠골"
	},

	illustrator: "Naoki Saito",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [533],
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Timburr"
	},

	description: {
		'en-us': "It shows off its muscles to Machoke and other Gurdurr. If it fails to measure up to the other Pokémon, it lies low for a little while.",
		'fr-fr': "Il participe à des concours de gonflette avec\nses congénères et les Machopeur. Le perdant ne\nse montre plus en public pendant quelque temps.",
		'es-es': "A menudo realiza competiciones de fuerza con\nsus congéneres y con los Machoke. El perdedor\ndebe pasar un tiempo sin dejarse ver.",
		'it-it': "Sfoggia i suoi muscoli facendo a gara con i suoi simili e con\nMachoke. Chi perde sparisce dalla circolazione per un po'.",
		'de-de': "Strepoli und Maschock treffen sich regelmäßig\nzum Muskelvergleich. Wer schlecht abschneidet,\nlässt sich danach eine Weile nicht mehr blicken.",
		'pt-br': "Exibe seus músculos para Machoke e outros Gurdurr.\nSe não conseguir ficar à altura de outros Pokémon,\nsome por um tempo.",
		'ko-kr': "동료나 근육몬과 서로\n근육을 자랑한다. 진 쪽은\n당분간 모습을 감춘다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Strength",
			'fr-fr': "Force",
			'es-es': "Fuerza",
			'it-it': "Forza",
			'de-de': "Stärke",
			'pt-br': "Força",
			'ko-kr': "괴력"
		},

		damage: 40,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lunala"]
}

export default card