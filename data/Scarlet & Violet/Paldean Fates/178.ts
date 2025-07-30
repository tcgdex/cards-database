import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Garganacl",
		fr: "Gigansel",
		es: "Garganacl",
		it: "Garganacl",
		pt: "Garganacl",
		de: "Saltigant"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Blessed Salt",
			fr: "Sel Bienfaisant",
			es: "Sal Bendita",
			it: "Sale Gradito",
			pt: "Sal Abençoado",
			de: "Gesegnetes Salz"
		},

		effect: {
			en: "During Pokémon Checkup, heal 20 damage from each of your Pokémon.",
			fr: "Pendant le Contrôle Pokémon, soignez 20 dégâts de chacun de vos Pokémon.",
			es: "Durante el Chequeo Pokémon, cura 20 puntos de daño a cada uno de tus Pokémon.",
			it: "Durante il controllo Pokémon, cura ciascuno dei tuoi Pokémon da 20 danni.",
			pt: "Durante o Checape Pokémon, cure 20 pontos de dano de cada um dos seus Pokémon.",
			de: "Heile beim Pokémon-Check 20 Schadenspunkte bei jedem deiner Pokémon."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Knocking Hammer",
			fr: "Marteau Frappeur",
			es: "Martillo Impacto",
			it: "Martello Battente",
			pt: "Martelo Detonador",
			de: "Klopfender Hammer"
		},

		effect: {
			en: "Discard the top card of your opponent's deck.",
			fr: "Défaussez la carte du dessus du deck de votre adversaire.",
			es: "Descarta la primera carta de la baraja de tu rival.",
			it: "Scarta la prima carta del mazzo del tuo avversario.",
			pt: "Descarte a carta de cima do baralho do seu oponente.",
			de: "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
		},

		damage: 130
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Kouki Saitou",

	thirdParty: {
		cardmarket: 751717
	}
}

export default card