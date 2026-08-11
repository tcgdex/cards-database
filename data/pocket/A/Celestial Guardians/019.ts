import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Steenee",
		'fr-fr': "Candine",
		'es-es': "Steenee",
		'it-it': "Steenee",
		'de-de': "Frubaila",
		'pt-br': "Steenee",
		'ko-kr': "달무리나"
	},

	illustrator: "Mizue",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [762],
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Bounsweet"
	},

	description: {
		'en-us': "Steenee spreads a sweet scent that makes others feel invigorated. This same scent is popular for antiperspirants.",
		'fr-fr': "Il dégage un doux parfum qui a le pouvoir\nde redonner du tonus, et qui est très\npopulaire en odeur de déodorant.",
		'es-es': "Desprende un olor dulce que reanima a cualquiera\ny que es popular como aroma de desodorante.",
		'it-it': "Sparge attorno a sé un dolce profumo che può donare\nil buonumore e che è molto apprezzato nei deodoranti.",
		'de-de': "Es verströmt ein süßes Aroma, das für gute Laune sorgt\nund auch als Duftnote für Deodorants sehr beliebt ist.",
		'pt-br': "Steenee espalha um aroma doce que faz os outros\nse sentirem revigorados. Este mesmo aroma é popular\nem antitranspirantes.",
		'ko-kr': "기운이 솟을 것만 같은\n달콤한 향기를 흩뿌린다.\n땀 억제제의 향료로 인기가 좋다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Double Spin",
			'fr-fr': "Double Tour",
			'es-es': "Doble Giro",
			'it-it': "Doppioturbo",
			'de-de': "Doppeldreher",
			'pt-br': "Giro Duplo",
			'ko-kr': "더블스핀"
		},

		damage: "30x",
		cost: ["Grass"],

		effect: {
			'en-us': "Flip 2 coins. This attack does 30 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
			'it-it': "Lancia 2 volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 30 pontos de dano para cada cara.",
			'ko-kr': "동전을 2번 던져서 앞면이 나온 수 × 30데미지를 준다."
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
