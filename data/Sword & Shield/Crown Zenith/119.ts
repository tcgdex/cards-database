import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [765],
	set: Set,

	name: {
		en: "Oranguru",
		fr: "Gouroutan",
		es: "Oranguru",
		it: "Oranguru",
		pt: "Oranguru",
		de: "Kommandutan"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Primate Acting",
			fr: "Conduite Primate",
			es: "Actuación Primate",
			it: "Messinscena del Primate",
			pt: "Atuação Primata",
			de: "Primaten-Show"
		},

		effect: {
			en: "Choose a Supporter card from your opponent's discard pile and use the effect of that card as the effect of this attack.",
			fr: "Choisissez une carte Supporter de la pile de défausse de votre adversaire et utilisez l'effet de cette carte en tant qu'effet de cette attaque.",
			es: "Elige 1 carta de Partidario de la pila de descartes de tu rival y usa el efecto de esa carta como efecto de este ataque.",
			it: "Scegli una carta Aiuto dalla pila degli scarti del tuo avversario e usa l'effetto di quella carta come effetto di questo attacco.",
			pt: "Escolha 1 carta de Apoiador da pilha de descarte do seu oponente e use o efeito daquela carta como o efeito deste ataque.",
			de: "Wähle 1 Unterstützerkarte aus dem Ablagestapel deines Gegners und setze den Effekt jener Karte als Effekt dieser Attacke ein."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			es: "Martillear",
			it: "Martello",
			pt: "Martelada",
			de: "Einhämmern"
		},

		damage: 70
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 691838
	}
}

export default card