import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Dhelmise",
		fr: "Sinistrail",
		es: "Dhelmise",
		it: "Dhelmise",
		pt: "Dhelmise",
		de: "Moruda"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Rescue Kedge",
			fr: "Ancrage Salvateur",
			es: "Áncora de Rescate",
			it: "Ancorotto di Soccorso",
			pt: "Resgate Atracado",
			de: "Rettungsanker"
		},

		effect: {
			en: "Put up to 2 Pokémon from your discard pile into your hand.",
			fr: "Ajoutez jusqu'à 2 Pokémon de votre pile de défausse à votre main.",
			es: "Pon hasta 2 Pokémon de tu pila de descartes en tu mano.",
			it: "Prendi fino a due Pokémon dalla tua pila degli scarti e aggiungili alle carte che hai in mano.",
			pt: "Coloque até 2 Pokémon da sua pilha de descarte na sua mão.",
			de: "Nimm bis zu 2 Pokémon aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Annihilating Anchor",
			fr: "Ancre Annihilante",
			es: "Ancla Aniquiladora",
			it: "Ancora di Distruzione",
			pt: "Âncora Aniquiladora",
			de: "Vernichtungsanker"
		},

		effect: {
			en: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon.",
			fr: "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
			es: "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
			it: "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon dal Pokémon attivo del tuo avversario.",
			pt: "Antes de causar dano, descarte todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente.",
			de: "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 80
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card