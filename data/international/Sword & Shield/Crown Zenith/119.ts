import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [765],
	set: Set,

	name: {
		'en-us': "Oranguru",
		'fr-fr': "Gouroutan",
		'es-es': "Oranguru",
		'it-it': "Oranguru",
		'pt-br': "Oranguru",
		'de-de': "Kommandutan"
	},

	illustrator: "Sekio",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Primate Acting",
			'fr-fr': "Conduite Primate",
			'es-es': "Actuación Primate",
			'it-it': "Messinscena del Primate",
			'pt-br': "Atuação Primata",
			'de-de': "Primaten-Show"
		},

		effect: {
			'en-us': "Choose a Supporter card from your opponent's discard pile and use the effect of that card as the effect of this attack.",
			'fr-fr': "Choisissez une carte Supporter de la pile de défausse de votre adversaire et utilisez l'effet de cette carte en tant qu'effet de cette attaque.",
			'es-es': "Elige 1 carta de Partidario de la pila de descartes de tu rival y usa el efecto de esa carta como efecto de este ataque.",
			'it-it': "Scegli una carta Aiuto dalla pila degli scarti del tuo avversario e usa l'effetto di quella carta come effetto di questo attacco.",
			'pt-br': "Escolha 1 carta de Apoiador da pilha de descarte do seu oponente e use o efeito daquela carta como o efeito deste ataque.",
			'de-de': "Wähle 1 Unterstützerkarte aus dem Ablagestapel deines Gegners und setze den Effekt jener Karte als Effekt dieser Attacke ein."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'es-es': "Martillear",
			'it-it': "Martello",
			'pt-br': "Martelada",
			'de-de': "Einhämmern"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "With waves of its fan—made from leaves and its own fur—Oranguru skillfully gives instructions to other Pokémon.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691838,
				tcgplayer: 478155
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691838,
				tcgplayer: 478155
			}
		},
	],
}

export default card
