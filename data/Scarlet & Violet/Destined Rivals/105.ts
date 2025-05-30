import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Greavard",
		fr: "Toutombe",
		de: "Gruff",
		it: "Greavard",
		es: "Greavard",
		pt: "Greavard"
	},

	illustrator: "Shin Nagasawa",
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
			de: "Spaziergang in der Unterwelt",
			it: "Passeggiata Sottomondo",
			es: "Paseo por el Inframundo",
			pt: "Passeio no Submundo"
		},

		effect: {
			en: "Your opponent reveals their hand. Choose a Supporter card you find there and put it on the bottom of their deck.",
			fr: "Votre adversaire montre sa main. Choisissez-y une carte Supporter, puis placez-la en dessous de son deck.",
			de: "Dein Gegner zeigt dir seine Handkarten. Wähle 1 Unterstützerkarte, die du dort findest, und lege sie unter sein Deck.",
			it: "Il tuo avversario mostra le carte che ha in mano. Scegli una carta Aiuto presente tra esse e mettila in fondo al suo mazzo.",
			es: "Tu rival enseña las cartas de su mano. Elige 1 carta de Partidario que encuentres entre ellas y ponla en la parte inferior de su baraja.",
			pt: "Seu oponente revela a mão dele. Escolha uma carta de Apoiador que encontrar lá e coloque-a como a carta de baixo do baralho dele."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Sharp Fang",
			fr: "Croc Aiguisé",
			de: "Scharfe Fänge",
			it: "Zannaffilata",
			es: "Colmillo Afilado",
			pt: "Presa Afiada"
		},

		damage: 30
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card