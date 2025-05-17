import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Golett",
		fr: "Gringolem",
		es: "Golett",
		it: "Golett",
		de: "Golbit",
		'pt-br': "Golett",
		ko: "골비람"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Mega Punch",
			fr: "Ultimapoing",
			es: "Megapuño",
			it: "Megapugno",
			de: "Megahieb",
			'pt-br': "Megassoco",
			ko: "메가톤펀치"
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
		en: "They were sculpted from clay in ancient times. No one knows why, but some of them are driven to continually line up boulders.",
		fr: "Ce Pokémon très ancien a été façonné avec\nde l'argile. On ne sait pourquoi certains spécimens\nn'ont de cesse d'aligner de grosses pierres.",
		es: "Un antiguo Pokémon creado a partir del barro.\nSe desconoce el motivo por el que algunos\nejemplares colocan rocas grandes en hileras.",
		it: "È un Pokémon antico creato dall'argilla.\nNon si sa perché, ma ad alcuni esemplari\npiace creare file interminabili di grandi rocce.",
		de: "Sie bestehen aus Lehm und existieren schon sehr\nlange. Einige von ihnen haben den unerklärlichen\nDrang, große Felsen aneinanderzureihen.",
		'pt-br': "Antigamente, eram esculpidos de argila.\nNinguém sabe a razão, mas alguns deles\nsão determinados a alinhar rochas sem parar.",
		ko: "점토에서 만들어진 고대의\n포켓몬. 어째선지 큰 바위를\n늘어놓기만 하는 녀석도 있다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
