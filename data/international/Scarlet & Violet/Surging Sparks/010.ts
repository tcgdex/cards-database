import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [781],
	set: Set,

	name: {
		'en-us': "Dhelmise",
		'fr-fr': "Sinistrail",
		'es-es': "Dhelmise",
		'it-it': "Dhelmise",
		'pt-br': "Dhelmise",
		'de-de': "Moruda"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Rescue Kedge",
			'fr-fr': "Ancrage Salvateur",
			'es-es': "Áncora de Rescate",
			'it-it': "Ancorotto di Soccorso",
			'pt-br': "Resgate Atracado",
			'de-de': "Rettungsanker"
		},

		effect: {
			'en-us': "Put up to 2 Pokémon from your discard pile into your hand.",
			'fr-fr': "Ajoutez jusqu'à 2 Pokémon de votre pile de défausse à votre main.",
			'es-es': "Pon hasta 2 Pokémon de tu pila de descartes en tu mano.",
			'it-it': "Prendi fino a due Pokémon dalla tua pila degli scarti e aggiungili alle carte che hai in mano.",
			'pt-br': "Coloque até 2 Pokémon da sua pilha de descarte na sua mão.",
			'de-de': "Nimm bis zu 2 Pokémon aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Annihilating Anchor",
			'fr-fr': "Ancre Annihilante",
			'es-es': "Ancla Aniquiladora",
			'it-it': "Ancora di Distruzione",
			'pt-br': "Âncora Aniquiladora",
			'de-de': "Vernichtungsanker"
		},

		effect: {
			'en-us': "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon.",
			'fr-fr': "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
			'es-es': "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
			'it-it': "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon dal Pokémon attivo del tuo avversario.",
			'pt-br': "Antes de causar dano, descarte todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente.",
			'de-de': "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794265,
				tcgplayer: 589917
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794265,
				tcgplayer: 589917
			}
		},
	],

	illustrator: "Mori Yuu",
	
}

export default card
