import { Card } from "models/database/card"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Budding Expeditioner",
		'fr-fr': "Jeune Explorateur",
		'es-es': "Explorador Novel",
		'it-it': "Esploratore in Erba",
		'de-de': "Abenteurer-Neuling",
		'pt-br': "Expedicionário Principiante",
		'ko-kr': "신출내기 조사원"
	},

	illustrator: "Yuu Nishida",
	category: "Trainer",

	effect: {
		'en-us': "Put your Mew ex in the Active Spot into your hand.",
		'fr-fr': "Ajoutez votre Mew-ex sur le Poste Actif à votre main.",
		'es-es': "Pon a tu Mew ex que esté en el Puesto Activo en tu mano.",
		'it-it': "Riprendi in mano il tuo Mew-ex in posizione attiva.",
		'de-de': "Nimm dein Mew-ex in der Aktiven Position auf deine Hand.",
		'pt-br': "Coloque seu Mew ex do Campo Ativo na sua mão.",
		'ko-kr': "자신의 배틀필드의 「뮤 ex」 패로 되돌린다."
	},

	trainerType: "Supporter",
	rarity: "Two Diamond"
}

export default card
