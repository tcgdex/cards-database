import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Famignol",
		en: "Maushold",
		es: "Maushold",
		it: "Maushold",
		pt: "Maushold",
		de: "Famieps"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Gifle Douce",
			en: "Gentle Slap",
			es: "Bofetada Gentil",
			it: "Schiaffetto",
			pt: "Tapinha",
			de: "Sanfter Hieb"
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Rongement Incessant",
			en: "Gnaw Relentlessly",
			es: "Roer sin Parar",
			it: "Rosicchiamento Incessante",
			pt: "Roída Incessante",
			de: "Unerbittliches Nagen"
		},

		effect: {
			fr: "Placez un marqueur de dégâts sur chacun des Pokémon de votre adversaire pour chacun de vos Famignol en jeu.",
			en: "Put 1 damage counter on each of your opponent's Pokémon for each of your Maushold in play.",
			es: "Pon 1 contador de daño en cada uno de los Pokémon de tu rival por cada uno de tus Maushold en juego.",
			it: "Metti un segnalino danno su ciascuno dei Pokémon del tuo avversario per ogni tuo Maushold in gioco.",
			pt: "Coloque 1 contador de dano em cada um dos Pokémon do seu oponente para cada um dos seus Maushold em jogo.",
			de: "Lege für jedes deiner Famieps im Spiel 1 Schadensmarke auf jedes Pokémon deines Gegners."
		}
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Saya Tsuruta"
}

export default card