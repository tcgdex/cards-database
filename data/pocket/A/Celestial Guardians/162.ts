import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Alolan Vulpix",
		'fr-fr': "Goupixd'Alola",
		'es-es': "Vulpixde Alola",
		'it-it': "Vulpixdi Alola",
		'de-de': "Alola-Vulpix",
		'pt-br': "Vulpixde Alola",
		'ko-kr': "알로라식스테일"
	},

	illustrator: "tono",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [37],
	hp: 60,
	types: ["Water"],

	description: {
		'en-us': "After long years in the ever-snowcapped mountains of Alola, this Vulpix has gained power over ice.",
		'fr-fr': "Après de longues années passées à vivre dans\nles névés des sommets d'Alola, ce Pokémon\na appris à canaliser le pouvoir de la glace.",
		'es-es': "Aprendió a dominar el hielo tras habitar durante años\nlas montañas de nieves eternas de la región de Alola.",
		'it-it': "Ha imparato a utilizzare la potenza del ghiaccio dopo aver vissuto\nper anni sui monti coperti da nevi perenni della regione di Alola.",
		'de-de': "Es hat lange in den allzeit schneebedeckten Bergen\nAlolas gelebt und sich dort über die Jahre die Kraft\ndes Eises angeeignet.",
		'pt-br': "Após muitos anos nas montanhas sempre nevadas\nde Alola, este Vulpix ganhou domínio sobre o gelo.",
		'ko-kr': "알로라지방의 만년설이\n쌓인 산에서 오랫동안 살면서\n얼음의 능력을 손에 넣었다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Call Forth Cold",
			'fr-fr': "Appel au Froid",
			'es-es': "Convocar Frío",
			'it-it': "Richiamo del Freddo",
			'de-de': "Kälteruf",
			'pt-br': "Invocar Frio",
			'ko-kr': "냉기부르기"
		},

		cost: ["Water"],

		effect: {
			'en-us': "Take a {W} Energy from your Energy Zone and attach it to this Pokémon.",
			'fr-fr': "Prenez une Énergie {W} de votre zone Énergie et attachez-la à ce Pokémon.",
			'es-es': "Une 1 Energía {W} de tu área de Energía a este Pokémon.",
			'it-it': "Prendi un'Energia {W} dalla tua Zona Energia e assegnala a questo Pokémon.",
			'de-de': "Lege 1 {W}-Energie aus deinem Energiebereich an dieses Pokémon an.",
			'pt-br': "Pegue 1 Energia {W} da sua Zona de Energia e ligue-a a este Pokémon.",
			'ko-kr': "자신의 에너지존에서 {W}에너지를 1개 내보내 이 포켓몬에게 붙인다."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lunala"]
}

export default card
