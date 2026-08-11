import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Koga",
		'fr-fr': "Koga",
		'es-es': "Koga",
		'it-it': "Koga",
		'de-de': "Koga",
		'pt-br': "Koga",
		'ko-kr': "독수"
	},

	illustrator: "Souichirou Gunjima",
	category: "Trainer",

	effect: {
		'en-us': "Put your Muk or Weezing in the Active Spot into your hand.",
		'fr-fr': "Ajoutez votre Grotadmorv ou votre Smogogo sur le Poste Actif à votre main.",
		'es-es': "Pon a tu Muk o a tu Weezing que esté en el Puesto Activo en tu mano.",
		'it-it': "Riprendi in mano il tuo Muk o Weezing in posizione attiva.",
		'de-de': "Nimm dein Sleimok oder Smogmog in der Aktiven Position auf deine Hand.",
		'pt-br': "Coloque seu Muk ou Weezing do Campo Ativo na sua mão.",
		'ko-kr': "자신의 배틀필드의 「질뻐기」「또도가스」를 패로 되돌린다."
	},

	trainerType: "Supporter",
	rarity: "Two Star",
	boosters: ["mewtwo"]
}

export default card
