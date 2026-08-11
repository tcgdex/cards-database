import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Brock",
		'fr-fr': "Pierre",
		'es-es': "Brock",
		'it-it': "Brock",
		'de-de': "Rocko",
		'pt-br': "Brock",
		'ko-kr': "웅"
	},

	illustrator: "Ryuta Fuse",
	category: "Trainer",

	effect: {
		'en-us': "Take 1 {F} Energy from your Energy Zone and attach it to your Golem or Onix.",
		'fr-fr': "Prenez une Énergie {F} de votre zone Énergie et attachez-la à Grolem[Text:Char v=\"FOUR-PER-EM-SPACE\" ][Text:AdditionalName v=\"ADDITIONAL_NAME_Alora\" type=\"region\" ] ou Onix.",
		'es-es': "Une 1 Energía {F} de tu área de Energía a tu Golem[Text:Char v=\"FOUR-PER-EM-SPACE\" ][Text:AdditionalName v=\"ADDITIONAL_NAME_Alora\" type=\"region\" ] o a tu Onix.",
		'it-it': "Prendi un'Energia {F} dalla tua Zona Energia e assegnala a Golem[Text:Char v=\"FOUR-PER-EM-SPACE\" ][Text:AdditionalName v=\"ADDITIONAL_NAME_Alora\" type=\"region\" ] oppure a Onix.",
		'de-de': "Lege 1 {F}-Energie aus deinem Energiebereich an [Text:AdditionalName v=\"ADDITIONAL_NAME_Alora\" type=\"region\" ]Geowaz oder Onix an.",
		'pt-br': "Pegue 1 Energia {F} da sua Zona de Energia e ligue-a a Golem[Text:Char v=\"FOUR-PER-EM-SPACE\" ][Text:AdditionalName v=\"ADDITIONAL_NAME_Alora\" type=\"region\" ] ou Onix.",
		'ko-kr': "자신의 에너지존에서 {F}에너지를 1개 내보내 「[Text:AdditionalName v=\"ADDITIONAL_NAME_Alora\" type=\"region\" ][Text:Char v=\"FOUR-PER-EM-SPACE\" ]딱구리」 또는 「롱스톤」에게 붙인다."
	},

	trainerType: "Supporter",
	rarity: "Two Star",
	boosters: ["pikachu"]
}

export default card
