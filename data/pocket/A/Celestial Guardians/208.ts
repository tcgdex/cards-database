import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Guzma",
		'fr-fr': "Guzma",
		'es-es': "Guzmán",
		'it-it': "Guzman",
		'de-de': "Bromley",
		'pt-br': "Guzma",
		'ko-kr': "구즈마"
	},

	illustrator: "danciao",
	rarity: "Three Star",
	category: "Trainer",

	effect: {
		'en-us': "Discard all Pokémon Tool cards attached to each of your opponent's Pokémon.",
		'fr-fr': "Défaussez toutes les cartes Outil Pokémon attachées à chacun des Pokémon de votre adversaire.",
		'es-es': "Descarta todas las cartas de Herramienta Pokémon unidas a cada uno de los Pokémon de tu rival.",
		'it-it': "Scarta tutte le carte Oggetto Pokémon assegnate ai Pokémon del tuo avversario.",
		'de-de': "Lege alle an gegnerische Pokémon angelegte Pokémon-Ausrüstungen auf den Ablagestapel deines Gegners.",
		'pt-br': "Descarte todas as cartas de Ferramenta Pokémon ligadas a cada um dos Pokémon do seu oponente.",
		'ko-kr': "상대의 포켓몬 전원으로부터 「포켓몬의 도구」를 모두 트래쉬한다."
	},

	trainerType: "Supporter",
	boosters: ["lunala"]
}

export default card