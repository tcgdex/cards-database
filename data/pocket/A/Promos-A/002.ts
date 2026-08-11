import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "X Speed",
		'fr-fr': "Vitesse +",
		'es-es': "Velocidad X",
		'it-it': "Velocità X",
		'de-de': "X-Initiative",
		'pt-br': "Velocidade X",
		'ko-kr': "스피드업"
	},

	illustrator: "Toyste Beach",
	rarity: "None",
	category: "Trainer",

	effect: {
		'en-us': "During this turn, the Retreat Cost of your Active Pokémon is 1 less.",
		'fr-fr': "Pendant ce tour, le Coût de Retraite de votre Pokémon Actif est diminué d'une Énergie.",
		'es-es': "Durante este turno, el Coste de Retirada de tu Pokémon Activo es de 1 menos.",
		'it-it': "Durante questo turno, il costo di ritirata del tuo Pokémon attivo è ridotto di 1.",
		'de-de': "Während dieses Zuges verringern sich die Rückzugskosten deines Aktiven Pokémon um 1.",
		'pt-br': "Durante este turno, o custo de Recuo do seu Pokémon Ativo é 1 a menos.",
		'ko-kr': "이 차례에 자신의 배틀 포켓몬의 후퇴에 필요한 에너지를 1개 적게 만든다."
	},

	trainerType: "Item",
	boosters: []
}

export default card
