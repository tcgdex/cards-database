import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Meltan",
		'fr-fr': "Meltan",
		'es-es': "Meltan",
		'it-it': "Meltan",
		'de-de': "Meltan",
		'pt-br': "Meltan",
		'ko-kr': "멜탄"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",

	dexId: [808],
	hp: 60,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Amass",
			'fr-fr': "Amas",
			'es-es': "Amasar",
			'it-it': "Ammasso",
			'de-de': "Anhäufen",
			'pt-br': "Acumular",
			'ko-kr': "저축하기"
		},

		effect: {
			'en-us': "Take 1 {M} Energy from your Energy Zone and attach it to this Pokémon.",
			'fr-fr': "Prenez une Énergie {M} de votre zone Énergie et attachez-la à ce Pokémon.",
			'es-es': "Une 1 Energía {M} de tu área de Energía a este Pokémon.",
			'it-it': "Prendi un'Energia {M} dalla tua Zona Energia e assegnala a questo Pokémon.",
			'de-de': "Lege 1 {M}-Energie aus deinem Energiebereich an dieses Pokémon an.",
			'pt-br': "Pegue 1 Energia {M} da sua Zona de Energia e ligue-a a este Pokémon.",
			'ko-kr': "자신의 에너지존에서 {M}에너지를 1개 내보내 이 포켓몬에게 붙인다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		'en-us': "It dissolves and eats metal. Circulating liquid metal within its body is how it generates energy.",
		'fr-fr': "Il se nourrit du métal qu'il fait fondre, et produit de l'énergie\nen faisant circuler du métal liquide dans son corps.",
		'es-es': "Funde metales para ingerirlos.\nUna vez licuados, los hace circular por el\ninterior de su cuerpo para generar energía.",
		'it-it': "Fonde il metallo per cibarsene, e lo fa\ncircolare nel suo corpo per produrre energia.",
		'de-de': "Es schmilzt Metall ein und frisst es.\nIn seinem Körper wandelt es das flüssig\ngewordene Metall in Energie um.",
		'pt-br': "Dissolve e come metal. Este Pokémon gera energia\nquando metal líquido corre pelo seu corpo.",
		'ko-kr': "금속을 녹여서 먹어버린다.\n액체 금속을 순환시켜서\n체내에서 에너지를 만든다."
	},

	boosters: ["charizard"]
}

export default card
