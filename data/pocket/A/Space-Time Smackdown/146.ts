import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pokémon Communication",
		'fr-fr': "Communication Pokémon",
		'es-es': "Comunicación Pokémon",
		'it-it': "Comunicazione Pokémon",
		'de-de': "Pokémon-Kommunikation",
		'pt-br': "Comunicação Pokémon",
		'ko-kr': "포켓몬통신"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		'en-us': "Choose a Pokémon in your hand and switch it with a random Pokémon in your deck.",
		'fr-fr': "Choisissez un Pokémon de votre main et échangez-le avec un Pokémon de votre deck au hasard.",
		'es-es': "Elige 1 Pokémon de tu mano y cámbialo por 1 Pokémon aleatorio de tu baraja.",
		'it-it': "Scegli un Pokémon fra quelli che hai in mano e sostituiscilo con un Pokémon a caso del mazzo.",
		'de-de': "Wähle 1 Pokémon aus deiner Hand und tausche es mit 1 zufälligen Pokémon aus deinem Deck aus.",
		'pt-br': "Escolha 1 Pokémon na sua mão e troque-o por 1 Pokémon aleatório no seu baralho.",
		'ko-kr': "자신의 패에서 포켓몬을 1장 선택해서 덱에서 랜덤하게 포켓몬 1장과 교체한다."
	},

	trainerType: "Item",
	boosters: ["dialga"]
}

export default card