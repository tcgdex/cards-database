import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Poké Ball",
		fr: "Poké Ball",
		es: "Poké Ball",
		it: "Poké Ball",
		de: "Pokéball",
		'pt-br': "Poké Bola",
		ko: "몬스터볼"
	},

	illustrator: "Toyste Beach",
	rarity: "Crown",
	category: "Trainer",

	effect: {
		en: "Put a random Basic Pokémon from your deck into your hand.",
		fr: "Ajoutez au hasard un Pokémon de base de votre deck à votre main.",
		es: "Pon 1 Pokémon Básico aleatorio de tu baraja en tu mano.",
		it: "Prendi un Pokémon Base a caso dal tuo mazzo e aggiungilo alle carte che hai in mano.",
		de: "Nimm 1 zufälliges Basis-Pokémon aus deinem Deck auf deine Hand.",
		
		ko: "자신의 덱에서 기본 포켓몬을 랜덤으로 1장 패로 가져온다.",
		'pt-br': "Coloque 1 Pokémon Básico aleatório do seu baralho na sua mão."
	},

	trainerType: "Item"
}

export default card