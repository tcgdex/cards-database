import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Kiawe",
		'fr-fr': "Kiawe",
		'es-es': "Kiawe",
		'it-it': "Kawe",
		'de-de': "Kiawe",
		'pt-br': "Kiawe",
		'ko-kr': "키아웨"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Two Star",
	category: "Trainer",

	effect: {
		'en-us': "Choose 1 of your Alolan Marowak or Turtonator. Take 2 {R} Energy from your Energy Zone and attach it to that Pokémon. Your turn ends.",
		'fr-fr': "Choisissez un de vos Ossatueur[Text:Char v=\"FOUR-PER-EM-SPACE\" ][Text:AdditionalName v=\"ADDITIONAL_NAME_Alora\" type=\"region\" ] ou Boumata. Prenez 2 Énergies {R} de votre zone Énergie et attachez-les à ce Pokémon. Votre tour se termine.",
		'es-es': "Elige 1 de tus Marowak[Text:Char v=\"FOUR-PER-EM-SPACE\" ][Text:AdditionalName v=\"ADDITIONAL_NAME_Alora\" type=\"region\" ] o tus Turtonator. Une 2 Energías {R} de tu área de Energía a ese Pokémon. Tu turno termina.",
		'it-it': "Scegli uno dei tuoi Marowak[Text:Char v=\"FOUR-PER-EM-SPACE\" ][Text:AdditionalName v=\"ADDITIONAL_NAME_Alora\" type=\"region\" ] o Turtonator. Prendi 2 Energie {R} dalla tua Zona Energia e assegnale a quel Pokémon. Il tuo turno finisce.",
		'de-de': "Wähle 1 deiner [Text:AdditionalName v=\"ADDITIONAL_NAME_Alora\" type=\"region\" ]Knogga oder Tortunator. Lege 2 {R}-Energien aus deinem Energiebereich an dieses Pokémon an. Dein Zug endet.",
		'pt-br': "Escolha 1 dos seus Marowak[Text:Char v=\"FOUR-PER-EM-SPACE\" ][Text:AdditionalName v=\"ADDITIONAL_NAME_Alora\" type=\"region\" ] ou Turtonator. Pegue 2 Energias {R} da sua Zona de Energia e ligue-as àquele Pokémon. O seu turno acaba.",
		'ko-kr': "이 카드를 사용하면 자신의 차례는 끝난다.\n자신의 「[Text:AdditionalName v=\"ADDITIONAL_NAME_Alora\" type=\"region\" ][Text:Char v=\"FOUR-PER-EM-SPACE\" ]텅구리」 또는 「폭거북스」 1마리 선택한다. 자신의 에너지존에서 {R}에너지를 2개 내보내 그 포켓몬에게 붙인다."
	},

	trainerType: "Supporter",
	boosters: ["lunala"]
}

export default card
