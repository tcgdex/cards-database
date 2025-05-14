import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Lurantis",
		fr: "Floramantis",
		es: "Lurantis",
		it: "Lurantis",
		de: "Mantidea",
		'pt-br': "Lurantis",
		ko: "라란티스"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Fomantis"
	},

	description: {
		en: "By masquerading as a bug Pokémon, it lowers the guard of actual bug Pokémon lured in by a scent of sweet flowers. Its sickles bring them down.",
		fr: "Floramantis attire les Pokémon Insecte grâce à\nson doux parfum floral et se fait passer pour l'un\nd'eux. Il les élimine ensuite à l'aide de ses faux.",
		es: "Si los Pokémon de tipo Bicho se acercan atraídos\npor el aroma de las flores, finge ser uno más para\nque no desconfíen y los ataca con sus guadañas.",
		it: "Sfrutta il suo dolce profumo floreale per attrarre\ni Pokémon Coleottero e li inganna fingendosi uno\ndi loro. Dopodiché, li abbatte con le sue falci.",
		de: "Es täuscht die von süßem Blumenduft angelockten\nKäfer-Pokémon, indem es sich als eines von ihnen\nausgibt, und erlegt sie dann mit seinen Sicheln.",
		'pt-br': "Ao se passar por um Pokémon inseto, baixa a guarda\ndos verdadeiros Pokémon inseto atraídos pelo aroma\ndoce das flores. Suas foices são aniquiladoras.",
		ko: "꽃의 달콤한 향기에 이끌려 찾아온\n벌레포켓몬을 동료인 척 방심시키고는\n낫으로 마무리한다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Petal Blizzard",
			fr: "Tempête Florale",
			es: "Tormenta Floral",
			it: "Fiortempesta",
			de: "Blütenwirbel",
			'pt-br': "Nevasca de Pétalas",
			ko: "꽃보라"
		},

		cost: ["Grass"],

		effect: {
			en: "This attack does 20 damage to each of your opponent's Pokémon.",
			fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire.",
			es: "Este ataque hace 20 puntos de daño a cada uno de los Pokémon de tu rival.",
			it: "Questo attacco infligge 20 danni a ciascuno dei Pokémon del tuo avversario.",
			de: "Diese Attacke fügt jedem Pokémon deines Gegners 20 Schadenspunkte zu.",
			'pt-br': "Este ataque causa 20 pontos de dano a cada um dos Pokémon do seu oponente.",
			ko: "상대의 포켓몬 전원에게 20데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card