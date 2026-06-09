import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Steenee",
		fr: "Candine",
		es: "Steenee",
		it: "Steenee",
		de: "Frubaila",
		'pt-br': "Steenee",
		ko: "달무리나"
	},

	illustrator: "Mizue",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [762],
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Bounsweet"
	},

	description: {
		en: "Steenee spreads a sweet scent that makes others feel invigorated. This same scent is popular for antiperspirants.",
		fr: "Il dégage un doux parfum qui a le pouvoir\nde redonner du tonus, et qui est très\npopulaire en odeur de déodorant.",
		es: "Desprende un olor dulce que reanima a cualquiera\ny que es popular como aroma de desodorante.",
		it: "Sparge attorno a sé un dolce profumo che può donare\nil buonumore e che è molto apprezzato nei deodoranti.",
		de: "Es verströmt ein süßes Aroma, das für gute Laune sorgt\nund auch als Duftnote für Deodorants sehr beliebt ist.",
		'pt-br': "Steenee espalha um aroma doce que faz os outros\nse sentirem revigorados. Este mesmo aroma é popular\nem antitranspirantes.",
		ko: "기운이 솟을 것만 같은\n달콤한 향기를 흩뿌린다.\n땀 억제제의 향료로 인기가 좋다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Double Spin",
			fr: "Double Tour",
			es: "Doble Giro",
			it: "Doppioturbo",
			de: "Doppeldreher",
			'pt-br': "Giro Duplo",
			ko: "더블스핀"
		},

		damage: "30x",
		cost: ["Grass"],

		effect: {
			en: "Flip 2 coins. This attack does 30 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
			it: "Lancia 2 volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 30 pontos de dano para cada cara.",
			ko: "동전을 2번 던져서 앞면이 나온 수 × 30데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo"]
}

export default card
