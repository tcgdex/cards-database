import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Kangaskhan",
		fr: "Kangourex",
		es: "Kangaskhan",
		it: "Kangaskhan",
		de: "Kangama",
		'pt-br': "Kangaskhan",
		ko: "캥카"
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Dizzy Punch",
			fr: "Uppercut"
		},

		effect: {
			en: "Flip 2 coins. This attack does 30 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque côté face."
		},

		damage: "30×"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Three Diamond",

	description: {
		en: "Although it's carrying its baby in a pouch on its belly, Kangaskhan is swift on its feet. It intimidates its opponents with quick jabs.",
		fr: "Porter son petit dans sa poche ventrale ne\nl'empêche pas d'avoir un bon jeu de jambes.\nSes coups rapides intimident ses ennemis.",
		es: "Aunque lleve una cría en el marsupio, su\njuego de pies no pierde ligereza. Abruma\nal rival con ráfagas de ágiles puñetazos.",
		it: "Ha un agile gioco di gambe, nonostante si porti\nappresso il cucciolo nel marsupio ventrale.\nIntimidisce gli avversari con jab velocissimi.",
		de: "Obwohl es sein Junges im Beutel trägt, bewegt\nsich dieses Pokémon äußerst leichtfüßig. Gegner\nschreckt Kangama mit blitzschnellen Schlägen ab.",
		'pt-br': "Apesar de carregar seu bebê na bolsa em\nsua barriga, Kangaskhan é veloz. Intimida\nseus oponentes com golpes rápidos.",
		ko: "배의 주머니에 새끼가 있지만\n발놀림은 매우 가볍다.\n재빠른 잽으로 상대를 위협한다."
	}
}

export default card
