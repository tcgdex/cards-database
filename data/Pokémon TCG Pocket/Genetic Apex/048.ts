import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Heatmor",
		fr: "Aflamanoir",
		es: "Heatmor",
		it: "Heatmor",
		de: "Furnifraß",
		'pt-br': "Heatmor",
		ko: "앤티골"
	},

	illustrator: "Suwama Chiaki",
	category: "Pokemon",

	dexId: [631],
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Combustion",
			fr: "Fournaise",
			es: "Combustión",
			it: "Fuoco Continuo",
			de: "Glühen",
			'pt-br': "Combustão",
			ko: "화염"
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "There's a hole in its tail that allows it to draw in the air it needs to keep its fire burning. If the hole gets blocked, this Pokémon will fall ill.",
		fr: "Il aspire de l'air par le bout de sa queue\net produit ainsi sa fameuse langue de feu.\nSi on lui bouche la queue, il se sent mal.",
		es: "Absorbe aire por el orificio de la cola\npara prender las llamas que expulsa.\nSi la abertura se obstruye, enferma.",
		it: "Aspira aria dal foro nella coda per produrre delle\nfiamme. Se il foro viene tappato, inizia a sentirsi male.",
		de: "Es saugt über das Loch in seinem Schweif Luft für\nseine Flammen ein. Eine Verstopfung des Lochs\nschlägt Furnifraß sofort auf die Gesundheit.",
		'pt-br': "O buraco em sua cauda permite que absorva\no ar necessário para manter seu fogo aceso.\nSe o buraco for tampado, este Pokémon ficará doente.",
		ko: "꼬리의 구멍을 통해 공기를\n빨아들여 불꽃을 태운다.\n구멍이 막히면 상태가 나빠진다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
