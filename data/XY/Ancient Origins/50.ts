import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Metagross",
		fr: "Métalosse",
		es: "Metagross",
		it: "Metagross",
		pt: "Metagross",
		de: "Metagross"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		376,
	],

	hp: 150,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Metang",
		fr: "Métang",
		es: "Metang",
		it: "Metang",
		pt: "Metang",
		de: "Metang"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Machine Gun Stomp",
				fr: "Mitraille-Piétinage",
				es: "Pisotón Incesante",
				it: "Pestata Mitra",
				pt: "Pisadura Metralhada",
				de: "Trommelfeuer-Stampfer"
			},
			effect: {
				en: "This attack does 10 more damage for each card in your hand.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque carte dans votre main.",
				es: "Este ataque hace 10 puntos de daño más por cada carta en tu mano.",
				it: "Questo attacco infligge 10 danni in più per ogni carta nella tua mano.",
				pt: "Este ataque causa 10 de danos adicionais para cada card que tiver na mão.",
				de: "Dieser Angriff fügt 10 weitere Schadenspunkte für jede Karte auf deiner Hand zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Guard Press",
				fr: "Pression de Garde",
				es: "Presión de Guardia",
				it: "Pressadifesa",
				pt: "Aperto Protetor",
				de: "Schutzdruck"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				es: "Durante el próximo turno de tu rival, cualquier daño infligido a este Pokémon por ataques se reduce en 20 (después de aplicar Debilidad y Resistencia).",
				it: "Durante il prossimo turno del tuo avversario, i danni inflitti a questo Pokémon dagli attacchi sono ridotti di 20, dopo aver applicato debolezza e resistenza.",
				pt: "Durante a próxima vez de jogar do seu oponente, qualquer dano causado a este Pokémon por ataques será reduzido em 20 (após a aplicação de Fraqueza e Resistência).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der diesem Pokémon durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 80,

		}
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	abilities: [{
		type: "Ability",

		name: {
			en: "{title}:",
			fr: "{title}:",
			es: "{title}:",
			it: "{title}:",
			pt: "{title}:",
			de: "{title}:"
		},

		effect: {
			en: "{title}: This Pokémon may have up to 2 Pokémon Tool cards attached to it.",
			fr: "{title}: Jusqu'à 2 cartes Outil Pokémon peuvent être attachées à ce Pokémon.",
			es: "{title}: Este Pokémon puede tener hasta 2 cartas de Herramienta Pokémon unidas a él.",
			it: "{title}: Questo Pokémon può avere fino a due carte Oggetto Pokémon assegnate.",
			pt: "{title}: Este Pokémon pode ter até dois cards de Ferramenta Pokémon ligados a ele.",
			de: "{title}: An dieses Pokémon können bis zu 2 Pokémon-Ausrüstungen angelegt sein."
		}
	}],

	thirdParty: {
		cardmarket: 284230
	}
}

export default card
