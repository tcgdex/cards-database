import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Greavard",
		fr: "Toutombe",
		es: "Greavard",
		it: "Greavard",
		pt: "Greavard",
		de: "Gruff"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Underworld Stroll",
			fr: "Balade dans l'Outre-Monde",
			es: "Paseo por el Inframundo",
			it: "Passeggiata Sottomondo",
			pt: "Passeio no Submundo",
			de: "Spaziergang in der Unterwelt"
		},

		effect: {
			en: "Your opponent reveals their hand. Choose a Supporter card you find there and put it on the bottom of their deck.",
			fr: "Votre adversaire montre sa main. Choisissez-y une carte Supporter, puis placez-la en dessous de son deck.",
			es: "Tu rival enseña las cartas de su mano. Elige 1 carta de Partidario que encuentres entre ellas y ponla en la parte inferior de su baraja.",
			it: "Il tuo avversario mostra le carte che ha in mano. Scegli una carta Aiuto presente tra esse e mettila in fondo al suo mazzo.",
			pt: "Seu oponente revela a mão dele. Escolha uma carta de Apoiador que encontrar lá e coloque-a como a carta de baixo do baralho dele.",
			de: "Dein Gegner zeigt dir seine Handkarten. Wähle 1 Unterstützerkarte, die du dort findest, und lege sie unter sein Deck."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Sharp Fang",
			fr: "Croc Aiguisé",
			es: "Colmillo Afilado",
			it: "Zannaffilata",
			pt: "Presa Afiada",
			de: "Scharfe Fänge"
		},

		damage: 30
	}],

	retreat: 3,
	regulationMark: "G",
	illustrator: "Shin Nagasawa",

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}]
}

export default card