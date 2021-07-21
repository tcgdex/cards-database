import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Boltund",
		fr: "Fulgudog",
		es: "Boltund",
		it: "Boltund",
		pt: "Boltund",
		de: "Bellektro"
	},

	illustrator: "chibi",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	evolveFrom: {
		en: "Yamper",
		fr: "Voltoutou"
	},

	attacks: [{
		name: {
			en: "Corner",
			fr: "Coinçage",
			es: "Arrinconar",
			it: "Trappola",
			pt: "Quina",
			de: "Bedrängen"
		},

		effect: {
			en: "During your opponent’s next turn, the Defending Pokémon can’t retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			en: "Defiant Spark",
			fr: "Étincelle Rebelle",
			es: "Chispa Desafiante",
			it: "Scintilla Ribelle",
			pt: "Fagulha Desafiadora",
			de: "Trotzfunke"
		},

		effect: {
			en: "If this Pokémon has any damage counters on it, this attack can be used for Lightning.",
			fr: "Si des marqueurs de dégâts sont placés sur ce Pokémon, cette attaque peut être utilisée pour Lightning.",
			es: "Si este Pokémon tiene algún contador de daño sobre él, este ataque se puede usar por 1 Energía Lightning.",
			it: "Se questo Pokémon ha dei segnalini danno, il costo di questo attacco è Lightning.",
			pt: "Se este Pokémon tiver algum contador de dano nele, este ataque poderá ser usado por Lightning.",
			de: "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, kann diese Attacke für Lightning eingesetzt werden."
		},

		damage: 130,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card