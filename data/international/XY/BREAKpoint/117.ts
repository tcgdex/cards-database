import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Espeon EX",
		'fr-fr': "Mentali EX",
		'es-es': "Espeon EX",
		'it-it': "Espeon EX",
		'pt-br': "Espeon EX",
		'de-de': "Psiana EX"
	},

	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		196,
	],

	hp: 170,

	types: [
		"Psychic",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Miraculous Shine",
				'fr-fr': "Éclat Miracle",
				'es-es': "Brillo Milagroso",
				'it-it': "Bagliore Miracoloso",
				'pt-br': "Brilho Milagroso",
				'de-de': "Wundersamer Glanz"
			},
			effect: {
				'en-us': "Devolve each of your opponent's evolved Pokémon and put the highest Stage Evolution card on it into your opponent's hand.",
				'fr-fr': "Faites dés-évoluer chacun des Pokémon évolués de votre adversaire et mettez sa carte Évolution de plus haut Niveau dans la main de votre adversaire.",
				'es-es': "Involuciona a cada uno de los Pokémon evolucionados de tu rival y pon la carta de Evolución de fase más alta que tenga sobre él en la mano de tu rival.",
				'it-it': "Annulla l'evoluzione di ciascuno dei Pokémon evoluti del tuo avversario e mettine la carta Evoluzione di fase più alta nella sua mano.",
				'pt-br': "Reverte cada um dos Pokémon evoluídos do seu oponente e coloca o card de Evolução de Estágio mais alto na mão do seu oponente.",
				'de-de': "Rückentwickle jedes entwickelte Pokémon deines Gegners. Dein Gegner nimmt die höchste daraufliegende Evolutionskarte auf seine Hand."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psyshock",
				'fr-fr': "Choc Psy",
				'es-es': "Psicocarga",
				'it-it': "Psicoshock",
				'pt-br': "Choque Psíquico",
				'de-de': "Psychoschock"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
				'es-es': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
				'it-it': "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
				'pt-br': "Os danos deste ataque não são afetados por quaisquer efeitos no Pokémon Ativo do seu oponente.",
				'de-de': "Der Schaden dieses Angriffs wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,
	stage: "Basic",

	thirdParty: {
		cardmarket: 288292,
		tcgplayer: 111558
	}
}

export default card
