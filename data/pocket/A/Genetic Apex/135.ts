import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Golett",
		'fr-fr': "Gringolem",
		'es-es': "Golett",
		'it-it': "Golett",
		'de-de': "Golbit",
		'pt-br': "Golett",
		'ko-kr': "골비람"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",

	dexId: [622],
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Mega Punch",
			'fr-fr': "Ultimapoing",
			'es-es': "Megapuño",
			'it-it': "Megapugno",
			'de-de': "Megahieb",
			'pt-br': "Megassoco",
			'ko-kr': "메가톤펀치"
		},

		damage: "50"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 3,
	rarity: "One Diamond",

	description: {
		'en-us': "They were sculpted from clay in ancient times. No one knows why, but some of them are driven to continually line up boulders.",
		'fr-fr': "Ce Pokémon très ancien a été façonné avec\nde l'argile. On ne sait pourquoi certains spécimens\nn'ont de cesse d'aligner de grosses pierres.",
		'es-es': "Un antiguo Pokémon creado a partir del barro.\nSe desconoce el motivo por el que algunos\nejemplares colocan rocas grandes en hileras.",
		'it-it': "È un Pokémon antico creato dall'argilla.\nNon si sa perché, ma ad alcuni esemplari\npiace creare file interminabili di grandi rocce.",
		'de-de': "Sie bestehen aus Lehm und existieren schon sehr\nlange. Einige von ihnen haben den unerklärlichen\nDrang, große Felsen aneinanderzureihen.",
		'pt-br': "Antigamente, eram esculpidos de argila.\nNinguém sabe a razão, mas alguns deles\nsão determinados a alinhar rochas sem parar.",
		'ko-kr': "점토에서 만들어진 고대의\n포켓몬. 어째선지 큰 바위를\n늘어놓기만 하는 녀석도 있다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
