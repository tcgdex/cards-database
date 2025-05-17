import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Fishing Net",
		fr: "Filet de Pêche",
		es: "Red de Pesca",
		it: "Rete da Pesca",
		de: "Fischernetz",
		'pt-br': "Rede de Pesca",
		ko: "물고기네트"
	},

	illustrator: "Toyste Beach",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		en: "Put a random Basic {W} Pokémon from your discard pile into your hand.",
		fr: "Ajoutez un Pokémon {W} de base de votre pile de défausse à votre main.",
		es: "Pon un Pokémon {W} Básico aleatorio de tu pila de descartes en tu mano.",
		it: "Prendi un Pokémon Base {W} a caso dalla tua pila degli scarti e aggiungilo alle carte che hai in mano.",
		de: "Nimm ein zufälliges Basis-{W}-Pokémon aus deinem Ablagestapel auf deine Hand.",
		'pt-br': "Coloque um Pokémon {W} Básico aleatório da sua pilha de descarte na sua mão.",
		ko: "자신의 트래쉬에서 {W}타입의 기본 포켓몬을 랜덤으로 1장 패로 가져온다."
	},

	trainerType: "Item",
	boosters: ["lunala"]
}

export default card
