import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Regigigas"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Ancient Wisdom",
			fr: "Sagesse Ancienne",
			es: "Sabiduría Ancestral",
			it: "Saggezza Antica",
			pt: "Sabedoria Ancestral",
			de: "Uralte Weisheit"
		},

		effect: {
			en: "Once during your turn, if you have Regirock, Regice, Registeel, Regieleki, and Regidrago in play, you may attach up to 3 Energy cards from your discard pile to 1 of your Pokémon.",
			fr: "Une seule fois pendant votre tour, si vous avez Regirock, Regice, Registeel, Regieleki et Regidrago en jeu, vous pouvez attacher jusqu'à 3 cartes Énergie de votre pile de défausse à l'un de vos Pokémon.",
			es: "Una vez durante tu turno, si tienes a Regirock, Regice, Registeel, Regieleki y Regidrago en juego, puedes unir hasta 3 cartas de Energía de tu pila de descartes a 1 de tus Pokémon.",
			it: "Una sola volta durante il tuo turno, se hai Regirock, Regice, Registeel, Regieleki e Regidrago in gioco, puoi assegnare a uno dei tuoi Pokémon fino a tre carte Energia dalla tua pila degli scarti.",
			pt: "Uma vez durante o seu turno, se você tiver Regirock, Regice, Registeel, Regieleki e Regidrago em jogo, você poderá ligar até 3 cartas de Energia da sua pilha de descarte a 1 dos seus Pokémon.",
			de: "Einmal während deines Zuges, wenn du Regirock, Regice, Registeel, Regieleki und Regidrago im Spiel hast, kannst du bis zu 3 Energiekarten aus deinem Ablagestapel an 1 deiner Pokémon anlegen."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Gigaton Break",
			fr: "Brèche Gigatonne",
			es: "Impacto Gigatón",
			it: "Sfondamento Gigatonico",
			pt: "Destruição Gigatônica",
			de: "Gigatonnen-Brecher"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon VMAX, this attack does 150 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-VMAX, cette attaque inflige 150 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon VMAX, este ataque hace 150 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-VMAX, questo attacco infligge 150 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon VMAX, este ataque causará 150 pontos de dano a mais.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-VMAX ist, fügt diese Attacke 150 Schadenspunkte mehr zu."
		},

		damage: "150+"
	}],

	retreat: 4,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card