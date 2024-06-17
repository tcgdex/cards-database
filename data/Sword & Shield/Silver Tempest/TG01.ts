import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [654],
	set: Set,

	name: {
		en: "Braixen",
		fr: "Roussil",
		es: "Braixen",
		it: "Braixen",
		pt: "Braixen",
		de: "Rutena"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	evolveFrom: {
		en: "Fennekin",
		fr: "Feunnec",
		es: "Fennekin",
		it: "Fennekin",
		pt: "Fennekin",
		de: "Fynx"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Combustion",
			fr: "Fournaise",
			es: "Combustión",
			it: "Fuoco Continuo",
			pt: "Combustão",
			de: "Glühen"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Flare Parade",
			fr: "Parade Flamboyante",
			es: "Desfile de Antorchas",
			it: "Corteo Fiammeggiante",
			pt: "Desfile de Labaredas",
			de: "Flammenparade"
		},

		effect: {
			en: "This attack does 60 damage for each Serena card in your discard pile.",
			fr: "Cette attaque inflige 60 dégâts pour chaque carte Serena dans votre pile de défausse.",
			es: "Este ataque hace 60 puntos de daño por cada carta de Serena en tu pila de descartes.",
			it: "Questo attacco infligge 60 danni per ogni carta Serena nella tua pila degli scarti.",
			pt: "Este ataque causa 60 pontos de dano para cada carta Serena na sua pilha de descarte.",
			de: "Diese Attacke fügt für jede Serena-Karte in deinem Ablagestapel 60 Schadenspunkte zu."
		},

		damage: "60×"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
