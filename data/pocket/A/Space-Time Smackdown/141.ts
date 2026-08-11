import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Chatot",
		'fr-fr': "Pijako",
		'es-es': "Chatot",
		'it-it': "Chatot",
		'de-de': "Plaudagei",
		'pt-br': "Chatot",
		'ko-kr': "페라페"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [441],
	hp: 70,
	types: ["Colorless"],

	description: {
		'en-us': "It mimics the cries of other Pokémon to trick them into thinking it's one of them. This way they won't attack it.",
		'fr-fr': "Il reproduit le cri de ses ennemis pour faire\ncroire qu'il est des leurs et éviter d'être attaqué.",
		'es-es': "Imita los sonidos de sus rivales, haciéndoles creer\nque son amigos e impidiendo que le ataquen.",
		'it-it': "Imita la voce dei nemici per far credere che\nè dei loro, evitando così di essere assalito.",
		'de-de': "Es versucht Attacken zu entgehen, indem es den Ruf\ndes Gegners nachahmt und einen Artgenossen mimt.",
		'pt-br': "Imita os gritos dos outros Pokémon para levá-los a acreditar\nque é um deles. Assim, eles não o atacam.",
		'ko-kr': "상대와 같은 울음소리를 내서\n동료라고 굳게 믿게 하여\n습격당하지 않도록 하고 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Fury Attack",
			'fr-fr': "Furie",
			'es-es': "Ataque Furia",
			'it-it': "Furia",
			'de-de': "Furienschlag",
			'pt-br': "Ataque de Fúria",
			'ko-kr': "마구찌르기"
		},

		damage: 20,
		cost: ["Colorless"],

		effect: {
			'en-us': "Flip 3 coins. This attack does 20 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
			'es-es': "Lanza 3 monedas. Este ataque hace 20 puntos de daño por cada cara.",
			'it-it': "Lancia 3 volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 20 pontos de dano para cada cara.",
			'ko-kr': "동전을 3번 던져서 앞면이 나온 수 × 20데미지를 준다."
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
