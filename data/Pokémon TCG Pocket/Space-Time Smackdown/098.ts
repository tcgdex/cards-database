import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Sneasel",
		fr: "Farfuret",
		es: "Sneasel",
		it: "Sneasel",
		de: "Sniebel",
		'pt-br': "Sneasel",
		ko: "포푸니"
	},

	illustrator: "Hasuno",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [215],
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "This cunning Pokémon hides under the cover of darkness, waiting to attack its prey.",
		fr: "Ce Pokémon rusé se cache dans l'ombre\net attend patiemment de fondre sur sa proie.",
		es: "Este Pokémon es muy astuto. Se vale de la\noscuridad de la noche para atacar a su presa.",
		it: "Questo scaltro Pokémon si cela\nnell'oscurità per lanciarsi sulla preda.",
		de: "Dieses hinterlistige Pokémon nutzt den Schutz der\nDunkelheit, um ahnungsloser Beute aufzulauern.",
		'pt-br': "Este Pokémon astuto se esconde na escuridão,\nesperando para atacar sua presa.",
		ko: "눈에 띄지 않도록\n어둠 속에 숨어서 먹이를 습격하는\n매우 교활한 포켓몬이다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Double Scratch",
			fr: "Double Écorchure",
			es: "Arañazo Doble",
			it: "Doppio Graffio",
			de: "Doppelkratzer",
			'pt-br': "Arranhão Duplo",
			ko: "더블할퀴기"
		},

		damage: "20×",
		cost: ["Darkness"],

		effect: {
			en: "Flip 2 coins. This attack does 20 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
			it: "Lancia 2 volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 20 pontos de dano para cada cara.",
			ko: "동전을 2번 던져서 앞면이 나온 수 × 20데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["palkia"]
}

export default card
