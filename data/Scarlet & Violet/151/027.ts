import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [27],
	set: Set,

	name: {
		fr: "Sabelette",
		en: "Sandshrew",
		es: "Sandshrew",
		it: "Sandshrew",
		pt: "Sandshrew",
		de: "Sandan"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Écran de Sable",
			en: "Sand Screen",
			es: "Pantalla de Arena",
			it: "Sabbiaschermo",
			pt: "Cortina de Areia",
			de: "Sandschirm"
		},

		effect: {
			fr: "Les cartes Dresseur dans la pile de défausse de votre adversaire ne peuvent pas être placées dans son deck par les effets des cartes Objet ou Supporter de votre adversaire.",
			en: "Trainer cards in your opponent's discard pile can't be put into their deck by an effect of your opponent's Item or Supporter cards.",
			es: "Las cartas de Entrenador en la pila de descartes de tu rival no pueden ponerse en su baraja por ningún efecto de las cartas de Objeto o de Partidario de tu rival.",
			it: "Le carte Allenatore nella pila degli scarti del tuo avversario non possono essere messe nel suo mazzo per effetto delle carte Strumento o carte Aiuto del tuo avversario.",
			pt: "Cartas de Treinador na pilha de descarte do seu oponente não podem ser colocadas no baralho dele pelos efeitos de cartas de Item ou Apoiador do seu oponente.",
			de: "Trainerkarten im Ablagestapel deines Gegners können nicht durch einen Effekt von Item- oder Unterstützerkarten deines Gegners in sein Deck gelegt werden."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Griffe",
			en: "Scratch",
			es: "Arañazo",
			it: "Graffio",
			pt: "Arranhão",
			de: "Kratzer"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "kodama",

	thirdParty: {
		cardmarket: 733714
	}
}

export default card