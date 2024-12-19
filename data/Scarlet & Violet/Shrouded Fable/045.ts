import { Card } from "../../../interfaces"
import Set from "../Shrouded Fable"

const card: Card = {
	set: Set,

	name: {
		en: "Fraxure",
		fr: "Incisache",
		es: "Fraxure",
		it: "Fraxure",
		pt: "Fraxure",
		de: "Sharfax"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Unnerve",
			fr: "Tension",
			es: "Nerviosismo",
			it: "Agitazione",
			pt: "Enervar",
			de: "Anspannung"
		},

		effect: {
			en: "Whenever your opponent plays an Item or Supporter card from their hand, prevent all effects of that card done to this Pokémon.",
			fr: "Chaque fois que votre adversaire joue une carte Objet ou Supporter de sa main, évitez tous les effets de cette carte sur ce Pokémon.",
			es: "Cada vez que tu rival juegue una carta de Objeto o de Partidario de su mano, se evitan todos los efectos de esa carta infligidos a este Pokémon.",
			it: "Ogni volta che il tuo avversario gioca una carta Strumento o Aiuto che ha in mano, previeni tutti gli effetti di quella carta su questo Pokémon.",
			pt: "Sempre que seu oponente jogar uma carta de Item ou de Apoiador da mão dele, previna todos os efeitos daquela carta causados a este Pokémon.",
			de: "Verhindere jedes Mal, wenn dein Gegner 1 Item- oder Unterstützerkarte aus seiner Hand spielt, alle Effekte jener Karte, die diesem Pokémon zugefügt werden."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Metal"],

		name: {
			en: "Dragon Pulse",
			fr: "Draco-Choc",
			es: "Pulso Dragón",
			it: "Dragopulsar",
			pt: "Pulso do Dragão",
			de: "Drachenpuls"
		},

		effect: {
			en: "Discard the top card of your deck.",
			fr: "Défaussez la carte du dessus de votre deck.",
			es: "Descarta la primera carta de tu baraja.",
			it: "Scarta la prima carta del tuo mazzo.",
			pt: "Descarte a carta de cima do seu baralho.",
			de: "Lege die oberste Karte deines Decks auf deinen Ablagestapel."
		},

		damage: 80
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	evolveFrom: {
		en: "Axew",
		fr: "Coupenotte",
		es: "Axew",
		it: "Axew",
		pt: "Axew",
		de: "Milza"
	}
}

export default card
