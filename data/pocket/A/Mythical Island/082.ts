import { Card } from "models/database/card"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Leaf",
		'fr-fr': "Leaf",
		'es-es': "Hoja",
		'it-it': "Leaf",
		'de-de': "Leaf",
		'pt-br': "Leaf",
		'ko-kr': "리프"
	},

	illustrator: "En Morikura",
	category: "Trainer",

	effect: {
		'en-us': "During this turn, the Retreat Cost of your Active Pokémon is 2 less.",
		'fr-fr': "Pendant ce tour, le Coût de Retraite de votre Pokémon Actif est diminué de 2 Énergies.",
		'es-es': "Durante este turno, el Coste de Retirada de tu Pokémon Activo es de 2 menos.",
		'it-it': "Durante questo turno, il costo di ritirata del tuo Pokémon attivo è ridotto di 2.",
		'de-de': "Während dieses Zuges verringern sich die Rückzugskosten deines Aktiven Pokémon um 2.",
		'pt-br': "Durante este turno, o custo de Recuo do seu Pokémon Ativo é 2 a menos.",
		'ko-kr': "이 차례에 자신의 배틀 포켓몬의 후퇴에 필요한 에너지를 2개 적게 만든다."
	},

	trainerType: "Supporter",
	rarity: "Two Star"
}

export default card