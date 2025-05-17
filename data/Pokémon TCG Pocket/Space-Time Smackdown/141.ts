import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Chatot",
		fr: "Pijako",
		es: "Chatot",
		it: "Chatot",
		de: "Plaudagei",
		'pt-br': "Chatot",
		ko: "페라페"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		en: "It mimics the cries of other Pokémon to trick them into thinking it's one of them. This way they won't attack it.",
		fr: "Il reproduit le cri de ses ennemis pour faire\ncroire qu'il est des leurs et éviter d'être attaqué.",
		es: "Imita los sonidos de sus rivales, haciéndoles creer\nque son amigos e impidiendo que le ataquen.",
		it: "Imita la voce dei nemici per far credere che\nè dei loro, evitando così di essere assalito.",
		de: "Es versucht Attacken zu entgehen, indem es den Ruf\ndes Gegners nachahmt und einen Artgenossen mimt.",
		'pt-br': "Imita os gritos dos outros Pokémon para levá-los a acreditar\nque é um deles. Assim, eles não o atacam.",
		ko: "상대와 같은 울음소리를 내서\n동료라고 굳게 믿게 하여\n습격당하지 않도록 하고 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Fury Attack",
			fr: "Furie",
			es: "Ataque Furia",
			it: "Furia",
			de: "Furienschlag",
			'pt-br': "Ataque de Fúria",
			ko: "마구찌르기"
		},

		damage: 20,
		cost: ["Colorless"],

		effect: {
			en: "Flip 3 coins. This attack does 20 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
			es: "Lanza 3 monedas. Este ataque hace 20 puntos de daño por cada cara.",
			it: "Lancia 3 volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
			de: "Wirf 3 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 20 pontos de dano para cada cara.",
			ko: "동전을 3번 던져서 앞면이 나온 수 × 20데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["palkia"]
}

export default card
