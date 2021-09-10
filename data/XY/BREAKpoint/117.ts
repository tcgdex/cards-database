import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Espeon EX",
		fr: "Mentali EX",
		es: "Espeon EX",
		it: "Espeon EX",
		pt: "Espeon EX",
		de: "Psiana EX"
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
				en: "Miraculous Shine",
				fr: "Éclat Miracle",
				es: "Brillo Milagroso",
				it: "Bagliore Miracoloso",
				pt: "Brilho Milagroso",
				de: "Wundersamer Glanz"
			},
			effect: {
				en: "Devolve each of your opponent’s evolved Pokémon and put the highest Stage Evolution card on it into your opponent’s hand.",
				fr: "Faites dés-évoluer chacun des Pokémon évolués de votre adversaire et mettez sa carte Évolution de plus haut Niveau dans la main de votre adversaire.",
				es: "Involuciona a cada uno de los Pokémon evolucionados de tu rival y pon la carta de Evolución de fase más alta que tenga sobre él en la mano de tu rival.",
				it: "Annulla l’evoluzione di ciascuno dei Pokémon evoluti del tuo avversario e mettine la carta Evoluzione di fase più alta nella sua mano.",
				pt: "Reverte cada um dos Pokémon evoluídos do seu oponente e coloca o card de Evolução de Estágio mais alto na mão do seu oponente.",
				de: "Rückentwickle jedes entwickelte Pokémon deines Gegners. Dein Gegner nimmt die höchste daraufliegende Evolutionskarte auf seine Hand."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psyshock",
				fr: "Choc Psy",
				es: "Psicocarga",
				it: "Psicoshock",
				pt: "Choque Psíquico",
				de: "Psychoschock"
			},
			effect: {
				en: "This attack’s damage isn’t affected by any effects on your opponent’s Active Pokémon.",
				fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
				es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
				it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
				pt: "Os danos deste ataque não são afetados por quaisquer efeitos no Pokémon Ativo do seu oponente.",
				de: "Der Schaden dieses Angriffs wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
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



}

export default card
